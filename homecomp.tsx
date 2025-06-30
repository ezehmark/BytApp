import Ripple from "react-native-material-ripple";
import { useState, useEffect, useRef,useCallback } from "react";
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
  withRepeat,
  Easing,
  withSpring,
} from "react-native-reanimated";
import { BallIndicator } from "react-native-indicators";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import ChatArea from "./chatArea.tsx";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import { LinearGradient } from "expo-linear-gradient";
import useStore from "./zustand";
import AdsPanel from "./adsPanel";

export default function HomeComp({ updatedChats, date, myDate }) {
  //calling items up from zustand:

  const chats = useStore((state) => state.chats);
  const dark = useStore((state) => state.dark);
  const ads = useStore(st=>st.ads);
  const closeAds = useStore(s=>s.closeAds);

  const setChats = useStore((state) => state.setChats);
  const handleNav = useStore((state) => state.handleNav);
  const setId = useStore(s=>s.setId);

  const navigation = useNavigation();
  useEffect(() => {
    handleNav();

    console.log("time now:", new Date().getHours());
  }, [dark]);

  useFocusEffect(useCallback(()=>{
  setId(0);
  },[])
		);



  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const [loading, setLoading] = useState(true);

  const rotateC = useSharedValue("0deg");
  const rotateStyle = useAnimatedStyle(()=>{
  return {transform:[{rotate:rotateC.value}]}});

  useEffect(()=>{
  rotateC.value = withTiming("360deg",{duration:2000,easing:Easing.linear})},[chats[chats.length - 1]]);

  const shadePoint = useSharedValue(0);
  const shadeAnim = useAnimatedStyle(()=>{
  return{translateX:shadePoint.value}});

  useEffect(()=>{
  shadePoint.value = withRepeat(
	  withTiming(450,{duration:600,easing:Easing.linear}),8)
  },[loading]);

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);



  return (
    <>
      <StatusBar
        backgroundColor={dark ? "#131314" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />

      <View
        style={[
          styles.main,
          {
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 20,
            backgroundColor: dark ? "#131314" : "white",
          },
        ]}
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
            { backgroundColor: dark ? "transparent" : "white",
	    height:ads?"75%":"80%"},
          ]}
        >
          <LinearGradient
            style={{
              height: 50,
              position: "absolute",
              zIndex: 20,
              top: 0,
              width: "100%",
              pointerEvents: "none",
            }}
            colors={[
              dark ? "#131314" : "white",
              dark ? "rgba(19,19,20,0.3)" : "rgba(255,255,255,0.5)",
              "transparent",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />

          {loading ? (
            <View
	    style={{flex:1}}
	    >
              {Array(7)
                .fill(null)
                .map((_, i) => (
                  <View
                    key={i}
                    style={{height:80,
                    width:sWidth * 0.9,
                    marginTop:i == 0 ? 20 : 0,
                    marginBottom:20,
		    overflow:"hidden",
		    borderRadius:20,
		    backgroundColor:"#2d2d2e",
                    alignSelf:"center"}}
                  >
		  <AnimatedGradient
		  start={{ x: 0, y: 0 }}                                                                  end={{ x: 1, y: 0 }}
		  colors={["transparent","rgba(0,212,212,0.2)",
			  "rgba(0,212,212,0.4)",
		  "rgba(0,212,212,0.2)","transparent"]}
		  style={[{height:1000,left:-40,width:210},shadeAnim]}
		  />
		  </View>
                ))}
            </View>
          ) : (
            <View
              style={{
                height: "100%",
                backgroundColor: dark ? "#131314" : "rgba(237,243,247,0)",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
		paddingBottom:ads?40:5,
              }}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
              >
                {Array(7)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <Pressable
                        key={index}
			android_ripple={{color:dark?"rgba(255,255,255,0.4)":"black",radius:160}}
                        onPress={() => navigation.navigate("chatArea")}
                      
                          style={{
                            backgroundColor: dark ? "#131314" : "white",
                            width: sWidth / 1.1,
	    
	    
                            alignSelf: "center",
                            justifyContent: "space-between",
                            flexDirection: "column",

                            borderRadius: 20,
	    
	    
	    
                            marginBottom: 5,
                            overflow: "hidden",
                            padding: 10,
                            marginTop: index === 0 ? 10 : 5,
                            height: 90,
                            zIndex: 25,
                            borderWidth: 0.5,
                            elevation: 2,
                            shadowColor:dark?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.2)",
                            borderColor: dark ? "rgba(255,255,255,0.1)" : "#d3e3ee",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "space-between",
                              position: "relative",
                              flexDirection: "row",
                              padding: 0,
                              alignItems: "center",
                              marginRight: 10,
                              width: 100,
                              maxWidth: 120,
                              overflow: "hidden",
                              zIndex: 13,
                            }}
                          >
                            <View
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 25,
                                width: 25,
                                borderColor: "rgba(0,0,0,0.1)",
                                borderRadius: 12.5,
                                backgroundColor: dark ? "#00d4d4" : "#00d4d4",
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
                                {chats.length > 0
                                  ? chats[chats.length - 1].name?.charAt(0)
                                  : "JG"}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontWeight: "bold",
                                color: dark ? "rgba(255,255,255,0.8)" : "black",
                              }}
                            >
                              {chats.length > 0
                                ? chats[chats.length - 1].name
                                : "Nill custumer"}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontWeight: "",
                              fontSize: 15,
                              marginLeft: 32,
                              marginBottom:12,
                              color: dark
                                ? "rgba(221,221,221,0.8)"
                                : "rgba(0,0,0,0.8)",
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
                              backgroundColor: dark
                                ? "rgba(213,2,4,0.2)"
                                : "white",
                              position: "absolute",
                              alignItems: "center",
                              justifyContent: "center",
                              borderColor: "red",
                              borderWidth: 0.5,
                              right: 10,
                              elevation: 2,
                              top: 10,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                                textAlign: "center",
                                color: dark ? "rgba(255,255,255,0.8)" : "red",
                              }}
                            >
			    {chats.length>0 ? chats.length : chats.length > 99?"99+":"0"}
                            </Text>
                          </View>
                          <View
                            style={[
                              styles.succesTrack,
                              {
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                backgroundColor: "transparent",
                                height: 3,
                                position: "absolute",
                                left: 12.5,
                                zIndex: 12,
                                width: 20,
                                top: 30,
                              },
                            ]}
                          >
                            <View
                              style={{
                                height: 16,
                                width: 1,
                                backgroundColor: "#00d4d4",
                              }}
                            />

                            <Animated.View
                              style={[{
                                height: 25,
                                width: 25,
                                borderRadius: 12.5,
                                backgroundColor: dark
                                  ? "transparent"
                                  : "white",
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: "rgba(0,212,212,1)",

                                borderWidth: 0.6,
                              },rotateStyle]}
                            >
                              <View
                                style={{
                                  height: 20,
                                  width: 20,
                                  borderRadius: 10,
                                  backgroundColor: dark
                                    ? "rgba(0,212,212,0.7)"
                                    : "rgba(0,212,212,0.7)",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                
                                <Text
                                  style={{
                                    fontSize: 10,
                                    textAlign: "center",
                                    color: dark ? "white" : "red",
                                  }}
                                >
                                  🚀
                                </Text>
                              </View>
                            </Animated.View>
                          </View>
                          <Text
                            style={{
                              fontSize: 8,
                              color: dark
                                ? "rgba(255,255,255,0.5)"
                                : "rgba(0,0,0,0.8)",
                              fontWeight: "bold",
			      position:"absolute",
			      right:10,
			      bottom:10,
			      
                            }}
                          >
                            {chats.length > 0
                              ? chats[chats.length - 1].date
                              : chats.date
                                ? chats[chats.length - 1].date
                                : new Date().getHours()}
                          </Text>
                      </Pressable>
                    );
                  })}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
      <View style={{alignItems:"center",position:"absolute"
        ,justifyContent:"center",
      bottom:0,flexDirection:"column",flex:1}}>
      {ads&&<AdsPanel/>}
      <BottomTab dark={dark} />
      </View>
    </>
  );
}

const sWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  main: { height: "100%", width: "100%", backgroundColor: "#ccc" },
  chatMain: {
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
