import { useState, useEffect } from "react";
import { StyleSheet, View, Text, StatusBar,Image,Pressable,BackHandler } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing
} from "react-native-reanimated";
import { WaveIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import {LinearGradient} from "expo-linear-gradient";
import useStore from "./zustand";


export default function Welcome() {
  const navigation = useNavigation();
const {dark}=useStore();
  useEffect(()=>{
	const handleNavBar = async () => {
    await NavigationBar.setBackgroundColorAsync("#00bfbf");
    await NavigationBar.setButtonStyleAsync("light");
  };handleNavBar()},[]);



  const [spin, setSpin] = useState(false);
  const [kick, setKick] = useState(false);

useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("home");
    }, 15000);
  }, []);

  const dotLoc = useSharedValue(-21);
  const dotOpac = useSharedValue(0);
  const dotLocStyle = useAnimatedStyle(()=>{
  return{opacity:dotOpac.value,left:dotLoc.value}});

  const [animateDot,setAnimateDot]= useState(false);
  useEffect(()=>{
	  const dotTime = setTimeout(()=>{
  setAnimateDot(true)},12000);
  return ()=>clearTimeout(dotTime);
  },[]);


  useEffect(()=>{
	  if(animateDot){
	  dotLoc.value=-21;
  dotLoc.value = withRepeat(withSequence(
withTiming(-20.8,{duration:500}),
withTiming(-20.8,{duration:500}),
withTiming(0,{duration:1000}),
withTiming(0,{duration:500}),
withTiming(20.8,{duration:1000}),
withTiming(20.8,{duration:500})
		
	),-1);
		
	dotOpac.value = withRepeat(withSequence(
	withTiming(1,{duration:500}),
	withTiming(1,{duration:490}),
	withTiming(0,{duration:10}),
	withTiming(0,{duration:950}),
	withTiming(1,{duration:10}),
	withTiming(1,{duration:490}),
	withTiming(0,{duration:10}),
	withTiming(0,{duration:950}),
	withTiming(1,{duration:10}),
	withTiming(1,{duration:490}),
	),-1);}

  },[animateDot])


const[note,setNote]=useState("");
const noteText = "Cuustomer Support Solution";
useEffect(()=>{
let index =0;
let noteInterval;
let noteTimeout;
const renderNote = ()=>{
setNote("");
noteTimeout = setTimeout(()=>{
noteInterval = setInterval(()=>{

setNote(prev=>prev + noteText.charAt(index));
index +=1;
if(index >= noteText.length){clearInterval(noteInterval)}
},100);
},2500)}

renderNote();
return()=>{clearInterval(noteInterval);
clearTimeout(noteTimeout);
}
},[]);


const logoWidth = useSharedValue(100);
const logoTop = useSharedValue(0);
const logoStyle = useAnimatedStyle(()=>{
return{translateY:logoTop.value,width:logoWidth.value}});

useEffect(()=>{
let logoTime;
const animateLogo=()=>{
logoTime = setTimeout(()=>{logoWidth.value = 
withSequence(
withTiming(70,{duration:1000,easing:Easing.ease}),
withTiming(80,{duration:1000,easing:Easing.ease}),
withTiming(120,{duration:500,easing:Easing.ease}),
withTiming(150,{duration:500,easing:Easing.ease}),
withTiming(80,{duration:500,easing:Easing.ease}),
withTiming(100,{duration:250,easing:Easing.ease}),
);

logoTop.value=withSequence(
withTiming(-50,{duration:1500,easing:Easing.ease}),
withTiming(-55,{duration:500,easing:Easing.ease}),
withTiming(0,{duration:1000,easing:Easing.ease}),

)
},9000)}

animateLogo();
return()=>clearTimeout(logoTime);

},[]);
const[load,setLoad]=useState(true);
const agentTop = useSharedValue(0);
const agentStyle = useAnimatedStyle(()=>{
return{translateY:agentTop.value}});

useEffect(()=>{

setTimeout(()=>{setLoad(false)},15500);

let agentTime;
function animateAgent(){
agentTime = setTimeout(()=>{agentTop.value = withSequence(
withTiming(-10,{duration:300,easing:Easing.ease}),
withTiming(10,{duration:300,easing:Easing.ease}),
withTiming(0,{duration:400,easing:Easing.ease}),

)},8000);}
animateAgent();
return ()=>clearTimeout(agentTime);
},[]);

if(!load)return (<>
		 <StatusBar
        backgroundColor={dark ? "#2d2d2e" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <View style ={{height:"100%",width:"100%",backgroundColor:dark?"black":"white",alignItems:"center",justifyContent:"center"}}>
		 <View style={{gap:40,padding:40,width:250,backgroundColor:dark?"#2d2d2e":"#edf3f7",alignItems:"center",borderRadius:15,justifyContent:"space-between",
		 flexDirection:"column"}}>
	 <Text style={{color:dark?"white":"rgba(0,0,0,0.85)",fontSize:30,
	 }}>Do you want to exit?</Text>
	 <View style={{alignItems:"center",justifyContent:"space-between",                        flexDirection:"row",gap:40,padding:20}}>
	 <Pressable                                                            onPress ={()=>BackHandler.exitApp()}
         style={{height:40,width:80,borderRadius:15,backgroundColor:dark?"#0d131a":"#d3e3ee",alignItems:"center",justifyContent:"center"}}>
         <Text style={{color:dark?"white":"black",fontWeight:"bold"}}>Exit</Text>
         </Pressable>
	 <Pressable 
	 onPress={()=>navigation.navigate("home")}
	 style={{height:40,width:80,
		 borderRadius:15,backgroundColor:dark?"#0d131a":"#8db3ca",alignItems:"center",justifyContent:"center"}}>
	 <Text style={{color:dark?"white":"black",fontWeight:"bold"}}>Go back</Text>
	 </Pressable>
	 </View></View>
		 </View>
		</>);
  return (
    <>
      <StatusBar backgroundColor={"#00bfbf"} barStyle={"light-content"} />
      <LinearGradient
      colors={["#00bfbf","#00bfbf","#00d4d4","#00d4d4","#00bfbf","#00bfbf"]}
      start={{x:0,y:1}}
      end={{x:0,y:0}}
      style={styles.main}>

        
          <View
            style={[styles.logo,{ height:200, backgroundColor:"transparent",width:200,alignItems:"center",justifyContent:"center",
		    alignSelf: "center",paddingBottom:0 }]}
          >
	  {/*The animated dot circle*/}
	  <Animated.View style={[{height:13.4,width:13.4,borderRadius:6.7,top:39.8,borderWidth:0,borderColor:"black",left:-19,positinon:"absolute",backgroundColor:"transparent",zIndex:5},
		  dotLocStyle]} />
		  {/*The animated logo*/}
	  <Animated.Image source={require("./assets/agentLogo.png")} 
	  style={[{alignSelf:"center",resizeMode:"stretch",height:100,width:100},logoStyle]}/>

	  {/*Animated Agent*/}

	  <Animated.Image source={require("./assets/agentText.png")}
	  style={[{height:30,width:100},agentStyle]}/>

          </View>
	  <Text style={{bottom:250,color:"007f7f",fontWeight:"bold",
		  fontSize:18,
	  position:"absolute",textWrap:"no-wrap",color:"white",zIndex:6}}>{note}</Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    zIndex: 100,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#00d4d4",
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
