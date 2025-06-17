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
import * as NavigationBar from "expo-navigation-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeComp({
  updatedChats,
  dark,
  savedChats,
  date,
  myDate,
  newestChats,
  myStore,
  setNewestChats,
}) {
  const navigation = useNavigation();
  useEffect(() => {
    console.log("time now:", new Date().getHours());
  }, []);

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
  useEffect(() => {
    if (myStore) {
      const lastChatInterval = setInterval(() => {
        const chatString = myStore.getString("chatList");
        if (chatString) {
          try {
            const parseChats = JSON.parse(chatString);
            setNewestChats(parseChats);
          } catch (err) {
            console.error(err);
          }
        } else {
          console.log("No chatLiat saved");
        }
      }, 2000);
      return () => clearInterval(lastChatInterval);
    } else {
      console.log("No store found");
    }
  }, [myStore]);

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

  const handleNavBar = async () => {
    await NavigationBar.setBackgroundColorAsync(dark ? "#131314" : "white");
    await NavigationBar.setButtonStyleAsync(dark ? "dark" : "light");
  };

  useEffect(() => {
    handleNavBar();
    console.log(sWidth, "by", Dimensions.get("window").height);

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
        backgroundColor={dark ? "#131314" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />

      <View
        style={[styles.main, { backgroundColor: dark ? "#131314" : "white" }]}
      >
        <View
          style={[
            styles.title,
            { backgroundColor: dark ? "#131314" : "white" },
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
            { backgroundColor: dark ? "transparent" : "transparent" },
          ]}
        >
          <LinearGradient
            style={{
              height: 70,
              position: "absolute",
              zIndex: 20,
              top: 0,
              width: "100%",
              pointerEvents: "none",
            }}
            colors={[
              dark ? "#131314" : "white",
              dark ? "rgba(19,19,20,0.5)" : "rgba(255,255,255,0.5)",
              "transparent",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />

          <LinearGradient
            style={{
              height: 70,
              position: "absolute",
              zIndex: 20,
              bottom: 0,
              width: "100%",
              pointerEvents: "none",
            }}
            colors={[
              dark ? "#131314" : "white",
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
              {Array(8)
                .fill(null)
                .map((_, i) => (
                  <SkeletonPlaceholder.Item
                    key={i}
                    height={70}
                    width={sWidth * 0.9}
		    marginTop={i==0?20:0}
                    marginBottom={20}
                    alignSelf="center"
                  />
                ))}
            </SkeletonPlaceholder>
          ) : (
            <View
              style={{
                height: 500,
                backgroundColor: "#131314",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ScrollView
                showVerticalScrollIndicator={false}
                style={{ flex: 1 }}
              >
                {Array(25)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <Pressable
                        key={index}
                        onPress={() => navigation.navigate("chatArea")}
                        style={{
                          backgroundColor: dark ? "black" : "white",
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
                            : "rgba(0,212,212,0.2)",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            color: dark ? "rgba(255,255,255,0.88)" : "black",
                          }}
                        >
                          {newestChats.length > 0
                            ? newestChats[0].name
                            : "Nill custumer"}
                        </Text>
                        <Text
                          style={{
                            color: dark ? "#ccc" : "black",
                          }}
                        >
                          {newestChats.length > 0
                            ? newestChats[newestChats.length - 1].msg
                            : "No chats yet"}
                        </Text>
                        <View
                          style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            backgroundColor: "#00d4d4",
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center",
                            top: 20,
                            right: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                              textAlign: "center",
                              color: "black",
                            }}
                          >
                            7
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
                          {newestChats.length > 0
                            ? newestChats[newestChats.length - 1].date
                            : newestChats.date
                              ? newestChats[newestChats.length - 1].date
                              : new Date().getHours()}
                        </Text>
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
    top: 10,
    padding: 10,
    paddingBottom: 20,
    alignItems: "center",
    width: "100%",
    height: 85,
    backgroundColor: "white",
  },
});
