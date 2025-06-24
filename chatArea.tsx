import React, { useState, useEffect, useRef } from "react";
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
  TextInput,
  ToastAndroid,
  Platform
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSequence,
} from "react-native-reanimated";
import { BallIndicator } from "react-native-indicators";
import Pusher from "pusher-js";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import { MMKV } from "react-native-mmkv";
import useStore from "./zustand";
import Clipboard from "@react-native-clipboard/clipboard";

export default function ChatArea({
}) {


  const [replying, setReplying] = useState(false);

  const listRef = useRef(null);
  useFocusEffect(
    React.useCallback(() => {
      const scrollT = setTimeout(() => {
        listRef.current.scrollToEnd({ animated: false });
      }, 500);
      return () => clearTimeout(scrollT);
    }, []),
  );


  const chats = useStore((state) => state.chats);
const dark = useStore((state) => state.dark);

const setChats = useStore((state)=>state.setChats);
const handleNav = useStore((state) => state.handleNav);

  const get = useStore.getState;

useEffect(()=>{handleNav();},[dark]);
  //Retrieving stored chatList


  /*Updating chatList when new chats come in from updatedChats*/


  const navigation = useNavigation();


  //Ensuring the chat liat moves up on thebevent of new chat
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToEnd({ animated: true });
    }
  }, [chats]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToEnd({ animated: true });
    }
  }, []);

  const [reply, setReply] = useState("");
  // Handler to send chat, setChat and store in MMKV
  function sendReply() {
    const newReply = [{ msg: reply, mine: true,name:"Ezeh Mark" }];
    if (reply.trim().length === 0) {
      return;
    }


//Update zustand with new copy of chat list array
    setChats(newReply);
    const updatedChats 	= get().chats;
    console.log(chats);
    setReply("");
  }
  //Storing chat liat on the event of changes in chatlist


  //BottomTab
  //
  const [selected, setSelected] = useState(0);
  const tabs = [
    {
      name: "Reports",
      nav: "home",
      icon: dark?require("./assets/chatWhite.png"):require("./assets/chatBlack.png")
    },
    {
      name: "Admin",
      nav: "bubble",
      icon: dark?require("./assets/adminWhite.png"):require("./assets/adminBlack.png")
    },
  ];

  const noticeTop = useSharedValue(-50);
  const noticeStyle=useAnimatedStyle(()=>{
  return{translateY:noticeTop.value}});

  const noticeMover = ()=>{
  noticeTop.value=withSequence(
  withTiming(50,{duration:1000,easing:Easing.ease}),
  withTiming(50,{duration:1000,easing:Easing.ease}),
  withTiming(-50,{duration:1000,easing:Easing.ease}),)}
