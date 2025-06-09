import {useState,useEffect} from "react";
import {StyleSheet,View,Text} from "react-native";
import Animated,{useSharedValue,useAnimatedStyle,withTiming,
	withSequence} from "react-native-reanimated";
import { BallIndicator} from "react-native-indicators";
import {useNavigation} from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";






export default function Welcome(){
const navigation = useNavigation();


const handleNavBar = async()=>{
await NavigationBar.setBackgroundColorAsync("#00d4d4");
await NavigationBar.setButtonStyleAsync("light")}

const locate = useSharedValue(-300);

const logoAnim = useAnimatedStyle(()=>{
return{transform:[{translateX:locate.value}]}});

const [spin,setSpin]=useState(false);

useEffect(()=>{
handleNavBar();

setTimeout(()=>{setSpin(true)},7200);
setTimeout(()=>{navigation.navigate("home")},12000);
setTimeout(()=>{
locate.value = withSequence(
withTiming(0,{duration:2000}),
withTiming(0,{duration:4000}),
withTiming(400,{duration:1200})
);
},2000);


},[]);



return(<>
<View style={styles.main}>
{spin && <BallIndicator size={40} count={5}/>}

{!spin&&<Animated.Text style={[styles.logo,logoAnim,{alignSelf:"center"}]}><Text style={{color:"white",fontWeight:"bold",fontSize:35}}>CS Agent</Text></Animated.Text>}


</View>


</>);


}

const styles = StyleSheet.create({
main:{zIndex:100,height:"100%",width:"100%",alignItems:"center",
	justifyContent:"center",

	backgroundColor:"#00d4d4"},
logo:{fontSize:35,fontWeight:"bold",color:"white",textAlign:"center"}})
