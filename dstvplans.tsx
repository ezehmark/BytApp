import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";

interface dstvplansProps {
  isList: boolean;
  toggleCardList: () => void;
  onSelectCard: (plan: string) => void;
  plans: string[]; // Array of plan names
}

const DstvPlans: React.FC<dstvplansProps> = ({
  isList,
  toggleCardList,
  onSelectCard,
  plans,
}) => {
  if (!isList) return null;

  // Dynamically create plans array with images
  const dstvPlans = plans.map((plan) => ({
    name: plan,
    uri: "https://i.postimg.cc/T2VMmKv7/images-33.jpg",
  }));

  return (
    <BlurView style={styles.mainBodi}>
      <View style={styles.bodi}>
        <TouchableOpacity onPress={toggleCardList} style={styles.closeBtn}>
          <Text>❌</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.msg}>Choose Plan</Text>

          <View style={styles.contentArea}>
            <ScrollView style={styles.scrollArea}>
              <View style={styles.msgArea}>
                {dstvPlans.map((plan, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.giftCardBox}
                    onPress={() => onSelectCard(plan.name)}
                  >
                    <View style={styles.logoCover}>
                      <Image
                        style={styles.giftCardLogo}
                        source={{ uri: plan.uri }}
                      />
                    </View>
                    <Text style={styles.giftCardName}>{plan.name}</Text>
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

export default DstvPlans;
