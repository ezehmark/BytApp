import { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import useStore from "./zustand";

const AdminPanel = ({ savedChats }) => {
  const { dark, toggleDark } = useStore(); // ✅ must call the hook

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#131314" : "white" }]}>
    <View style={[styles.contents,{backgroundColor: dark?"black":"white"}]}>
      <Text style={{ paddingVertical:10,paddingHorizontal:20,borderRadius:10,
	      backgroundColor:"#4b9490",fontSize: 15,color:"rgba(255,255,255,0.8)",fontWeight:"bold" }}>Welcome to your admin panel</Text>
     <View style={{width:"95%",marginTop:30,borderRadius:15,backgroundColor:dark?"#2d2d2e":"#edf3f7",justifyContent:"space-between",
     gap:0,alignItems:"center",flexDirection:"column"}}>
     <Text style={{color:dark?"#ccc":"#4b9490",fontSize:20,
	      marginTop:15,fontWeight:"bold"}}>Settings</Text>

      <Pressable onPress={toggleDark} style={[styles.box1,{backgroundColor:dark?"#131314":"#d3e3ee"}]}>
        <Text style={{color:dark?"#ccc":"rgba(0,0,0,0.8)",fontSize:14,fontWeight:"bold"}}>
	Toggle mode</Text>
	<View style={{ alignItems:"center",justifyContent:"center",height: 32, width: 74,borderRadius:20,backgroundColor:dark?"rgba(0,212,212,1)":"#ccc",overflow:"hidden" }}>
	<Image
          source={{
            uri: !dark
              ? "https://i.postimg.cc/mr0zD8g1/file-0000000069f8620abbe273ff6d464798.png"
              : "https://i.postimg.cc/RF7F0mY2/file-000000003e0061f4a72b74b5dcbd3c49.png",
          }}
          style={{ opacity:0.9,height: "100%", width: "102%" }}
        /></View>
      </Pressable></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  contents:{
    flexDirection: "column",
    alignItems: "center",
    marginTop:20,
    width:"100%",
    justifyContent: "space-between",
    padding:10,
    backgroundColor: "white"},
  box1: {
    width: "90%",
    paddingVertical:10,
    borderRadius:15,
    borderWidth:1,
    borderColor:"rgba(255,255,255,0.6)",
    paddingHorizontal:30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems:"center",
    marginBottom:20,
    marginTop:20
  },
});

export default AdminPanel;
