import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Vibration,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

import {LinearGradient} from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function Drop() {
  const [amount, setAmount] = useState(45000);
  const isOut = useSharedValue(false);

  const dropZoneY = height * 0.6;

  const translateY = useSharedValue(0);

  const translateX = useSharedValue(0);
  const [dropped, setDropped] = useState(false);

  const pushedHeight = useSharedValue(165);
  const[pushUp,setPushUp]=useState(false);

  const handlePushUp=()=>{
  setPushUp((x)=>!x);handlePushAnim()}


  const handlePushAnim = ()=>{
  pushedHeight.value= withTiming(120,{duration:2000})}

  const pushAnim =useAnimatedStyle(()=>{
  return{top:pushedHeight.value}});

  

  const AnimGradient = Animated.createAnimatedComponent(LinearGradient);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
	    if(e.translationY <0 && !dropped){
      translateY.value = e.translationY;
	    }
	    else{translateY.value = withSpring(70);
	    translateX.value = withSpring(10);}


      if (e.translationY <= -100) {
	      runOnJS(Vibration.vibrate)();
        isOut.value = true;
      }
      else{isOut.value=false;}
    },
    onEnd: (e) => {
	    if(isOut.value){
	    translateY.value = withSpring(70);
	    translateX.value = withSpring(10);
	    runOnJS(setDropped)(true)}
	    else{translateY.value = withSpring(0);
	    translateX.value = withSpring(0);
	    runOnJS(setDropped)(false)}
    },
  });

  const cardAnim = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
      ],
      zIndex:isOut.value?5:2,
      width:isOut.value?290:270,
    };
  });



  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <AnimGradient

	colors={["#007848","#2e4a5f"]}
	start={{x:0,y:1}}
	end={{x:1,y:0}}
          style={[
            styles.card,
            {
              zIndex:2,
              top: 165,
	      position:"absolute",
              width: "100%",
              height:150,
	      elevation:40,
	      borderWidth:1,
	      shadowColor:"black",
	      borderColor:"#ccc",
              backgroundColor: dropped ? "green" : "#1e3a8a",
            },
            cardAnim,pushUp && pushAnim
          ]}
        ><View style={{top:15,right:15,position:"absolute",justifyContent:"space-between",flexDirection:"row",}}>
	<Text style={{color:"#f7b21d",fontSize:12,fontWeight:"bold"}}>Bytance</Text>
	<Text style ={{color:"#d50204",fontSize:12,fontWeight:"bold"}}>Tech</Text></View>

	<Text style={{position:"absolute",bottom:15,right:15,fontWeight:"bold",color:"#ccc"}}>Ezeh Mark</Text>
          <Text style={styles.cardText}>**** **** **** 4242</Text>
          <Text style={styles.balance}>${amount.toLocaleString("en-us")}</Text>
        </AnimGradient>
      </PanGestureHandler>
      <View
        style={{
          top: 140,
          position: "absolute",
          width: "80%",
          height: 150,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: "#ffe0b2",
          alignItems: "center",
          zIndex: 0,
          justifyContent: "center",
        }}
      />

      <LinearGradient
      colors={["#ef9800","#feb819"]}
      start={{x:1,y:0}}
      end={{x:1,y:1}}
        style={{
          top: 180,
          zIndex: 3,
          elevation: 10,
          shadowRadius: 8,
          shadowColor: "black",
          position: "absolute",
          width: "80%",
          height: 150,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: "#feb819",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            position: "absolute",
            color: "#2f1400",
            fontSize: 20,
            bottoim: "20%",
            rigiht: "20%",
            fontWeight: "bold",
          }}
        >
          BitBanker
        </Text>
        <TouchableOpacity
          onPress={() => {
            handlePushUp();
          }}
          style={{
            alignItems: "center",
            padding: 6,
            borderRadius: 6,
            elevation: 4,
            justifyContent: "center",
            backgroundColor: "#ef9800",
            position: "absolute",
            bottom: "10%",
	    color:"#ccc",
            right: "10%",
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>{pushUp?"Put back":"Use card"}</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.dropZone}>
        <Text style={styles.dropText}>
          {dropped ? "Transferred!" : "Drop Here to Transfer"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 0,
  },
  card: {
    width: 260,
    height: 120,
    backgroundColor: "#1e3a8a",
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    top: 20,
  },
  cardText: {
    color: "#ccc",
    fontSize: 16,
    position:"absolute",
    bottom:15,
    left:15
    
  },
  balance: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    top:15,
    left:15,
    position:"absolute",
  },
  dropZone: {
    height: 100,
    width: 220,
    backgroundColor: "#ccc",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#999",
    borderWidth: 2,
    bottom: 20,
    position:"absolute"
  },
  dropText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
