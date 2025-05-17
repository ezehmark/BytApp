import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Menu from "./menu.tsx";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import BuyGiftCard1 from "./buygiftcard1.tsx";

import * as LocalAuthentication from "expo-local-authentication";

const Home = ({
  setNav,
  darkTheme,
  balance,
  setBalance,
  navigation,
  toggleMenu,
  toggleMsg,
}) => {
  const widthA = useSharedValue(270);
  const colorA = useSharedValue("#2f7378");
  const [info,setInfo]=useState("");
  useEffect(() => {
    if (setNav) {
      setNav(navigation);
    }
  }, [navigation]);
  const boxAnime = useAnimatedStyle(() => {
    return { width: widthA.value, backgroundColor: colorA.value };
  });


const verifyFingerprint = async()=>{
const available = await LocalAuthentication.hasHardwareAsync();
const enrolled = await LocalAuthentication.isEnrolledAsync();

if(!available || !enrolled){setInfo("Fingerprint Not available on this device");return}
const result = await LocalAuthentication.authenticateAsync({promptMessage:"Put fingerprint",
fallBackLabel:"Use Pin"});
if (!result.success){setInfo("Authenticating failed");return}
setInfo("Fingerprint authenticated successfully");
setTimeout(()=>{nav?.navigate("buyairtime")},3000);

}
  useEffect(() => {
    setTimeout(() => {
      const myInterval = setInterval(() => {
        widthA.value = withSequence(
          withTiming(300, { duration: 1000 }),
          withTiming(240, { duration: 700 }),
          withTiming(300, { duration: 800 }),
          withTiming(270, { duration: 700 }),
        );

        colorA.value = withSequence(
          withTiming("#2f7378", { duration: 1000 }),
          withTiming("#4A6163", { duration: 700 }),
          withTiming("#2f7378", { duration: 800 }),
          withTiming("#4A6163", { duration: 700 }),
        );
      }, 15000);
      return () => clearInterval(myInterval);
    }, 6000);
  }, []);

  const rotateA = useSharedValue("0deg");

  const animA = useAnimatedStyle(() => {
    return { transform: [{ rotate: rotateA.value }] };
  });

  useEffect(() => {
    setTimeout(() => {
      const myInterval2 = setInterval(() => {
        rotateA.value = withSequence(
          withTiming("-80deg", { duration: 700 }),
          withTiming("80deg", { duration: 700 }),
        );
      }, 1200);
      return () => clearInterval(myInterval2);
    }, 5000);
  }, []);

  const textOpacity = useSharedValue(1);

  const animOpacity = useAnimatedStyle(() => {
    return { opacity: textOpacity.value };
  });

  useEffect(() => {
    setTimeout(() => {
      const opacityInterval = setInterval(() => {
        textOpacity.value = withSequence(
          withTiming(0, { duration: 600 }),
          withTiming(1, { duration: 1200 }),
        );
      }, 1800);
      return () => clearInterval(opacityInterval);
    }, 3500);
  }, []);

  const [text, setText] = useState("Welcome to Flash");

  var texts = [
    "We are the best!",
    "Fast transactions always",
    "Quick and Easy Funding",
    "Funds are Safe",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let myIndex = 0;

      const myInterval5 = setInterval(() => {
        myIndex = (myIndex + 1) % texts.length;
        setText(texts[myIndex]);
      }, 2000);

      return () => clearInterval(myInterval5);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);
  const [click, setClick] = useState(false);

  const toggleClick = () => {
    setClick((click) => !click);
  };
  return (
    <LinearGradient
      colors={[
        darkTheme ? "black" : "#f7fcf6",
	darkTheme ? "black" : "#f7fcf6",
        darkTheme ? "#022d36" : "#f7fcf6",
	darkTheme ? "#022d36" : "#f7fcf6",
        darkTheme ? "black" : "#f7fcf6",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.container, {}]}
    >
      <StatusBar
        barStyle={darkTheme ? "light-content" : "dark-content"}
        backgroundColor={darkTheme ? "black" : "white"}
      />
      <LinearGradient
        colors={[
          darkTheme ? "black" : "white",
          darkTheme ? "black" : "#ffbf00",
          darkTheme ? "#022d36" : "#ffbf00",
	  darkTheme ? "#022d36" : "#f4c430",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[
          styles.topContainer,
          {
            shadowColor: darkTheme ? "#ccc" : "black",
            elevation: 4,
            backgroundColor: darkTheme ? "#022d36" : "#ffbf00",
          },
        ]}
      >
        <Image
          source={{
            uri: "https://i.postimg.cc/sXShHWLR/Picsart-24-11-01-15-07-20-853.png",
          }}
          style={[styles.icon,{left:55}]}
        />
        <LinearGradient                                                         colors={[
          darkTheme ? "#022d36" : "#fff2cc",                                        darkTheme ? "#022d36" : "#fff2cc",                                      darkTheme ? "#022d36" : "#fff2cc",                                  ]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 1 }}                                                
          style={[
            styles.balanceArea,
            { borderWidth:0,elevation:4,shadowColor:darkTheme?"black":"rgba(0,0,0,0.7)",borderColor:"#ccc",backgroundColor: darkTheme ? "#022d36" : "#fff2cc" },
            boxAnime,
          ]}
        >
          <Text style={[styles.balance,{color:darkTheme?"white":"#4a6163"}]}>Balance</Text>

          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "row",
              backgroundColor: "transparent",
              padding: 5,
              gap: 10,
              width: "95%",
              position: "absolute",
            }}
          >
            <Text
              style={{
                borderRadius: 15,
                backgroundColor: darkTheme?"black":"#cc7722",
                paddingVertical: 8,
                paddingHorizontal: 10,
                fontSize: 10,
                color: "#fff2cc",
		fontWeight:"bold"
              }}
            >
              NGN
            </Text>
            <Text style={{ color: darkTheme?"white":"#8a5f0b", fontSize: 25, fontWeight: "bold" }}>
              {click ? (
                balance.toLocaleString("en-us")
              ) : (
                <Text
                  style={{
                    fontSize: 16,
                    alignSelf: "center",
                    position: "absolute",
                  }}
                >
                  ⚡ ⚡ ⚡ ⚡
                </Text>
              )}
            </Text>

            <TouchableOpacity
              style={{
                borderRadius: 15,
                backgroundColor: darkTheme?"black":"#cc7722",
                paddingVertical: 4,
                paddingHorizontal: 5,
		elevation:4,
		shadowColor:"black",
              }}
              onPress={() => toggleClick()}
            >
              <Text
                style={{
                  fontWeight: "bold",

                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  color: "white",
                  fontSize: 10,
                }}
              >
                {click ? "Hide" : "See"}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </LinearGradient>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          top: 10,
          right: 10,
          gap: 5,
        }}
      ><Text style={{color:darkTheme?"#ccc":"black",fontSize:11,}}>Welcome, Mark</Text>
        <Text style={styles.welcome}>{"Welcome, Mark"}</Text>

	<TouchableOpacity
            onPress={toggleMsg}
            style={[                                                                styles.infoCircle,
              {                                                                       elevation: 4,
                shadowColor: darkTheme ? "white" : "black",
                backgroundColor: darkTheme ? "#022d37" : "black",                   },                                                                  ]}                                                                  >                                                                       <Image                                                                  style={styles.bellIcon}                                               source={{
                uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",                                                                   }}
            />
          </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.menuCircle} onPress={toggleMenu}>
        <Image
          style={styles.menuIcon}
          source={{
            uri: darkTheme
              ? "https://i.postimg.cc/B65wgYfV/images-41.jpg"
              : "https://i.postimg.cc/3xCFDfww/Picsart-25-05-04-05-37-21-849.png",
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          bottom: 45,
          alignSelf: "center",
          height: "70%",
          width: "100%",
        }}
      >
        <ScrollView contentContainerStyle={{ padding: 5 }}>
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "transparent",
              width: "100%",
              paddingBottom: 50,
              height: 900,
            }}
          >{info &&<Text style={{color:"red",fontWeight:"bold",textAlign:"center",fontSize:12,padding:5,backgroundColor:"black",borderRadius:5}}>{info}</Text>}
            <View style={[styles.headingContainer, { zIndex: 60 }]}>
              <Text
                style={[
                  styles.heading1,
                  { color: darkTheme ? "#4AD8E3" : "#09435F" },
                ]}
              >
                Buy and Sell
              </Text>
              <Animated.Text
                style={[styles.heading2,{ color: darkTheme ? "#ccc" : "black" },animOpacity,{color:darkTheme ? "#ccc" : "#526669"}
                ]}
              >
                {text}
              </Animated.Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("buygiftcard1")}
              style={[
                styles.buyGiftCard,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  left: "2%",
                  backgroundColor: darkTheme ? "#cc7722" : "#cc7722",
                },
              ]}
            >
              <Text style={styles.Buy}>Buy</Text>
              <Text style={[styles.GiftCards, { color: "#ccc" }]}>
                Gift Cards
              </Text>
              <View style={styles.buyIcon}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://i.postimg.cc/nVSB75hc/shopping-cart-no-bg.png",
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.sellGiftCard,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  right: "2%",
                },
              ]}
              onPress={() => navigation.navigate("sellgiftcards")}
            >
              <Text style={styles.Sell}>Sell</Text>
              <Text style={styles.GiftCardSell}>Gift Cards</Text>
              <View style={styles.sellIcon}>
                <Image
                  style={styles.sImage}
                  source={{
                    uri: "https://i.postimg.cc/SN8bBzFw/Screenshot-20241031-210908.png",
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.buyData,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  left: "2%",
                },
              ]}
              onPress={() => navigation.navigate("buydata")}
            >
              <Text style={styles.sBuy}>Buy</Text>
              <Text style={[styles.sGiftCards, { color: "white" }]}>
                Cheap Data
              </Text>
              <View style={styles.buyIcon}>
                <Image
                  style={styles.sImage}
                  source={{
                    uri: "https://i.postimg.cc/SN8bBzFw/Screenshot-20241031-210908.png",
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.buyData,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  left: "2%",
                },
              ]}
              onPress={() => navigation.navigate("buydata")}
            >
              <Text style={[styles.sBuy,{color:"white"}]}>Buy</Text>
              <Text style={[styles.sGiftCards,{color:"#ccc"}]}>Cheap Data</Text>
              <View style={styles.buyIcon}>
                <Image
                  style={styles.sImage}
                  source={{
                    uri: "https://i.postimg.cc/SNNkMxw5/Picsart-24-10-31-12-01-16-766.jpg",
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.buyAirtime,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  right: "2%",
                },
              ]}
              onPress={() => verifyFingerprint()}
            >
              <Text style={styles.recharge}>Top-Up</Text>
              <Text style={[styles.topUp,{color:"#ccc"}]}>Airtime</Text>
              <View style={styles.sellIcon}>
                <Image
                  style={styles.sImage}
                  source={{
                    uri: "https://i.postimg.cc/850Bm5ZH/Picsart-24-10-31-22-10-12-892-1.jpg",
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.subscribeTv,
                { shadowColor: darkTheme ? "white" : "black", elevation: 2 },
              ]}
              onPress={() => navigation.navigate("tvsub")}
            >
              <Image
                style={styles.tvImage}
                source={{ uri: "https://i.postimg.cc/7LXTzX0b/TvSubs.png" }}
              />
              <Text style={styles.tvheading}>Fast Tv Subscriptions</Text>
              <View style={styles.TVs}>
                <View style={styles.TV}>
                  <Image
                    style={styles.TVimage}
                    source={{
                      uri: "https://i.postimg.cc/zDLwKZBh/images-32.jpg",
                    }}
                  />
                </View>

                <View style={styles.TV}>
                  <Image
                    style={styles.TVimage}
                    source={{
                      uri: "https://i.postimg.cc/JnHyD8q4/images-33.jpg",
                    }}
                  />
                </View>

                <View style={styles.TV}>
                  <Image
                    style={styles.TVimageS}
                    source={{
                      uri: "https://i.postimg.cc/9MbdbC9P/Picsart-24-11-01-13-40-07-270.png",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("electricity")}
              style={[
                styles.buyElectricity,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  left: "2%",
                },
              ]}
            >
              <Text style={styles.PHCN}>PHCN</Text>
              <Text style={styles.electricityBills}>Electricity Bills</Text>
              <View style={styles.electricIcon}>
                <Image
                  style={styles.electricImage}
                  source={{
                    uri: "https://i.postimg.cc/FH711vFn/Picsart-24-11-02-16-24-24-701.png",
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.fundBet,
                {
                  shadowColor: darkTheme ? "white" : "black",
                  elevation: 2,
                  right: "2%",
                },
              ]}
            >
              <Text style={styles.recharge}>FundBet</Text>
              <Text style={styles.topUp}>Coming Soon..</Text>
              <View style={styles.sellIcon}>
                <Image
                  style={styles.sImage}
                  source={{
                    uri: "https://i.postimg.cc/h47r3pL1/Picsart-24-11-02-20-16-32-266.png",
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Crypto}>
              
              <Image
                style={styles.tvImage}
                source={{
                  uri: "https://i.postimg.cc/RFR1h8GH/file-aer7z-HOsxsly-QZSujnn5-Cdzi-1-1.jpg",
                }}
              />
              <BlurView intensity={15} style={styles.cryptoHeading1}>
                
                <Text> F⚡ASH™ Trading App</Text>
              </BlurView>
              <Text style={styles.comingSoon}>Coming Soon...</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  showButton: {
    height: 30,
    width: 100,
    top: 20,
    right: 20,
    borderRadius: 15,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: 13,
  },
  hiddenButton: {
    top: 20,
    right: 20,
    borderRadius: 15,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: 13,
    opacity: 0,
  },
  subscribe: {
    height: 30,
    width: 100,
    top: 20,
    right: 20,
    borderRadius: 15,
    backgroundColor: "#c936cc",
    color: "white",
    display: "flex",
    justifyContent: "center",
    fontSize: 13,
  },

  icon: {
    height: 32,
    width: 50,
    position: "absolute",
    top: 7,
    left: 50,
    borderRadius: 5,
  },
  topContainer: {
    padding: 20,
    height: "25%",
    width: "100%",
    top: 0,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: "absolute",
    shadowColor: "black",
    shadowOffset: { height: 0.5, width: 0 },
    shadowOpacity: 0.2,
    elevation: 1,
    zIndex: 3,
  },

  headingContainer: {
    position: "absolute",
    height: 30,
    width: "100%",
    padding: 30,
    left: 10,
  },
  heading1: {
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    top: 15,
    color: "#09435F",
  },
  heading2: {
    fontSize: 10,
    fontWeight: "bold",
    position: "absolute",
    bottom: 8,
    color: "#526669",
  },
  container: {
    flex: 1,
    backgroundColor: "#EBE2C2",
  },

  scrollView: {
    flex: 1,
    zIndex: 1,
    marginTop: 130,

    width: "100%",
    paddingTop: 20,
  },
  services: {
    height: 1050,
    width: "100%",
    position: "absolute",
    padding: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 2,
  },
  buyGiftCard: {
    height: 120,
    width: 160,
    marginVertical: 20,
    backgroundColor: "#F5B857",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    position: "absolute",
    top: 55,
  },

  Buy: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#033F5B",
    position: "absolute",
    top: 15,
    right: 30,
  },

  buyElectricity: {
    height: 120,
    width: 160,
    marginVertical: 20,
    backgroundColor: "#ECFBFF",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    position: "absolute",
    top: 550,
    left: 15,
  },
  PHCN: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#F87F20",
    position: "absolute",
    top: 15,
    right: 30,
  },

  electricityBills: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2E5E74",
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    marginLeft: 30,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#2E5E74",
  },
  electricIcon: {
    position: "absolute",
    height: 52,
    width: 50,
    borderRadius: 15,
    borderColor: "#20a385",
    backgroundColor: "#EFAA51",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    left: 5,
    top: 5,
  },
  electricImage: {
    height: 53,
    width: 53,
    position: "absolute",
    resizeMode: "cover",
  },
  fundBet: {
    height: 120,
    width: 160,
    marginVertical: 20,
    backgroundColor: "#4A6163",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    top: 550,
    position: "absolute",
    right: 15,
  },

  Sell: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#09435F",
    position: "absolute",
    top: 15,
    left: 25,
  },

  recharge: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#D8711B",
    position: "absolute",
    top: 15,
    left: 25,
  },
  GiftCards: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#D63440",
    position: "absolute",
    bottom: 20,
    justifyContent: "center",

    marginLeft: 30,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },

  GiftCardSell: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#09435F",
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    marginLeft: 30,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  sBuy: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#06F983",
    position: "absolute",
    top: 15,
    right: 30,
  },
  sGiftCards: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#F77802",
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    marginLeft: 30,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },

  topUp: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    marginLeft: 30,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  buyIcon: {
    position: "absolute",
    height: 52,
    width: 50,
    borderRadius: 15,
    borderColor: "#20a385",
    top: 5,
    left: 5,
    backgroundColor: "#EFAA51",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  electricImage: {
    height: 53,
    width: 53,
    position: "absolute",
    resizeMode: "cover",
  },
  image: {
    height: 45,
    width: 45,
    position: "absolute",
    top: 6,
    left: 5,
    resizeMode: "contain",
  },

  sImage: {
    height: 70,
    width: 70,
    position: "absolute",
    top: -7.6,
    left: -10,
    resizeMode: "contain",
  },

  sellGiftCard: {
    height: 120,
    width: 160,
    marginVertical: 20,
    backgroundColor: "#4AD8E3",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    position: "absolute",
    top: 55,
    right: 15,
  },
  sellIcon: {
    position: "absolute",
    borderColor: "#20a385",
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: "white",
    overflow: "hidden",
    top: 5,
    right: 5,
  },
  SGiftCards: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ea1c4d",
    position: "absolute",
    bottom: 20,
    marginLeft: 30,
  },
  buyData: {
    height: 120,
    width: 160,
    marginVertical: 20,
    backgroundColor: "#2e4a5f",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    position: "absolute",
    top: 215,
    marginLeft: 0,
  },
  buyAirtime: {
    height: 120,
    width: 160,
    marginVertical: 20,
    backgroundColor: "#4A6163",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    top: 215,
    position: "absolute",
    right: 15,
  },
  subscribeTv: {
    height: 120,
    width: 327,
    marginVertical: "auto",
    backgroundColor: "#20a385",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    top: 400,
    position: "absolute",
    right: 15,
    overflow: "hidden",
  },
  subscribeTv: {
    height: 120,
    width: 327,
    marginVertical: "auto",
    backgroundColor: "#20a385",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    top: 400,
    position: "absolute",
    right: 15,
    overflow: "hidden",
  },

  Crypto: {
    height: 120,
    width: 327,
    backgroundColor: "#20a385",
    borderRadius: 15,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
    top: 750,
    position: "absolute",
    right: 15,
    overflow: "hidden",
  },

  cryptoHeading1: {
    alignSelf: "center",

    top: "45%",
    position: "absolute",
    fontWeight: "bold",

    fontSize: 20,
    color: "#22243B",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    backgroundColor: "#E8F1D7",
    shadowRadius: 3,
    shadowColor: "yellow",
    shadowOffset: { height: 2, width: 2 },
    elevation: 5,
  },

  comingSoon: {
    bottom: 5,
    alignSelf: "center",
    fontSize: 15,

    color: "red",
    position: "absolute",
    fontWeight: "bold",
  },

  tvImage: {
    height: 120,
    width: 327,
  },
  balanceArea: {
    position: "absolute",
    height: 100,
    width: 270,
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
    top: 60,
    borderWidth: 0,
    borderColor: "#2f73fa",

    borderRadius: 20,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    elevation: 3,
    shadowOpacity: 0.6,
    zIndex: 4,
    backgroundColor: "#4A6163",
  },
  balance: {
    color: "#ccc",
    position: "absolute",
    top: 10,
    alignSelf: "center",
  },

  currency: {
    height: 23,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "white",
    position: "absolute",
    left: 10,
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    elevation: 2,
    shadowOpacity: 0.5,
  },

  hide: {
    backgroundColor: "#4A6163",
    width: 38,
    height: 23,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    marginTop: "auto",
    marginBottom: "auto",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    elevation: 2,
    shadowOpacity: 0.5,
  },
  hideAndSee: {
    fontWeight: "bold",
    fontSize: 10,
    color: "white",
  },
  NGN: {
    fontWeight: "bold",
    fontSize: 8,
    color: "black",
    position: "absolute",
    left: 3,
  },

  flag: {
    fontSize: 6,
    position: "absolute",
    right: 3,
  },
  welcome: {
    fontSize: 11,
    fontWeight: "bold",
  },
  infoCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
    zIndex: 3,
  },
  menuCircle: {
    top: 10,
    left: 10,
    height: 30,
    width: 35,
    overflow: "hidden",
    zIndex: 3,
  },
  menuIcon: {
    height: 24,
    width: 24,

    left: 8,
    resizeMode: "contain",
  },

  bellIcon: {
    height: 25,
    width: 25,
    left: 1,
  },

  TVs: {
    justifyContent: "space-around",
    position: "absolute",
    height: 60,
    width: "100%",
    flexDirection: "row",
    bottom: 15,
  },

  TV: {
    height: 45,
    width: 65,
    borderRadius: 15,
    backgroundColor: "white",
    overflow: "hidden",
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    elevation: 2,
    shadowOpacity: 0.5,
  },

  TVimage: {
    height: 60,
    width: 65,
  },

  TVimageS: { height: 45, width: 65, resizeMode: "contain" },
  tvheading: {
    alignSelf: "center",
    top: 15,
    position: "absolute",
    padding: 3,
    borderRadius: 15,
    fontSize: 15,
    backgroundColor: "#3D6178",
    color: "white",
  },
});
export default Home;
