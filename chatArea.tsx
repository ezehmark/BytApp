import React,{ useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { BallIndicator } from "react-native-indicators";
import Pusher from "pusher-js";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import * as NavigationBar from "expo-navigation-bar";
import { MMKV } from "react-native-mmkv";

export default function ChatArea({ updatedChats,dark,myStore,setNewestChats }) {
  const [chatList, setChatList] = useState([]);

  const [replying, setReplying] = useState(false);


const listRef = useRef(null);
useFocusEffect(React.useCallback(()=>{
const scrollT = setTimeout(()=>{
listRef.current.scrollToEnd({animated:false})},500);
return()=>clearTimeout(scrollT)},[]));


  //Retrieving stored chatList

useEffect(() => {
    console.log(updatedChats ?? "No msgs");
    const rawList = myStore.getString("chatList");
    if (rawList) {
      setSavedList(JSON.parse(rawList));
      setChatList(JSON.parse(rawList));
    }
  }, []);


  /*Updating chatList when new chats come in from updatedChats*/

  useEffect(() => {
	  if(updatedChats.length>0){
    
      setChatList((prev) => [...prev, ...updatedChats]);
	  console.error(updatedChats)}
    
  }, [updatedChats]);

  const navigation = useNavigation();

  const handleNavBar = async () => {
    await NavigationBar.setBackgroundColorAsync(dark?"#131314":"white");
    await NavigationBar.setButtonStyleAsync(dark?"dark":"light");
  };

  useEffect(() => {
    handleNavBar();
  }, []);

//Ensuring the chat liat moves up on thebevent of new chat
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToEnd({ animated: true });
    }
  }, [chatList]);

  useEffect(() => {                                                       
	
	  if (listRef.current) {                                                  
	listRef.current.scrollToEnd({ animated: true });
    }                                                                   
  	}, []);

  const [reply, setReply] = useState("");
  const [savedList, setSavedList] = useState(chatList);
// Handler to send chat, setChat and store in MMKV
  function sendReply() {
    const newReply = { msg: reply, mine: true };
    if (reply.trim().length === 0) {
      return;
    }

    const newChat = [...chatList, newReply];
    setChatList(newChat);
    myStore.set("chatList", JSON.stringify(newChat));
    console.log(newChat);
    setReply("");
  }
//Storing chat liat on the event of changes in chatlist
  useEffect(() => {
    myStore.set("chatList", JSON.stringify(chatList));
  }, [chatList]);

  useEffect(() => {
    console.log(savedList, "- savedList");
  }, []);


  return (
    <>
      <StatusBar backgroundColor={dark?"#131314":"white"} barStyle={dark?"light-content":"dark-content"} />
      <View style={[styles.outer,{backgroundColor:dark?"#131314":"white"}]}>
        <View style={styles.user}>
          <Text
            style={{
              color: "#213547",
              fontSize: "bold",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {updatedChats.length > 0 && updatedChats[0].name}
          </Text>


          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: "#020d3e",
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
              {updatedChats.length > 0 && updatedChats[0].name?.charAt(0)}
            </Text>
          </View>
        </View>

        <View style={[styles.listBox1,{}]}>
	<ScrollView ref={listRef}>
	{chatList.map( (item,index) => {
              return (
                  <View
		  key={index}
                    style={[
                      styles.chatBox,
                      {
                        borderTopRightRadius: item.mine ? 15 : 15,
                        borderTopLeftRadius: item.mine ? 15 : 2,
                        borderBottomLeftRadius: 15,
			borderBottomRightRadius:item.mine?2:15,
                        borderTopLeftRadius: item.mine ? 15 : 2,
                        alignSelf: item.mine && "flex-end",
			paddingVertical:!item.mine ?5:5,
			paddingHorizontal:!item.mine ? 10:10,
                        backgroundColor: item.mine ? "rgba(0,212,212,0.6)" : "#a9bf90",
                      },
                    ]}
                  >
                    <Text style={[styles.msg,{}]}>{item.msg}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
              );
	})}
          
	  </ScrollView>
      </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          padding: 20,
          width: "100%",
          alignItems: "center",
          position: "absolute",
          bottom: 80,
          flexDirection: "row",
        }}
      >
        <TextInput
          value={reply}
          style={{
            width: dark?"75%":"80%",
            height: 60,
            borderRadius: 15,
            borderWidth: replying ? 1 : 0,
            textAlignVertical: replying ? "top" : "center",
            paddingLeft: 10,
            paddingBottom: 10,
            paddingRight: 10,
            paddingTop: 10,
            textAlign: "top",
            backgroundColor: dark? "black" : "#ccc",
            elevation: 2,
	    color:dark?"white":"grey",
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
          placeholder="Reply customer"
	  placeholderTextColor={"#ccc"}
        />
        <TouchableOpacity
          onPress={() => {
            sendReply();
          }}
          style={{
            height: 50,
            width: 50,
            backgroundColor: dark?"black":"#ccc",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: dark?"white":"black" }}>Send</Text>
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
    backgroundColor: "transparent",
    position: "absolute",
    top: 50,
  },
  name: { color: "white" },

listBox1: {
  position: "absolute",
  top: 100,
  height: "70%",
  width: "100%",
  backgroundColor: "",
  padding: 10,
  paddingBottom: 60,
},
  chatBox: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 10,
    backgroundColor: "#e0e2d7",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    maxWidth: width / 1.4,
    justifyContent: "space-between",
    flexDirection: "column",
  },

  replyBox: {
    padding: 10,
    marginBottom: 10,
    width: "70%",
    borderRadius: 15,
    backgroundColor: "black",
    alignItems: "center",
    marginRight: 10,
    justifyContent: "space-between",
    flexDirection: "column",
  },

  msg: { color: "#131314", fontSize: 15 },
  date: { fontSize: 10, color:"red",marginRight: 10, marginBottom: 10 },
});
