import {useState,useEffect} from "react";
import{StyleSheet,Image,View,Pressable,} from "react-native";
import useStore from "./zustand";


const export AdminPanel = ()=>{
const {dark,toggleDark} = useStore;
return(<>

<View style = {[styles.container,{bavkgroundColor:dark?"#131314":"white"}]}>
<Text style={{fontSize:15,}}>Mark, welcome to your admin panel</Text>
<Pressable onPress ={()=>{toggleDark()}}style={styles.box1}>
<Text style={{}}>Toggle day mode
</Text>
<Image source={{uri:!dark?"https://i.postimg.cc/mr0zD8g1/file-0000000069f8620abbe273ff6d464798.png":"https://i.postimg.cc/RF7F0mY2/file-000000003e0061f4a72b74b5dcbd3c49.png"}} style={{height:10,width:20}}/>
</Pressable>
</View></>)}

const styles = StyleSheet.create({
container:{height:"100%",width:"100%",justifyContent:"space-between",flexDirection:"column",alignItems:"center",gap:20,backgroundColor:"white"},
box1:{height:30,width:"90%",justifyContent:"space-between",flexDirection:"row",}
})

