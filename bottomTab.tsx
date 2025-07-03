import Ripple from "react-native-material-ripple";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import useStore from "./zustand";

export default function BottomTab() {
  const [selected, setSelected] = useState(null);

  const dark =useStore(state=>state.dark);

  const navigation = useNavigation();
  const id = useStore(st=>st.id);
  const ads = useStore(st=>st.ads);

  const tabs = [
    {
      name: "Reports",
      nav: "home",
      icon: dark
        ? require("./assets/chatWhite.png"):require("./assets/chatBlack.png") 
    },
    {
      name: "Admin",
      nav: "adminPanel",
      icon: dark?require("./assets/adminWhite.png"):require("./assets/adminBlack.png")
    },
  ];

  return (
    <View style={[styles.bottom, { 
	    borderTopWidth:0,
	    borderColor:dark?(ads?"transparent":"rgba(255,255,255,0.2)"):(ads?"transparent":"rgba(0,0,0,0.2)"),backgroundColor: dark ? "#131314" : "white" }]}>
      
      {tabs.map((item, index) => {
        const isTab = index === id;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelected(index);
              navigation.navigate(item.nav);
            }}
            style={[
              styles.tab,
              { backgroundColor: isTab && "rgba(0,240,212,169,0.7)" },
            ]}
          >
            <View
              style={{
                justifyContent: "space-between",
                paddingBottom: 2,
                flexDirection: "column",
                gap: 4,
		width:60,
                backgroundColor: "transparent",
                alignItems: "center",
              }}
            >
              
                <View 
		style={{ paddingHorizontal:12,paddingVertical:0,backgroundColor:isTab?"rgba(0,212,212,0.2)":"transparent",borderRadius:15,alignItems:"center",justifyContent:"center",}}>
	<Image                                                       
	source={item.icon} 
	style={{height: 40, marginTop:-4,marginBottom:-4,opacity: isTab ? 1 : 0.8, width: 40 }}
              /></View>
              <Text
                style={[styles.tabText, { fontWeight:"normal",
			color: isTab ? "#00d4d4" :dark?"white": "rgba(0,0,0,0.8)" }]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      </View>
  );
}

const sWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  bottom: {
    justifyContent: "space-between",
    elevation: 4,

    flexDirection: "row",
    alignItems: "center",
    height: 80,
    zIndex:30,
    width: "100%",

  },
  tab: {
    width: sWidth / 2,
    borderRightWidth: 0,
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "100%",
    alignItems: "center",
  },
  tabText: {
    color: "#213547",
    marginTop: -6,
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: "transparent",
  },
});
