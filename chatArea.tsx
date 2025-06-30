import Ripple from "react-native-material-ripple";
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
  Vibration,
  Pressable,
  Clipboard,
  ScrollView,
  TextInput,
  Video,
  ToastAndroid,
  ActivityIndicator,
  Platform,
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
import { useNavigation } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import { MMKV } from "react-native-mmkv";
import useStore from "./zustand";
import * as ImagePicker from "expo-image-picker";
import AdsPanel from "./adsPanel";
import axios from "axios";
//import Clipboard from "@react-native-clipboard/clipboard";

export default function ChatArea({}) {
  const [replying, setReplying] = useState(false);
  const listRef = useRef(null);
  useEffect(() => {
    const scrollT = setTimeout(() => {
      listRef.current.scrollToEnd({ animated: false });
    }, 500);
    return () => clearTimeout(scrollT);
  }, []);

  const chats = useStore((state) => state.chats);
  const dark = useStore((state) => state.dark);

  const setChats = useStore((state) => state.setChats);
  const handleNav = useStore((state) => state.handleNav);
  const dateNow = useStore((state) => state.dateNow);
  const ads = useStore((s) => s.ads);
  const closeAds = useStore((s) => s.closeAds);
  const socket = useStore((s) => s.socket);

  useEffect(() => {
    handleNav();
  }, [dark]);
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
    const newReply = [
      { msg: reply, mine: true, name: "Ezeh Mark", date: dateNow() },
    ];
    if (reply.trim().length === 0) {
      return;
    }

    //Update zustand with new copy of chat list array
    setChats(newReply);
    listRef.current?.scrollToEnd({ animated: true });
    setReply("");
  }
  //Storing chat liat on the event of changes in chatlist

  //BottomTab
  //

  const noticeTop = useSharedValue(-100);
  const noticeStyle = useAnimatedStyle(() => {
    return { translateY: noticeTop.value };
  });

  const noticeMover = () => {
    noticeTop.value = withSequence(
      withTiming(100, { duration: 1000, easing: Easing.ease }),
      withTiming(100, { duration: 2000, easing: Easing.ease }),
      withTiming(-100, { duration: 1000, easing: Easing.ease }),
    );
  };
  const [notice, setNotice] = useState("");

  const [selected, setSelected] = useState(null);
  const [copy, setCopy] = useState("Copy");
  const [url, setUrl] = useState("");
  const [picUrl, setPicUrl] = useState("");

  const [vurl, setvurl] = useState("");

  const [loading, setLoading] = useState(false);

  async function pickImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setNotice("Please allow permissions");
      noticeMover();
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.4,
    });

    if (result.canceled || !result.assets || result.assets.length === 0) {
      setNotice("Select an image to continue");
      noticeMover();
      return;
    }

    const iurl = result.assets[0].uri;
    setUrl(iurl);
    setChats([{ name: "Ezeh Mark", mine: true, uri: iurl }]);
    console.log(result);

    const splits = iurl.split(".");
    const ext = splits[splits.length - 1];

    const chatForm = new FormData();
    chatForm.append("file", {
      uri: iurl,
      type: `image/${ext}`,
      name: "chatImage",
    });
    chatForm.append("upload_preset", "bitbankers_upload");

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dadvxxgl1/image/upload",
        chatForm,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      const imgUrl = response.data.secure_url;
      setNotice("Picture sent to customer");
      noticeMover();
      socket.emit("AdmminReply", imgUrl);
    } catch (err) {
      setNotice(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  //Picking, uploading and sending video
  //
  async function pickVideo() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setNotice("Please allow permissions");
      noticeMover();
      return;
    }
    const result = await ImagePicker.launchVideoLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 0.4,
    });
    if (result.canceled || !result.assets || result.assets.length === 0) {
      setNotice("Select an image to continue");
      noticeMover();
      return;
    }
    const iurl = result.assets[0].uri;
    setvurl(iurl);
    setChats([{ name: "Ezeh Mark", mine: true, uri: vurl }]);
    console.log(result);

    const splits = iurl.split(".");
    const ext = splits[splits.length - 1];

    const chatForm = new FormData();
    chatForm.append("file", {
      uri: vurl,
      type: `video/${ext}`,
      name: "chatVideo",
    });
    chatForm.append("upload_preset", "bitbankers_upload");

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dadvxxgl1/image/upload",
        chatForm,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      const imgUrl = response.data.secure_url;
      setNotice("Picture sent to customer");
      noticeMover();
      socket.emit("AdmminReply", imgUrl);
    } catch (err) {
      setNotice(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  }


  const searchChats = ()=>{

const found = chats.find(s=>)
  }

  return (
    <>
      <StatusBar
        backgroundColor={dark ? "#131314" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <View
        style={[styles.outer, { backgroundColor: dark ? "#131314" : "white" }]}
      >
        {notice && (
          <Animated.Text
            style={[
              styles.notice,
              {
                paddingHorizontal: 20,
                zIndex: 100,
                paddingVertical: 10,
                backgroundColor: "rgba(75,148,144,0.6)",
                color: "rgba(255,255,255,0.9)",
                alignSelf: "center",
                position: "relative",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: "bold",
                top: -50,
                translateY: -100,
              },
              noticeStyle,
            ]}
          >
            {notice}
          </Animated.Text>
        )}
        <View
          style={[
            styles.user,
            { height: 50, backgroundColor: dark ? "#131314" : "white" },
          ]}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#00d4d4",
                fontSize: "bold",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {chats.length > 0 && chats[0]?.name}
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

        <View
          style={[
            styles.listBox1,
            {
              backgroundColor: dark ? "#131314" : "white",
              paddingBottom: ads ? 100 : 20,
            },
          ]}
        >
          <ScrollView
            ref={listRef}
            showsVerticalScrollIndicator={false}
            overScrollMode={Platform.OS === "android" ? "always" : undefined}
          >
            {chats.map((item, index) => {
              const handleCopy = async () => {
                await Clipboard.setString(item.msg);
                setNotice("Chat copied!");
              };

              const isBox = index === selected;

              return (
                <Pressable
                  android_ripple={{
                    borderless: false,
                    radius: 150,
                    color: dark ? "white" : item.uri ? "white" : "white",
                  }}
                  key={index}
                  onLongPress={() => {
                    Vibration.vibrate(100);
                    setSelected(index);
                  }}
                  onPress={() => {
                    if (selected == index) {
                      setSelected(null);
                    }
                    setSelected(index);
                  }}
                  style={[
                    styles.chatBox,
                    {
                      overflow: "hidden",
                      zIndex: 30,
                      borderTopRightRadius: item.mine ? 15 : 15,
                      borderTopLeftRadius: item.mine ? 15 : 2,
                      borderBottomLeftRadius: item.mine ? 15 : 2,
                      borderBottomRightRadius: item.mine ? 2 : 15,
                      borderTopLeftRadius: 15,
                      alignSelf: item.mine ? "flex-end" : "flex-start",
                      paddingVertical: item.uri ? 0 : 5,
                      paddingHorizontal: item.uri ? 0 : 15,
                      alignItems: item.uri ? "center" : "flex-start",
                      backgroundColor: item.mine
                        ? dark
                          ? "#484c4f"
                          : item.uri
                            ? "black"
                            : isBox
                              ? "rgba(75,148,144,0.4)"
                              : "#edf3f7"
                        : (dark
                            ? "#292e33"
                            : isBox
                              ? "rgba(75,148,144,0.4)"
                              : "#d3e3ee") ||
                          (isBox && "white"),
                    },
                  ]}
                >
                  {isBox && (
                    <View>
                      <Pressable
                        onPress={() => {
                          handleCopy();
                          noticeMover();
                        }}
                        style={{
                          zIndex: 40,
                          alignItems: "center",
                          alignSelf: "flex-end",
                          marginBottom: 5,
                          justifyContent: "space-between",
                          flexDirection: "row",
                          padding: 5,
                          gap: 5,
                          elevation: 4,
                          shadowColor: dark ? "white" : "black",
                          backgroundColor: "#f2fff3",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "#4b9490",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          {copy}
                        </Text>
                        <Text
                          style={{
                            height: 20,
                            width: 20,
                            fontSize: 12,
                            backgroundColor: "white",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            borderRadius: 10,
                          }}
                        >
                          📎
                        </Text>
                      </Pressable>
                    </View>
                  )}
                  <Text
                    style={[
                      styles.msg,
                      {
                        margin: 2.5,
                        fontSize: 15,
                        color: dark ? "#dddddd" : "rgba(0,0,0,0.8)",
                      },
                    ]}
                  >
                    {item.msg}
                  </Text>
                  {item.date && (
                    <Text
                      style={[
                        styles.date,
                        {
                          color: dark
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(0,0,0,0.6)",
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      {item.date}
                    </Text>
                  )}
                  {item.uri && (
                    <View style={{ padding: 2, alignSelf: "center" }}>
                      <Image
                        source={{ uri: item.uri }}
                        style={{
                          height: undefined,
                          width: "100%",
                          aspectRatio: 1,
                          resizeMode: "contain",
                          alignSelf: "center",
                        }}
                      />
                      {loading && index == chats.length - 1 && (
                        <ActivityIndicator
                          size={40}
                          style={{
                            zIndex: 40,
                            top: 20,
                            right: 20,
                            backgroundColor: "rgba(75,148,144,0.4)",
                            padding: 5,
                            borderRadius: 10,
                            position: "absolute",
                            alignSelf: "center",
                          }}
                        />
                      )}
                    </View>
                  )}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          zIndex: 27,
          justifyContent: "center",
          bottom: 0,
          flexDirection: "column",
          flex: 1,
        }}
      >
        {ads && <AdsPanel />}
        <View
          style={{
            justifyContent: "space-around",
            padding: 10,
            width: width,
            alignItems: "center",
            gap: 8,
            height: 100,
            backgroundColor: dark ? "#131314" : "white",
            flexDirection: "row",
            zIndex: 27,
          }}
        >
          {replying && (
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "#484c4f",
              }}
            >
              <Text style={{ fontSize: 20 }}>📸</Text>
            </TouchableOpacity>
          )}
          <TextInput
            value={reply}
            autoFocus={false}
            style={{
              width: replying ? width * 0.65 : width * 0.7,
              height: reply.length > 0 ? 80 : 50,
              borderRadius: reply.legth > 0 ? 15 : 25,
              borderWidth: replying ? 1 : 0,
              textAlignVertical: reply.length > 0 ? "top" : "center",
              paddingLeft: 10,
              paddingBottom: 10,
              paddingRight: 10,
              paddingTop: 10,
              textAlign: "top",
              backgroundColor: dark ? "#131314" : "white",
              borderWidth: reply.length > 0 ? 1.5 : 0.5,
              borderColor: "#4b9490",
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
          <Pressable
            android_ripple={{ color: "white", radius: 40, overflow: "hidden" }}
            onPress={() => {
              sendReply();
            }}
            style={{
              height: replying ? 40 : 50,
              width: replying ? 40 : 50,
              backgroundColor: dark ? "black" : "#4b9490",
              borderRadius: replying ? 20 : 25,
              borderWidth: 1,
              borderColor: "#00d4d4",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: dark ? "#00d4d4" : "white",
              }}
            >
              Send
            </Text>
          </Pressable>
        </View>
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
    backgroundColor: "white",
    width: width,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    zIndex: 50,
  },
  name: { color: "white" },

  listBox1: {
    position: "absolute",
    bottom: 80,
    height: "85%",
    width: "100%",
    backgroundColor: "",
    padding: 10,
    paddingBottom: 20,
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
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "column",
  },

  msg: { color: "rgba(0,0,0,0.8)", fontSize: 14 },
  date: {
    fontSize: 6,
    color: "rgb(0,0,0,0.1)",
    marginTop: 4,
    alignSelf: "flex-end",
  },
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
