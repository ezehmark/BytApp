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

interface nineProps {
  isList: boolean;

  toggleCardList: () => void;

  onSelectCard: (giftCard: string) => void;
}

// Define an array of gift cards

const ninemobilePlans = [
  { name: "500MB = ₦130", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  { name: "1GB = ₦285", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  { name: "2GB = ₦380", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  { name: "3GBB = ₦570", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  { name: "4.5GB = ₦855", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  { name: "11GB = ₦2,090", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  {
    name: "15.5B = ₦2,945",
    uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg",
  },

  { name: "40GB = ₦7,600", uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg" },

  {
    name: "75GB = ₦14,250",
    uri: "https://i.postimg.cc/rwM8d5ZP/images-18.jpg",
  },
];

const NineMobilePlans: React.FC<nineProps> = ({
  isList,
  toggleCardList,
  onSelectCard,
}) => {
  if (!isList) return null;

  return (
    <BlurView style={styles.mainBodi}>
          
      <View style={styles.bodi}>
              
        <TouchableOpacity
          onPress={() => toggleCardList()}
          style={styles.closeBtn}
        >
          <Text>❌</Text>
        </TouchableOpacity>
              
        <View style={styles.container}>
                  <Text style={styles.msg}>Gift Card Type</Text>
                  
          <View style={styles.contentArea}>
                      
            <ScrollView style={styles.scrollArea}>
                          
              <View style={styles.msgArea}>
                              
                {ninemobilePlans.map((amazon, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.giftCardBox}
                    onPress={() => onSelectCard(amazon.name)}
                  >
                    <View style={styles.logoCover}>
                      <Image
                        style={styles.giftCardLogo}
                        source={{ uri: amazon.uri }}
                      />
                    </View>
                                      
                    <Text style={styles.giftCardName}>{amazon.name}</Text>
                                    
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

    backgroundColor: "#28272c",

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
    fontSize: 17,

    fontWeight: "bold",

    position: "absolute",

    top: 7,

    alignSelf: "center",

    color: "#3CB2CB",
  },

  closeBtn: {
    height: 25,

    width: 45,

    textAlign: "center",

    color: "white",

    backgroundColor: "black",

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

    backgroundColor: "black",

    left: "2.5%",

    top: 35,
  },

  contentArea: {
    position: "absolute",

    width: "95%",

    height: "90%",

    padding: 20,

    top: 30,

    backgroundColor: "#5d6262",

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

    flex: 1,

    width: "98%",

    backgroundColor: "#5d6262",

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

    backgroundColor: "#3CB2CB",

    shadowColor: "black",

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.25,

    shadowRadius: 3.84,

    elevation: 5,
  },

  giftCardName: {
    color: "black",

    fontSize: 15,

    alignSelf: "center",

    position: "absolute",

    left: 40,

    fontWeight: "bold",
  },

  logoCover: {
    position: "absolute",
    height: 30,
    width: 30,
    alignSelf: "center",
    left: 5,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "black",
  },
  giftCardLogo: {
    resizeMode: "cover",
    position: "absolute",
    height: 30,
    width: 35,
    alignSelf: "center",
  },
});

export default NineMobilePlans;
