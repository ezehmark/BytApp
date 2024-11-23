import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
interface powerProps {
  isCard: boolean;
  toggleCard: () => void;
  handleSelectCard: (cardName: string) => void;
  handleWhich: (cardName: string) => void;
}

// Define an array of gift cards
const powerStates = [
  { name: "AEDC", uri: "https://i.postimg.cc/LsCWTQj5/images-37.jpg" },

{ name: "IBEDC", uri: "https://i.postimg.cc/GmbS1nQ9/images-26.png"},

{ name: "EKDC", uri: "https://i.postimg.cc/fWxKWgkd/images-38.jpg"},

{ name: "IKEDC", uri: "https://i.postimg.cc/9XtdHRNt/images-27.png"},

{ name: "KEDCO", uri: "https://i.postimg.cc/HLXJ0Rq4/images-28.png"},

{ name: "KADECO", uri: "https://i.postimg.cc/Hk2WpH1N/download-2.png"},

{ name: "JED", uri: "https://i.postimg.cc/wTY9L36P/download-1.jpg"},

{ name: "PHED", uri: "https://i.postimg.cc/wTY9L36P/download-1.jpg"},
];

const PowerStates: React.FC<powerProps> = ({
  isCard,
  toggleCard,
  handleWhich,
  handleSelectCard,
}) => {
  if (!isCard) return null;

  return (
    <BlurView style={styles.mainBodi}>
      <View style={styles.bodi}>
        <TouchableOpacity onPress={() => toggleCard()} style={styles.closeBtn}>
          ❌
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.msg}>Choose State</Text>

          <View style={styles.contentArea}>
            <ScrollView style={styles.scrollArea}>
              <View style={styles.msgArea}>
                {powerStates.map((network, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.giftCardBox}
                    onPress={() => {
                      handleWhich(network.name);
                      handleSelectCard(network.name);
                    }}
                  >
                    <View style={styles.logoCover}>
                      <Image
                        style={styles.networkLogo}
                        source={{ uri: network.uri }}
                      />
                    </View>
                    <Text style={styles.networkName}>{network.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  mainBodi: { height: "100%", width: "100%", position: "absolute", zIndex: 20 },
  bodi: {
    height: "85%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 30,
    top: 25,
    padding: 10,
    backgroundColor: "#274647",
    left: "5%",
    shadowColor: "black",
    shadowOffset: { height: 6, width: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 7,
    position: "absolute",
    zIndex: 10,
  },
  msg: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 4,
    alignSelf: "center",
    color: "#274647",
  },
  closeBtn: {
    height: 25,
    width: 45,
    textAlign: "center",
    color: "white",
    backgroundColor: "#fbdc08",
    borderRadius: 10,
    marginLeft: "75%",
    top: -2.5,
    zIndex: 3,
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    borderRadius: 25,
    height: "90%",
    width: "95%",
    justifyContent: "center",
    backgroundColor: "#118da7",
    left: "2.5%",
    top: 35,
  },
  contentArea: {
    position: "absolute",
    width: "95%",
    height: "90%",
    padding: 20,
    top: 30,
    backgroundColor: "#d7e5d3",
    borderRadius: 25,
    left: "2.5%",
    overflow: "hidden",
  },
  scrollArea: {
    position: "absolute",
    height: "95%",
    width: "95%",
    alignSelf: "center",
    top: 4,
    paddingBottom: 40,
  },
  msgArea: {
    position: "absolute",
    height: 350,
    width: "98%",
    backgroundColor: "d7e5d3",
    justifyContent: "space-around",
    flexDirection: "column",
    alignSelf: "center",
    top: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
    gap: 10,
  },
  giftCardBox: {
    height: 70,
    width: "90%",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20a385",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  networkName: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    position: "absolute",
    left: 60,
    fontWeight: "bold",
  },
  logoCover: {
    position: "absolute",
    height: 40,
    width: 40,
    alignSelf: "center",
    left: 5,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "black",
  },

  networkLogo: {
    resizeMode: "cover",
    position: "absolute",
    height: 40,
    width: 40,
    alignSelf: "center",
  },
});

export default PowerStates;

