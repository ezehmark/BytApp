import React from "react";
import { Text, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import { BlurView } from "expo-blur";
import Recents from "./recents.tsx";
import { useNavigation } from "@react-navigation/native";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  darkTheme:boolean
}

const Menu: React.FC<MenuProps> = ({ isOpen, nav,toggleMenu, darkTheme }) => {

	const menuItems = [{id:1,name:"History",route:"recents"},{id:2,name:"Referrals",route:"referrals"},{id:3,name:"Exchange",route:"exchange"},{id:4,name:"About us",route:"about"},{id:5,name:"Privacy policies",route:"privacy"}];
  if (!isOpen) return null;


  return (
    <BlurView intensity={darkTheme?550:380}tint={darkTheme?"dark":"light"}style={styles.mymenu}>
      <TouchableOpacity onPress={toggleMenu} style={styles.btnCover}>
        <Text style={styles.closeBtn}>Close ❌</Text>
      </TouchableOpacity>
      {<FlatList
      data={menuItems}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>{
	      function clickMenu(){
	     nav?.navigate(item.route);
	      toggleMenu()}
	      return(<>
      <TouchableOpacity onPress={()=>clickMenu()}style={[styles.item1,{borderRadius:10,backgroundColor:darkTheme?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"}]}>
      <Text style={{color:darkTheme?"white":"black"}}>{item.name}</Text>
      </TouchableOpacity></>)}}
      />}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  mymenu: {
    position: "absolute",
    height: "100%",
    width: "80%",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: 0,
    paddingBottom: 300,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    zIndex: 180,
    borderWidth: 1,
    left:0,
    borderLeftWidth:0,
    borderColor: "#ccc",
    overflow:"hidden"
  },
  btnCover: {
    flex: 1,
    left: "60%",
    top: 10,
    zIndex: 3,
  },
  closeBtn: {
    height: 30,
    width: 90,
    textAlign: "center",
    padding: 5,
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
    whiteSpace: "nowrap",
  },
  item1: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
    color:"rgba(0,0,0,0.8)",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    borderColor:"#558c94",
    position:"relative",

  },
});

export default Menu;
