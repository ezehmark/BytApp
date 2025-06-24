import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
  withSpring,
} from "react-native-reanimated";
import { BallIndicator } from "react-native-indicators";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import ChatArea from "./chatArea.tsx";
import { useNavigation } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import { LinearGradient } from "expo-linear-gradient";
import useStore from "./zustand";

export default function HomeComp({
  updatedChats,
  date,
  myDate,
}) {
  //calling items up from zustand:

  const chats = useStore((state) => state.chats);
const dark = useStore((state) => state.dark);

const setChats = useStore((state) => state.setChats);
const handleNav = useStore((state) => state.handleNav);
  const navigation = useNavigation();
  useEffect(() => {
    handleNav();

    console.log("time now:", new Date().getHours());
  }, [dark]);

  //Animate dynaically the contents of scrollView as bottom is hit
  //
  const AnimatedScroll = Animated.createAnimatedComponent(ScrollView);

  const scrollY = useSharedValue(0);
  const contentHeight = useSharedValue(0);
  const containerHeight = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
      contentHeight.value = e.contentSize.height;
      containerHeight.value = e.layoutMeasurement.height;
    },
  });

  /*const stretchStyle = useAnimatedStyle(()=>{
const maxScroll = contentHeight.value - containerHeight.value;
const extraScroll = scrollY.value - maxScroll;

const scale = interpolate(extraScroll,
			 [0,100],
			 [1,1.2],
			 Extrapolate.CLAMP);
return {transform:[{scaleY:scale}]}})
*/

  //Update home as new chats arrive//

  const adsBox = useRef(null);
  useEffect(() => {
    let distance = 0;
    let rollInterval;
    function handleAds() {
      if (adsBox.current) {
        rollInterval = setInterval(() => {
          if (distance >= 300 * adsItem.length) {
            adsBox.current.scrollTo({ x: 0, animated: false });
          }
          distance += 300;
          adsBox.current.scrollTo({ x: distance, animated: true });
        }, 4000);
      }
    }

    handleAds();
    return () => clearInterval(rollInterval);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const [loading, setLoading] = useState(true);

  const adsItem = [
    {
      name: "company",
      img: "https://i.postimg.cc/SxH6Pr1w/Bytance-Tech-optimized.jpg",
      link: "",
    },
    {
      name: "company",
      img: "https://i.postimg.cc/SxH6Pr1w/Bytance-Tech-optimized.jpg",
      link: "",
    },
    {
      name: "company",
      img: "https://i.postimg.cc/SxH6Pr1w/Bytance-Tech-optimized.jpg",
      link: "",
    },
    {
      name: "company",
      img: "https://i.postimg.cc/SxH6Pr1w/Bytance-Tech-optimized.jpg",
      link: "",
    },
    {
      name: "company",
      img: "https://i.postimg.cc/SxH6Pr1w/Bytance-Tech-optimized.jpg",
      link: "",
    },
    {
      name: "company",
      img: "https://i.postimg.cc/SxH6Pr1w/Bytance-Tech-optimized.jpg",
      link: "",
    },
  ];

  return (
    <>
      <StatusBar
        backgroundColor={dark ? "#2d2d2e" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />

      <View
        style={[styles.main, { backgroundColor: dark ? "#2d2d2e" : "white" }]}
      >
        <View
          style={[
            styles.title,
            { backgroundColor: dark ? "#2d2d2e" : "white" },
          ]}
        >
          <Text
            style={{
              color: "#00d4d4",
              fontSize: 25,
              left: 10,
              fontWeight: "bold",
            }}
          >
            CS Agent
          </Text>
          <Text style={{ bottom: 5, fontSize: 8, right: 10, color: "grey" }}>
            ...by BytanceTech
          </Text>
        </View>

        <View
          style={[
            styles.chatMain,
            { backgroundColor: dark ? "transparent" : "white" },
          ]}
        >
          <LinearGradient
            style={{
              height: 40,
              position: "absolute",
              zIndex: 20,
              top: 0,
              width: "100%",
              pointerEvents: "none",
            }}
            colors={[
              dark ? "#2d2d2e" : "white",
              dark ? "rgba(19,19,20,0.5)" : "rgba(255,255,255,0.5)",
              "transparent",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />

          <LinearGradient
            style={{
              height: 40,
              position: "absolute",
              zIndex: 20,
              bottom: 0,
              width: "100%",
              pointerEvents: "none",
            }}
            colors={[
              dark ? "#2d2d2e" : "white",
              dark ? "rgba(19,19,20,0.5)" : "rgba(255,255,255,0.5)",
              "transparent",
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          />
          {loading ? (
            <SkeletonPlaceholder
              borderRadius={20}
              highlightColor={"rgba(0,212,212,0.5)"}
              backgroundColor={dark ? "gray" : "#ccc"}
            >
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <SkeletonPlaceholder.Item
                    key={i}
                    height={70}
                    width={sWidth * 0.9}
                    marginTop={i == 0 ? 20 : 0}
                    marginBottom={20}
                    alignSelf="center"
                  />
                ))}
            </SkeletonPlaceholder>
          ) : (
            <View
              style={{
                height: 500,
                backgroundColor: dark ? "#2d2d2e" : "rgba(237,243,247,0)",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
              >
                {Array(25)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <Pressable
                        key={index}
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate("chatArea")}
                      >
                          <View
			  style={{
                            backgroundColor: dark ? "black" : "#d3e3ee",
                            width: sWidth / 1.1,
                            alignSelf: "center",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            borderRadius: 20,
                            marginBottom: 10,
                            overflow: "hidden",
                            padding: 10,
                            marginTop: 10,
                            height: 90,
                            zIndex: 25,
                            borderWidth: 1,
                            borderColor: dark
                              ? "rgba(255,255,255,0.5)"
                              : "#d3e3ee",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "space-between",
                              position: "relative",
                              flexDirection: "row",
                              padding: 0,
                              alignItems: "center",
			      marginRight:10,
			      width:100,
			      maxWidth:120,
			      ovwerflow:"hidden"

                            }}
                          >
                            <View
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 25,
                                width: 25,
                                borderRadius: 12.5,
                                backgroundColor: dark ? "#00d4d4" : "#4772a0",
                              }}
                            >
                              <Text
                                style={{
                                  color: dark ? "4772a0" : "white",
                                  fontSize: "bold",
                                  fontSize: 16,
                                  fontWeight: "bold",

                                }}
                              >
                                {chats.length>0?chats[chats.length - 1].name.charAt(0) :
                                  "JG"}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontWeight: "bold",
                                color: dark
                                  ? "rgba(255,255,255,0.88)"
                                  : "black",
                              }}
                            >
                              {chats.length > 0
                                ? chats[chats.length-1].name
                                : "Nill custumer"}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: dark ? "rgba(255,255,255,1)" : "black",
                            }}
                          >
                            {chats.length > 0
                              ? chats[chats.length - 1].msg
                              : "No chats yet"}
                          </Text>
                          <View
                            style={{
                              height: 20,
                              width: 20,
                              borderRadius: 10,
                              backgroundColor: "rgba(213,2,4,0.4)",
                              position:"absolute",
			      alignItems: "center",
                              justifyContent: "center",
                              right: 10,
			      top:10
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                                textAlign: "center",
                                color: "white",
                              }}
                            >
                              8
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: 10,
                              color: dark
                                ? "rgba(255,255,255,0.6)"
                                : "rgba(0,0,0,0.8)",
                              fontWeight: "bold",
                            }}
                          >
                            {chats.length > 0
                              ? chats[chats.length - 1].date
                              : chats.date
                                ? chats[chats.length - 1].date
                                : new Date().getHours()}
                          </Text>
			  </View>
                      </Pressable>
                    );
                  })}
              </ScrollView>
            </View>
          )}
        </View>
        <View
          style={{
            height: 80,
            width: sWidth,
            bottom: 60,
            position: "absolute",
            backgroundColor: "transparent",
            paddingLeft: 10,
          }}
        >
          <ScrollView horizontal={true} ref={adsBox}>
            {adsItem.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    height: 80,
                    width: 300,
                    marginRight: 10,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={require("./assets/aditem1.jpg")}
                    style={{ height: 80, resizeMode: "stretch", width: "100%" }}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <BottomTab dark={dark} />
    </>
  );
}

const sWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  main: { height: "100%", width: "100%", backgroundColor: "#ccc" },
  chatMain: {
    height: "70%",
    top: "10%",
    alignItems: "center",
    position: "absolute",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 0,
    padding: 0,
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    top: 0,
    padding: 10,
    paddingBottom: 20,
    alignItems: "center",
    width: "100%",
    height: 85,
    backgroundColor: "white",
  },
});
