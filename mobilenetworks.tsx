import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";

const MobileNetworks = ({
  isCard,
  setLivePlans,
  toggleCard,
  handleSelectCard,
  handleWhich,
  setLoadingPlans,
}) => {
  const networks = [
    {
      id: 1,
      value: "mtn",
      label: "MTN",
      color: "bg-yellow-500",
      networkPlans: "mtnPlans",
      logo: "https://i.postimg.cc/J7K6KYJb/mtn.jpg",
    },
    {
      id: 2,
      value: "airtel",
      label: "Airtel",
      color: "bg-red-500",
      networkPlans: "airtelPlans",
      logo: "https://i.postimg.cc/PrR6nLSJ/airtel.png",
    },
    {
      id: 3,
      value: "glo",
      label: "Glo",
      color: "bg-green-500",
      networkPlans: "gloPlans",
      logo: "https://i.postimg.cc/TYwksjqB/glo.jpg",
    },
    {
      id: 4,
      value: "9mobile",
      label: "9mobile",
      color: "bg-green-600",
      networkPlans: "nineMobilePlans",
      logo: "https://i.postimg.cc/cLtFxszm/9mobile.png",
    },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState(null);
 
  const [loading, setLoading] = useState(false);

  const handleVariations = async (id) => {
    setLoadingPlans(true);
    setLoading(true);
    setLivePlans([]);

    try {
      const response = await axios.get(
        `https://mybackend-oftz.onrender.com/getDataVariations`,
        { params: { id } }
      );
      const networkPlans = response.data?.data?.data || [];
      setLivePlans(networkPlans);
      console.log("Fetched plans:", networkPlans);
    } catch (err) {
      console.error("Error fetching variations:", err.message);
      alert("Failed to fetch plans: " + err.message);
    } finally {
      setLoading(false);
      setLoadingPlans(false);
      console.log("All variations fetched successfully");
    }
  };

  if (!isCard) return null;

  return (
    <BlurView intensity={50} style={styles.mainBodi}>
      <View style={styles.bodi}>
        {/* Close Button */}
        <TouchableOpacity onPress={toggleCard} style={styles.closeBtn}>
          <Text style={{ color: "white", fontSize: 16 }}>❌</Text>
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.container}>
          <Text style={styles.msg}>Choose Network</Text>

          <View style={styles.contentArea}>
            <ScrollView style={styles.scrollArea}>
              <View style={styles.msgArea}>
                {networks.map((network) => (
                  <TouchableOpacity
                    key={network.id}
                    style={styles.giftCardBox}
                    onPress={() => {
                      handleWhich(network.value);
                      handleVariations(network.id);
                      handleSelectCard(network.value);
                      setSelectedNetwork(network.value);
                    }}
                  >
                    <View style={styles.logoCover}>
                      <Image
                        style={styles.networkLogo}
                        source={{ uri: network.logo }}
                      />
                    </View>
                    <Text style={styles.networkName}>{network.label}</Text>
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
  mainBodi: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 20,
  },
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
    backgroundColor: "#20a385",
    borderRadius: 10,
    marginLeft: "75%",
    top: -2.5,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    borderRadius: 25,
    height: "90%",
    width: "95%",
    justifyContent: "center",
    backgroundColor: "#30b3bf",
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
    height: 500,
    width: "98%",
    backgroundColor: "#d7e5d3",
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
    color: "black",
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

export default MobileNetworks;