const [notice,setNotice] = useState("Message copied!");
  return (
    <>
      <StatusBar
        backgroundColor={dark ? "#131314" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <Animated.Text style={[styles.notice,{                                                  paddingHorizontal:20,paddingVertical:40,backgroundColor:"#00d4d4",                      color:"white",alignSelf:"center",position:"absolute",                                                       borderRadius:15,fontSize:16,fontWeight:"bold",top:0},noticeStyle]}>{notice}</Animated.Text>
      <View
        style={[styles.outer, { backgroundColor: dark ? "#131314" : "white" }]}
      >
        <View style={[styles.user ,{backgroundColor:dark?"#131314":"white"}]}>
	<View style={{                                                                          justifyContent:"space-between",flexDirection:"row",gap:10,alignItems:"center"}}>
          <Text
            style={{
              color: "#00d4d4",
              fontSize: "bold",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {chats.length > 0 && chats[0].name}
          </Text>

          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: "#00d4d4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeigh20t: "bold",
                color: "white",
                alignSelf: "center",
                position: "absolute",
              }}
            >
              {chats.length > 0 && chats[0].name?.charAt(0)}
            </Text>
          </View>
	  </View>
        </View>

        <View style={[styles.listBox1, {backgroundColor:dark?'black':'white',paddingBottom:replying?100:80}]}>
          <ScrollView ref={listRef}
	  overScrollMode={Platform.OS === "android"?"always":undefined}>

            {chats.map((item, index) => {
		    const handleCopy = async()=>{
		await Clipboard.setString(item.msg);
		    if(Platform.OS === "android"){
		    ToastAndroid.show("Message copied"),
		    ToastAndroid.SHORT}
		    else{alert("Message copied")}}
              return (
                <Pressable
		onLongPress={()=>{handleCopy();noticeMover()}}
                  key={index}
                  style={[
                    styles.chatBox,
                    {
                      borderTopRightRadius: item.mine ? 15 : 15,
                      borderTopLeftRadius: item.mine ? 15 : 2,
                      borderBottomLeftRadius: item.mine?15:2,
                      borderBottomRightRadius: item.mine ? 2 : 15,
                      borderTopLeftRadius: 15,
                      alignSelf: item.mine ?"flex-end":"flex-start",
                      paddingVertical:  5,
                      paddingHorizontal: 15,
		      alignItems:"flex-start",
                      backgroundColor: item.mine ?(dark?"#484c4f":"#edf3f7")
                        : (dark?'#292e33':'#d3e3ee'),
                    },
                  ]}
                ><Pressable onPress={()=>{handleCopy();noticeMover()}}
		style={{height:20,width:20,alignItems:"center",
			position:"absolute",top:20,right:20,justifyContent:"center",
		backgroundColor:"white",borderRadius:10}}>
		<Text style={{fontSize:10}}>📎</Text></Pressable>
                  <Text style={[styles.msg, {color:dark?'white':'rgba(0,0,0,0.8)'}]}>{item.msg}</Text>
		  {item.date&&<Text style={[styles.date,{color:dark?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)",fontWeight:'bold'}]}>{item.date}</Text>}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-around",
          padding:10,
          width: "100%",
          alignItems: "center",
          position: "absolute",
          bottom: 80,
	  gap:8,
	  height:100,
	  backgroundColor:dark?"#131314":"white",
          flexDirection: "row",
        }}
      >{replying&&<TouchableOpacity style={{height:40,width:40,borderRadius:20,backgroundColor:"black"}}/>}
        <TextInput
          value={reply}
          style={{
            width: replying? width*0.65 : width*0.7,
            height:reply.length>=1?80: 50,
            borderRadius: reply.legth>=1?15:25,
            borderWidth: replying ? 1 : 0,
            textAlignVertical: reply.length>=1 ?"top" : "center",
            paddingLeft: 10,
            paddingBottom: 10,
            paddingRight: 10,
            paddingTop: 10,
            textAlign: "top",
            backgroundColor: dark ? "#131314" :"white",
	    borderWidth:reply.length >0?1.5:0.5,
	    borderColor:"#4b9490",
            color: dark ? "white" : "rgba(0,0,0,0.8)",
          }}
          multiline={true}
          onFocus={() => {
            setReplying(true);
          }}
          onBlur={() => {
            setReplying(false);
          }}
          onChangeText={(e) => {
            setReply(e);
          }}
          placeholder="Reply customer ..."
          placeholderTextColor={"#4b9490"}
        />
        <TouchableOpacity
          onPress={() => {
            sendReply();
          }}
          style={{
            height: replying?40:50,
            width: replying?40:50,
            backgroundColor: dark ? "black" :"#4b9490",
            borderRadius:replying?20:25,
	    borderWidth:1,
	    borderColor:"rgba(255,255,255,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12,fontWeight:"bold", color: dark ? "white" : "white" }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
<BottomTab/>
    </>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },

  user: {
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width:width,
    justifyContent:"center",
    position: "absolute",
    top: 0,
    zIndex:50,
  },
  name: { color: "white" },

  listBox1: {
    position: "absolute",
    top: "5%",
    height: "80%",
    width: "100%",
    backgroundColor: "",
    padding: 10,
    paddingBottom:80
  },
  chatBox: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 10,
    backgroundColor: "#e0e2d7",
    alignItems: "center",
    paddingVertical: 5,
    maxWidth: width / 1.4,
    justifyContent: "space-between",
    flexDirection: "column",
  },

  replyBox: {
    width: "70%",
    borderRadius: 15,
    backgroundColor: "black",
    alignItems: "center",
    marginRight: 10,
    marginBottom:10,
    justifyContent: "space-between",
    flexDirection: "column",
  },

  msg: { color: "rgba(0,0,0,0.8)", fontSize: 14 },
  date: { fontSize: 6, color: "rgb(0,0,0,0.1)", marginTop:4,alignSelf:"flex-end"},
  bottom: {
    justifyContent: "space-between",
    elevation: 4,

    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
  },
  tab: {
    width: width / 2,
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
