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

  useEffect(()=>{
  const lastChatInterval=
	  setInterval(()=>{const chats = JSON.parse(myStore.getString("chatList"));
  setNewestChats(chats)},2000);
  return()=>clearInterval(lastChatInterval);

  },[myStore]);


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
    console.log(sWidth);
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const [loading, setLoading] = useState(true);

  const chaits = [
    {
      name: "Onah Kingsley",
      msg: "Please check why my deposit failed...",
      msgCount: 20,
    },
  ];

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
        style={[styles.main, { backgroundColor: dark ? "black" : "white" }]}
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
            { backgroundColor: dark ? "#131314" : "white" },
          ]}
        >
          {loading ? (
            <SkeletonPlaceholder backgroundColor="#ccc" paddingTop={20}>
              {Array(6)
                .fill(null)
                .map((_, index) => {
                  return (
                    <SkeletonPlaceholder.Item
                      key={index}
                      height={40}
                      width="90%"
                      borderRadius={20}
                      backgeoundColor={"red"}
                    />
                  );
                })}
            </SkeletonPlaceholder>
          ) : (
            <View
              style={{
                height: 500,
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ScrollView style={{ flex: 1 }}>
                {Array(25)
                  .fill(null)
                  .map((_, index) => (
                    <Pressable
                      onPress={() => navigation.navigate("chatArea")}
                      style={{
                        backgroundColor: dark ? "black" : "white",
                        width: sWidth/1.2,
                        elevation: 0,
                        alignSelf: "center",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        borderRadius: 20,
                        marginBottom: 10,
			padding:10,
                        marginTop: 10,
			height:90,
			borderWidth:1,
			borderColor:dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: dark ? "rgba(255,255,255,0.88)" : "black",
                        }}
                      >
                        {newestChats.length > 0
                          && newestChats[3].name}
                      </Text>
                      <Text
                        style={{
                          color: dark ? "#ccc" : "black",
                        }}
                      >
                        {newestChats[newestChats.length -1]?.msg}
                      </Text>
                      <View
                        style={{
                          height: 20,
                          width: 20,
                          borderRadius: 10,
                          backgroundColor: "#00d4d4",
                          color: "white",
                          position: "absolute",
                          fontSize: 10,
                          textAlign: "center",
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
                          color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.8)",
                          fontWeight: "bold",
                        }}
                      >
                        {date ? date : myDate}
                      </Text>
                    </Pressable>
                  ))}
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
                  style={{
                    height: 80,
                    width: 300,
                    marginRight: 10,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={require('./assets/aditem1.jpg')}
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
    top: 90,
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
    top: 25,
    padding: 10,
    paddingBottom: 20,
    alignItems: "center",
    width: "100%",
    height: 85,
    backgroundColor: "white",
  },
});
