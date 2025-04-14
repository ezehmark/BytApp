import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
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

const Home = ({ setNav, darkTheme, navigation, toggleMenu, toggleMsg }) => {
  const widthA = useSharedValue(270);
  const colorA = useSharedValue("#2f7378");
  useEffect(() => {
    if (setNav) {
      setNav(navigation);
    }
  }, [navigation]);
  const boxAnime = useAnimatedStyle(() => {
    return { width: widthA.value, backgroundColor: colorA.value };
  });

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

  const isFocused = useIsFocused();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkTheme ? "#022d36" : "#EBE2C2" },
      ]}
    >
      <View
        style={[
          styles.topContainer,
          {
            shadowColor: darkTheme ? "#ccc" : "black",
            elevation: 1,
            overflow: "hidden",
          },
        ]}
      >
        {" "}
        <Image
          source={{
            uri: "https://i.postimg.cc/sXShHWLR/Picsart-24-11-01-15-07-20-853.png",
          }}
          style={styles.icon}
        />
        <View style={[styles.balanceArea, boxAnime]}>
          {" "}
          <Text style={styles.balance}>Balance</Text>{" "}
          <View style={styles.currency}>
            {" "}
            <Text style={styles.NGN}>NGN</Text>
            <Text style={styles.flag}>🇳 🇬 </Text>
          </View>
          <View style={styles.hide}>
            <TouchableOpacity
              style={{ borderRadius: 10, padding: 5 }}
              onPress={() => toggleClick()}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  position: "absolute",
                  alignSelf: "center",
                  color: "#ccc",
                  fontSize: 10,
                }}
              >
                {click ? "Hide" : "See"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.naira}></Text>
          <Text style={styles.total}>
            ₦
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
                {" "}
                ⚡ ⚡ ⚡ ⚡
              </Text>
            )}
          </Text>
        </View>
        <Text style={styles.welcome}>{click ? "***" : "Welcome, Mark"}</Text>
      </View>

      <TouchableOpacity style={styles.menuCircle} onPress={toggleMenu}>
        <Image
          style={styles.menuIcon}
          source={{
            uri: "https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png",
          }}
        />
      </TouchableOpacity>

      <Animated.View style={[styles.infoCircle, animA]}>
        <Image
          style={
            (styles.bellIcon,
            { backgoundColor: darkTheme ? "#022d37" : "black" })
          }
          source={{
            uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",
          }}
        />
      </Animated.View>

      {/* Apply ScrollView here */}
      <View
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          top: 170,
          alignSelf: "center",
          height: "70%",
          width: "100%",
        }}
      >
        {" "}
        <ScrollView contentContainerStyle={{ padding: 5 }}>
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "transparent",
              width: "100%",
              height: 800,
            }}
          >
            {" "}
            <View style={styles.headingContainer}>
              {" "}
              <Text
                style={[
                  styles.heading1,
                  { color: darkTheme ? "white" : "#09435F" },
                ]}
              >
                Buy and Sell
              </Text>
              <Animated.Text
                style={[
                  styles.heading2,
                  { color: darkTheme ? "#ccc" : "#526669" },
                  animOpacity,
                ]}
              >
                {" "}
                {text}{" "}
              </Animated.Text>{" "}
            </View>{" "}
            <View
              style={{
                height: 900,
                width: "100%",
                position: "absolute",
                padding: 10,
                backgroundColor: "transparent",
                marginTop: 55,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("buygiftcard1")}
                style={[
                  styles.buyGiftCard,
                  {
                    shadowColor: darkTheme ? "white" : "black",
                    elevation: 2,
                    left: "2%",
                  },
                ]}
              >
                <Text style={styles.Buy}>Buy</Text>
                <Text style={styles.GiftCards}>Gift Cards</Text>
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
                <Text style={styles.sGiftCards}>Cheap Data</Text>
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
                {" "}
                <Text style={styles.sBuy}>Buy</Text>
                <Text style={styles.sGiftCards}>Cheap Data</Text>
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
                onPress={() => navigation.navigate("buyairtime")}
              >
                <Text style={styles.recharge}>Top-Up</Text>
                <Text style={styles.topUp}>Airtime</Text>
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
                />{" "}
                <Text style={styles.tvheading}>Fast Tv Subscriptions</Text>
                <View style={styles.TVs}>
                  <View style={styles.TV}>
                    {" "}
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
                </View>{" "}
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
                  <Text> F⚡ASH™ Trading App</Text>{" "}
                </BlurView>
                <Text style={styles.comingSoon}>Coming Soon...</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
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
    height: 170,
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
    marginLeft: 15,
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
    marginVertical: "auto",
    backgroundColor: "#20a385",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
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
    borderColor: "#4AD8E3",

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
    left: 20,
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
    right: 10,
    right: 55,
    position: "absolute",
  },
  infoCircle: {
    position: "absolute",
    top: 10,
    right: 10,
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
