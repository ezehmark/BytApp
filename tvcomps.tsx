import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const tvComps = [
  { name: "GOTV", uri: "https://i.postimg.cc/9Q8jMsHc/images-32.jpg" },
  { name: "DSTV", uri: "https://i.postimg.cc/T2VMmKv7/images-33.jpg" },
  {
    name: "STARTIMES",
    uri: "https://i.postimg.cc/LsYGsXVV/startimes-logo.jpg",
  },
];

const TvComps = ({ isCard, toggleCard, handleWhich, handleSelectCard }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchPlans = async (serviceID) => {
    setLoading(true);
    try {
      const uri = `https://sandbox.vtpass.com/api/service-variations?serviceID=${serviceID}`;
      const response = await fetch(uri, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data && data.content && data.content.variations) {
        setPlans(data.content.variations);
        navigation.navigate("Tvsubs", { plans: data.content.variations });
      } else {
        Alert.alert("Error fetching TV variations");
      }
    } catch (error) {
      Alert.alert("Network error", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isCard) return null;

  return (
    <BlurView style={styles.mainBodi}>
      <View style={styles.bodi}>
        <TouchableOpacity onPress={() => toggleCard()} style={styles.closeBtn}>
          ❌
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.msg}>Choose TV</Text>

          <View style={styles.contentArea}>
            <ScrollView style={styles.scrollArea}>
              <View style={styles.msgArea}>
                {tvComps.map((network, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.giftCardBox}
                    onPress={() => {
                      handleWhich(network.name);
                      handleSelectCard(network.name);
                      fetchPlans(network.name); // Pass the selected network's name as the serviceID
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

export default TvComps;
