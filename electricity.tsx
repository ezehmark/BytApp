import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import MobileNetworks from "./mobilenetworks";
import MtnPlans from './mtnplans.tsx';
import AirtelPlans from './airtelplans.tsx';
import GloPlans from './gloplans.tsx';
import NineMobilePlans from './ninemobileplans.tsx';
import TvComps from './tvcomps.tsx';
import GoTvPlans from './gotvplans.tsx';
import PowerStates from './powerstates.tsx';
import MeterTypes from './metertypes.tsx';


const Electricity: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toggleMenu = route.params?.toggleMenu;
  const toggleMsg = route.params?.toggleMsg;

  const [cardList, setCardList] = useState(false);
  const toggleCardList = () => {
    setCardList((init) => !init);
  };

  const [pin, setPin] = useState("");

  const [amount, setAmount] = useState("");

  const[meter, setMeter] = useState("");

  const[phone, setPhone] = useState("");


  const [isCard, setIsCard] = useState(false);
  const toggleCard = () => {
    setIsCard((prev) => !prev);
  };

  const [cardType, setCardType] = useState("Choose State");

  const handleSelectCard = (cardName) => {
    setCardType(cardName);
    setGiftCardType("Meter Type");
    toggleCard();
  };

  const [giftCardType, setGiftCardType] = useState("Metre Type");
  const onSelectCard = (giftCard) => {
    setGiftCardType(giftCard);
    toggleCardList();
  };

  const [whichIsSelected, setWhichIsSelected] = useState("amazon");

  const handleWhichIsSelected = (cardName) => {
    setWhichIsSelected(cardName);
  };

  return (
    <>
      {isCard && (
        <PowerStates
          isCard={isCard}
          toggleCard={toggleCard}
          handleSelectCard={handleSelectCard}
          handleWhich={handleWhichIsSelected}
        />
      )}

      {(cardList && whichIsSelected === "AEDC" || 'IBEDC' || 'EKEDC' || 'IKEDC' || 'KADECO' || 'KEDCO' || 'JED' || 'PHED') && (
        <MeterTypes
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}




      <View style={styles.container}>                         <LinearGradient                                         colors={["white", "#f5b857"]}                         start={{ x: 0, y: 0 }}                                end={{ x: 0, y: 1 }}                                  style={styles.gradientContainer}                    >

          <View style={styles.body}>
            <Text style={styles.topTitle}>Pay Electricity Bills</Text>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>
              <Image
                style={styles.menuIcon}
                source={{
                  uri: "https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMsg} style={styles.infoCircle}>
              <Image
                style={styles.bellIcon}
                source={{
                  uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",
                }}
              />
            </TouchableOpacity>

            <View style={styles.contentArea}>
              <BlurView style={styles.topCover} />
              <View style={styles.contentTitle}>
                <Text style={styles.quickTitle}>
                  Fast Reconnect to Power
                </Text>
                <Text style={styles.flash}>⚡</Text>
              </View>

              <ScrollView style={styles.scrollView}>
                <View style={styles.airtimeForm}>
                  <TouchableOpacity
                    onPress={() => toggleCard()}
                    style={styles.networkBox}
                  >
                    <Text style={styles.selectNetwork}>{cardType}</Text>
                    <Image
                      source={{
                        uri: 
"https://i.postimg.cc/bdcnJBLZ/Picsart-24-11-09-18-11-45-769.png" }}
                      style={styles.dropDownIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={toggleCardList}
                    style={styles.networkBox}>
                    {" "}
                    <Text style={styles.selectNetwork}>
                      {giftCardType}
                    </Text>{" "}
                    <Image
                      source={{
                        uri: "https://i.postimg.cc/bdcnJBLZ/Picsart-24-11-09-18-11-45-769.png",
                      }}
                      style={styles.dropDownIcon}
                    />{" "}
                  </TouchableOpacity>

		  <TextInput                                                        style={styles.pinInput}                                         value={meter}                                                                       placeholder="Meter Number"                                          color="black"                                                   placeholderTextColor="#999"                                     onChangeText={setMeter}/>


		  <TextInput                                                        style={styles.pinInput}                                         value={phone}
                    placeholder="Phone number"                                          color="black"                                                   placeholderTextColor="#999"                                     onChangeText={setPhone}
		    keyboardType="numeric"
                  />

		  <TextInput                                                        style={styles.pinInput}                                         value={amount}                                                                       placeholder="Amount"                                          color="black"    
		  keyboardType="numeric"
		  placeholderTextColor="#999"                                     onChangeText={setAmount}/>

                  <TextInput
                    style={styles.pinInput}
                    value={pin}
		    keyboardType="numeric"
                    placeholder="6 digits pin"
                    color="black"
                    placeholderTextColor="#999"
                    onChangeText={setPin}
                  />

                  <TouchableOpacity style={styles.buyBox}>
                    {" "}
                    <Text style={styles.buyText}>Buy Power</Text>{" "}
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      </View>

      <BlurView style={styles.bottomTab}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={styles.tabArea}
        >
          <View style={styles.tab}>
            <Image
              style={styles.homeImage}
              source={{
                uri: "https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png",
              }}
            />
          </View>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("fund")}
          style={styles.tabArea}
        >
          <View style={styles.tab}>
            <Image
              style={styles.fundImage}
              source={{
                uri: "https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png",
              }}
            />
          </View>
          <Text style={styles.tabText}>Fund</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("recents")}
          style={styles.tabArea}
        >
          <View style={styles.tab}>
            <Image
              style={styles.tabImage}
              source={{
                uri: "https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png",
              }}
            />
          </View>
          <Text style={styles.tabText}>Recents</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("profiles")}
          style={styles.tabArea}
        >
          <View style={styles.tab}>
            <Image
              style={styles.tabImage}
              source={{
                uri: "https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png",
              }}
            />
          </View>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </BlurView>
    </>
  );
};

