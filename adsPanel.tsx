import Ripple from "react-native-material-ripple";
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,                                                                             FlatList,
  StatusBar,
  View,
  Text,                                                                                   Image,
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
  withSpring,
} from "react-native-reanimated";
import useStore from "./zustand";


export default function AdsPanel(){
const adsBox = useRef(null);

const dark = useStore(st=>st.dark);
const ads = useStore(st=>st.ads);
  const closeAds = useStore(s=>s.closeAds);
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
    {                                                                                         name: "company",
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

  const sWidth = Dimensions.get("window").width;
return(<View
          style={{
            height: 90,
            width: sWidth,
            backgroundColor: dark ? "#131314" : "white",
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            paddinRight:10,
            paddingLeft: 10,
            borderWidth:0,
            alignItems:"center",
	    zIndex:25,

            elevation:5,
            justifyContent:"center",
            shadowColor:dark?"white":"black",
            overflow:"hidden",
            paddingTop:10,
          }}
        >
	<TouchableOpacity
	onPress={()=>closeAds()}
	style={{backgroundColor:"#f2fff3",paddingVertical:5,
		position:"absolute",top:5,zIndex:35,right:5,
	borderWidth:1,borderColor:"#c77700",
	paddingHorizontal:10,borderRadius:10}}>
	<Text style={{fontWight:"bold",alignSelf:"center",color:"#rgba(0,0,0,0.7)",fontSize:8,}}>Close Ads ❌</Text>
	</TouchableOpacity>
          <ScrollView horizontal={true} 
	  showsHorizontalScrollIndicator={false} ref={adsBox}>
            {adsItem.map((item, index) => {
              return (
                <View
                  key={index}                                                                             style={{
                    height: 80,
                    alignSelf:"center",
                    width: 300,
                    marginRight:10,
                    overflow: "hidden",
                    borderRadius:20,
                    backgeoundColor:"white",                                                              }}
                >
                  <Image                                                                                    source={require("./assets/aditem1.jpg")}
                    style={{ height: "100%", resizeMode: "stretch", width: "100%" }}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>)
}
