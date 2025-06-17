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
  ScrollView,
  TextInput,
  Platform
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
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import * as NavigationBar from "expo-navigation-bar";
import { MMKV } from "react-native-mmkv";

export default function ChatArea({
  updatedChats,
  dark,
  myStore,
  setNewestChats,
}) {
  const [chatList, setChatList] = useState([]);

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
    if (updatedChats.length > 0) {
      setChatList((prev) => [...prev, ...updatedChats]);
      console.error(updatedChats);
    }
  }, [updatedChats]);

  const navigation = useNavigation();

  const handleNavBar = async () => {
    await NavigationBar.setBackgroundColorAsync(dark ? "#131314" : "white");
    await NavigationBar.setButtonStyleAsync(dark ? "dark" : "light");
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

  return (
    <>
      <StatusBar
        backgroundColor={dark ? "#131314" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <View
        style={[styles.outer, { backgroundColor: dark ? "#131314" : "white" }]}
      >
        <View style={styles.user}>
          <Text
            style={{
              color: "#00d4d4",
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
              {updatedChats.length > 0 && updatedChats[0].name?.charAt(0)}
            </Text>
          </View>
        </View>

        <View style={[styles.listBox1, {}]}>
          <ScrollView ref={listRef}
	  overScrollMode={Platform.OS === "android"?"always":undefined}>
            {chatList.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.chatBox,
                    {
                      borderTopRightRadius: item.mine ? 20 : 20,
                      borderTopLeftRadius: item.mine ? 20 : 2,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: item.mine ? 2 : 20,
                      borderTopLeftRadius: item.mine ? 20 : 2,
                      alignSelf: item.mine ?"flex-end":"flex-start",
                      paddingVertical:  5,
                      paddingHorizontal: 15,
		      alignItems:"flex-start",
                      backgroundColor: item.mine
                        ? "rgba(0,212,212,0.6)"
                        : "#a9bf90",
                    },
                  ]}
                >
                  <Text style={[styles.msg, {}]}>{item.msg}</Text>
		  {item.date&&<Text style={styles.date}>{item.date}</Text>}
                </View>
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
          flexDirection: "row",
        }}
      >{replying&&<View style={{height:40,width:40,borderRadius:20,backgroundColor:"white"}}/>}
        <TextInput
          value={reply}
          style={{
            width: replying? width*0.65 : width*0.7,
            height:reply.length>=1?100: 50,
            borderRadius: reply.legth>=1?15:25,
            borderWidth: replying ? 1 : 0,
            textAlignVertical: reply.length>=1 ?"top" : "center",
            paddingLeft: 10,
            paddingBottom: 10,
            paddingRight: 10,
            paddingTop: 10,
            textAlign: "top",
            backgroundColor: dark ? "black" :"#ccc",
	    borderWidth:1,
	    borderColor:dark?"rgba(255,255,255,0.5)":reply.length>=1?"rgba(0,212,212,0.4)":"rgba(0,0,0,0.5)",
            color: dark ? "white" : "grey",
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
          placeholderTextColor={"#ccc"}
        />
        <TouchableOpacity
          onPress={() => {
            sendReply();
          }}
          style={{
            height: replying?40:reply.length>=1?50:40,
            width: replying?40:reply.length>=1?50:40,
            backgroundColor: dark ? "black" : "#ccc",
            borderRadius:replying?20:reply.length>=1?25:20,
	    borderWidth:1,
	    borderColor:"rgba(255,255,255,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: dark ? "white" : "black" }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[styles.bottom, { backgroundColor: dark ? "#131314" : "white" }]}
      >
        {tabs.map((item, index) => {
          const isTab = selected === index;
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
                  width: 60,
                  backgroundColor: "transparent",
                  alignItems: "center",
                }}
              >
                
                <View
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    backgroundColor: isTab
                      ? "rgba(0,212,212,0.2)"
                      : "transparent",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  
                  <Image
                    source={item.icon }
                    style={{
                      height: 40,
                      marginTop: -4,
                      marginBottom: -4,
                      opacity: isTab ? 1 : 0.8,
                      width: 40,
                    }}
                  />
                </View>
                <Text
                  style={[
                    styles.tabText,
                    {
                      fontWeight: "normal",
                      color: isTab
                        ? "#00d4d4"
                        : dark
                          ? "white"
                          : "rgba(0,0,0,0.8)",
                    },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
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
    justifyContent:"space-between",
    gap:10,
    flexDirection:"row",
    backgroundColor: "transparent",
    position: "absolute",
    top: 5,
  },
  name: { color: "white" },

  listBox1: {
    position: "absolute",
    top: "5%",
    height: "80%",
    width: "100%",
    backgroundColor: "",
    padding: 10,
    paddingBottom:60
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

  msg: { color: "#131314", fontSize: 15 },
  date: { fontSize: 10, color: "red", marginTop:2,alignSelf:"flex-end"},
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