const styles = StyleSheet.create({
  topTitle: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    top: 8,
  },

  infoCircle: {
    position: "absolute",
    top: 6,
    right: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
    backgroundColor: "#20a385",
    zIndex: 3,
  },

  bellIcon: { height: 25, width: 25, left: 1 },

  menuCircle: {
    top: 6,
    left: 10,
    height: 30,
    width: 35,
    overflow: "hidden",
    zIndex: 3,
  },
  menuIcon: { height: 24, width: 24, left: 8, resizeMode: "contain" },
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  contentTitle: {
    position: "absolute",
    top: 15,
    alignSelf: "center",
    justifyContent: "space-around",
    width: 300,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 4,
  },

  topCover: {
    position: "absolute",
    height: 60,
    width: "100%",
    top: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 1,
  },

  quickTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#28272c",
    zIndex: 3,
    textDecorationLine: "underline",
    textDecorationColor: "#feb819",
  },

  flash: {
    fontSize: 25,
  },
  body: {
    height: "100%",
    width: "100%",
    top: 0,
    position: "absolute",
    backgroundColor: "#d7e5d3",
  },
  contentArea: {
    height: "80%",
    width: "98%",
    position: "absolute",
    alignSelf: "center",
    top: 50,
    backgroundColor: "#274647",
    borderRadius: 30,
    marginBottom: 50,
    overflow: "hidden",
    zIndex:15,
  },

  cardsType: {
    flex: 1,
    position: "absolute",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
    top: 55,
    alignSelf: "center",
    alignItems: "center",
    zIndex: 4,
  },

  scrollView: {
    height: 520,
    width: "100%",
    position: "absolute",
    borderRadius: 20,
    marginBottom: 200,
    top: 5,
  },

  addAccount: {
    position: "absolute",
    top: 455,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#3CB2CB",
    zIndex: 13,
    fontSize: 12,
  },

  airtimeForm: {
    position: "absolute",
    top: 45,

    flex: 1,
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
    backgroundColor: "#274647",
    paddingTop: 40,
    paddingBottom: 25,
    paddingVertical: 30,
    alignSelf: "center",
    marginBottom: 100,
    gap: 25,
  },

  networkBox: {
    height: 60,
    width: "85%",
    backgroundColor: "#26da8b",
    borderRadius: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    overflow:'visible',
  },

  logoCover: {
    position: "absolute",
    height: 24,
    width: 24,
    alignSelf: "center",
    left: 5,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "black",
  },
  giftCardLogo: {
    resizeMode: "cover",
    position: "absolute",
    height: 24,
    width: 30,
    alignSelf: "center",
  },

  buyBox: {
    height: 60,
    width: "60%",
    backgroundColor: "#26da8b",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fbdc08",
    shadowRadius: 6,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.6,
    elevation: 4,
  },
  imageBoxCover: {
    height: 100,
    width: 220,
    justifyContent: "space-between",
    flexDirection: "row",
    left: "3%",
  },

  buyText: {
    fontSize: 20,
    alignSelf: "center",

    color: "#000",
    fontWeight: "bold",
  },

  selectNetwork: {
    fontSize: 17,
    color: "#000",
  },

  pinInput: {
    height: 50,
    width: "85%",
    alignItems: "center",
    backgroundColor: "#e0e2d7",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fbdc08",
    paddingLeft: 10,
  },
  dropDownIcon: {
    height: 10,
    width: 15,
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    height: 70,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D3DEE8",
    zIndex: 3,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    paddingBottom: 5,
  },
  tabArea: {
    height: 60,
    width: 60,
    padding: 4,
    justifyContent: "space-around",
    flexDirection: "column",
  },
  tab: {
    height: 40,
    width: 50,
    borderRadius: 15,
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingRight: "auto",
    paddingLeft: "auto",
  },

  tabImage: {
    height: 40,
    width: 50,
    top: 5,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "contain",
  },

  homeImage: {
    height: 35,
    width: 45,
    top: 5,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "contain",
  },
  fundImage: {
    height: 31,
    width: 50,
    top: 10,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "cover",
  },
  tabText: {
    alignSelf: "center",
    color: "#1C445C",
    marginTop: 5,
    alignItems: "center",
  },
});

export default Electricity;


