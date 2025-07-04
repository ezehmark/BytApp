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
  useColorScheme,
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
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import { MMKV } from "react-native-mmkv";
import useStore from "./zustand";
import * as ImagePicker from "expo-image-picker";
import AdsPanel from "./adsPanel";
import axios from "axios";
import SearchBar from "./searchBar";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
//import Clipboard from "@react-native-clipboard/clipboard";

export default function ChatArea({}) {
  const [typing, setTyping] = useState(false);
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

  const refineChats = useStore((s) => s.refineChats);
  const updateChats = useStore((s) => s.updateChats);
  const refinedChats = useStore((s) => s.refinedChats);
  const typed = useStore((t) => t.typed);
  const setTyped = useStore((st) => st.setTyped);

  const [query, setQuery] = useState("");

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

  // Handler to send chat, setChat and store in MMKV
  function sendReply() {
    const newReply = [
      { msg: typed, mine: true, name: "Ezeh Mark", date: dateNow() },
    ];
    if (typed.trim().length === 0) {
      return;
    }

    //Update zustand with new copy of chat list array
    setChats(newReply);
    listRef.current?.scrollToEnd({ animated: true });
    setTyped("");
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
  /*async function pickVideo() {
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
*/
  const searchChats = (txt) => {
    setQuery(txt);
    if (txt.trim().length === 0) {
      refineChats([]);
      return;
    }
    const filteredChats = chats.filter((item) =>
      item.msg?.toLowerCase().includes(txt.toLowerCase()),
    );
    console.log(filteredChats);
    refineChats(filteredChats);
  };
  useEffect(() => {
    refineChats([]);
  }, []);

  const [searching, setSearching] = useState(false);
  const [readyDelete, setReadyDelete] = useState(false);

  const [marked, setMarked] = useState([]);
  const [pressed, setPressed] = useState(false);

  const[noticeColor,setNoticeColor]=useState("rgba(75,148,144,0.6)")
  function deleteChats() {
    if (marked.length > 0) {
      updateChats(chats.filter((item) => !marked.includes(item)));
    setNotice("Chats deleted");
    setNoticeColor("rgba(234,7,7,0.6)");
    noticeMover()
    setTimeout(()=>setPressed(false),1000)}
  }

  const copyMarked = async()=>{
if(marked.length ==0){return}
 const markedMsgs = marked.map(i=>({allMsg:i.msg})) 
  await Clipboard.setString(JSON.stringify(markedMsgs));
  setNotice("Chats copied");
  setNoticeColor("rgba(0,212,212,0.6)");
  noticeMover()}

  const rippleRadii = useRef({});
  const scaleT = useSharedValue(0.5);
  const scaleAnim = useAnimatedStyle(()=>{
  return{transform:[{scale:scaleT.value}]}});

  useEffect(()=>{
  scaleT.value = withSequence(
  withTiming(1.4,{duration:500,easing:Easing.ease}),
  withTiming(1,{duration:500,easing:Easing.ease}))
  },[marked]);

  return (
    <>
      <StatusBar
        backgroundColor={dark ? "#0d131a" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <View
        style={[styles.outer, { backgroundColor: dark ? "#0d131a" : "white" }]}
      >
        <View
          style={[
            {
              height: 50,
              backgroundColor: dark ? "#0d131a" : "white",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              top: 0,
              zIndex: 60,
              paddingHorizontal: 15,
            },
            styles.topButtons,
          ]}
        >
          <Ionicons
            name="arrow-back-circle"
            size={35}
            onPress={() => navigation.goBack()}
            color={dark ? "#eee" : "#0d131a"}
          />

          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: 10,
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#00d4d3" }}
            >
              {chats.length > 0 ? chats[0].name : "No user"}
            </Text>
            {!searching && (
              <View
                style={{
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  borderRadius: 15,
                  backgroundColor: "#00d4d4",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  {chats.length > 0 ? chats[0].name.charAt(0) : "CS"}
                </Text>
              </View>
            )}
          </View>
          {searching && (
            <View style={styles.wrapper}>
              <View
                style={[
                  styles.searchBar,
                  {
                    borderWidth: 1.5,
                    backgroundColor: dark ? "#0d131a" : "white",
                    borderColor: dark ? "#eee" : "#4b9490",
                    height: 40,
                    width: 170,
                  },
                ]}
              >
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: "#ccc",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "white",
                      alignSelf: "center",
                      position: "absolute",
                    }}
                  >
                    {chats.length > 0 && chats[0].name?.charAt(0)}
                  </Text>
                </View>
                <TextInput
                  style={[styles.input, { color: dark ? "#eee" : "black" }]}
                  placeholder="Searh..."
                  placeholderTextColor="#888"
                  onChangeText={(txt) => searchChats(txt)}
                  value={query}
                  autoFocus={true}
		  onBlur={()=>{if(query.length <1)setSearching(false)}}
                />
                <Pressable
                  onPress={() => {
                    setQuery("");
                    refineChats([]);
                    setSearching(false);
                  }}
                >
		{query.length >0&&<Text
                    style={{
                      fontSize: 10,
                      padding: 4,
                      backgroundColor: "#eee",
                      borderRadius: 4,
                      elevation: 4,
                      marginRight: 100,
                    }}
                  >
                    ❌
                  </Text>}
                </Pressable>
              </View>
            </View>
          )}
          {!searching && !pressed &&  (
            <FontAwesome5
              onPress={() => setSearching(true)}
              name="search"
              size={20}
              color={dark ? "#eee" : "#0d131a"}
            />
          )}
	  {pressed&&<Pressable 
		  onPress={()=>copyMarked()}
		  onLayout={(e)=>{const {width,height}=e.nativeEvent.layout;const rippleRadii = Math.max(width,height) }}
		  android_ripple={{color:"#0d131a",radius:rippleRadii*0.7,
		  }}
		  style={{height:30,width:30,borderRadius:15,
                  backgroundColor:dark?"#0d131a":"#eee",alignItems:'center',justifyContent:"center"}}/>}
          {pressed && (
		  <View style={{}}>
		  <View style={{height:15,width:15,borderRadius:7.5,
		  backgroundColor:"red",alignItems:'center',justifyContent:"center"}}><Animated.Text style={[{color:"#eee",fontSize:10},scaleAnim]}>{marked.length}</Animated.Text></View>
            <AntDesign
              onPress={() => deleteChats()}
              name="delete"
              size={25}
              color={dark ? "#eee" : "#0d131a"}
            /></View>
          )}
        </View>

        {notice && (
          <Animated.Text
            style={[
              styles.notice,
              {
                paddingHorizontal: 18,
                zIndex: 100,
                paddingVertical: 10,
                backgroundColor: noticeColor,
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
            styles.listBox1,
            {
              backgroundColor: dark ? "#0d131a" : "white",
              padding: 15,
              paddingBottom: ads ? 100 : 20,
              paddingTop: 20,
            },
          ]}
        >
          <ScrollView
            ref={listRef}
            showsVerticalScrollIndicator={false}
            overScrollMode={Platform.OS === "android" ? "always" : undefined}
          >
            {refinedChats.length > 0
              ? refinedChats.map((item, index) => {
		      const handleCopy = async () => {                                        await Clipboard.setString(item.msg);                                  setNotice("Chat copied!");                                            setNoticeColor("rgba(75,148,144,0.6)");                               noticeMover();                                                      };
                  const isBox = index === selected;
                  const handleMarked = () => {
                    if (marked.includes(item)) {
                      const newMarked = marked.filter((i) => i !== item);
                      setMarked(newMarked);
                      if (newMarked.length === 0) {
                        setPressed(false);
                      }
                      return;
                    }

                    setMarked([...marked, item]);
                    setPressed(true);
                  };

                  return (
                    <Pressable
                      key={index}
		      android_ripple={{                         
			      borderless: false,                         
			      color: dark ? "white" : item.uri ? "white" : "white",                       }}
                      onLongPress={() => {
                        Vibration.vibrate(100);
                        setPressed(true);
                        setMarked([...marked, item]);
                      }}
                      onPress={() => {
                        if (selected == index) {
                          setSelected(null);
                        }
                        if (pressed) {
                          handleMarked();
                        }
                        setSelected(index);
                      }}
                      style={[
                        styles.chatBox,
                        {
                          marginTop: index == 0 ? 50 : 0,
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
                          alignItems: item.uri ? "flex-end" : "flex-start",
                          backgroundColor: item.mine
                            ? marked.includes(item)
                              ? "#00d4d4"
                              : dark
                                ? "#484c4f"
                                : item.uri
                                  ? "black"
                                  : isBox
                                    ? "rgba(75,148,144,0.4)"
                                    : "#edf3f7"
                            : marked.includes(item)
                              ? "#4b9490"
                              : dark
                                ? "#292e33"
                                : isBox
                                  ? "rgba(75,148,144,0.4)"
                                  : "#d3e3ee",
                        },
                      ]}
                    ><View>
                      {isBox && !pressed && (
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
                      )}
                      <Text
                        style={[
                          styles.msg,
                          {
                            margin: 2.5,
                            fontSize: 16,
                            color: dark ? "#eee" : "rgba(0,0,0,0.8)",
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
			  onLayout={e=>{const {w,h}=e.nativeEvent.layout}}
                            source={{ uri: item.uri }}
                            style={{
                              alignSelf: "center",
                            }}
                          />
                          {loading && index == chats.length - 1 && (
                            <ActivityIndicator
                              size={25}
                              style={{
                                zIndex: 40,
                                top: 20,
                                right: 20,
                                backgroundColor: "rgba(242,255,243,0.6)",
                                padding: 5,
                                borderRadius: 10,
                                position: "absolute",
                                alignSelf: "center",
                              }}
                            />
                          )}
                        </View>
                      )}</View>
                    </Pressable>
                  );
                })
              : chats.map((item, index) => {
                  const handleCopy = async () => {
                    await Clipboard.setString(item.msg);
                    setNotice("Chat copied!");
		    setNoticeColor("rgba(75,148,144,0.6)");
		    noticeMover();
                  };

                  const isBox = index === selected;
                  const handleMarked = () => {
                    if (marked.includes(item)) {
                      const newMarked = marked.filter((i) => i !== item);
                      setMarked(newMarked);
                      if (newMarked.length === 0) {
                        setPressed(false);
                      }
                      return;
                    }

                    setMarked([...marked, item]);
                    setPressed(true);
                  };
                  return (
                    <Pressable
		    onLayout={(e)=>{
		    const {width,height}=e.nativeEvent.layout;
		    rippleRadii.current[index]=Math.max(width,height);}}
		    android_ripple={{                                                                               borderless: false,                                                                        radius:rippleRadii.current[index] *0.5,                                                                          
			    color: dark ? "white" : item.uri ? "white" : "white",                       }}
                      key={index}
                      onLongPress={() => {
                        Vibration.vibrate(100);
                        setPressed(true);
                        setMarked([...marked, item]);
                      }}
                      onPress={() => {
                        if (pressed) {
                          handleMarked();
                        }
			if (isBox) {
                          setSelected(null);
			  return;
                        }
                        setSelected(index);
                      }}
                      style={[
                        styles.chatBox,
                        {
                          marginTop: index == 0 ? 50 : 0,
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
                            ? marked.includes(item)
                              ? "#00d4d4"
                              : dark
                                ? "#484c4f"
                                : item.uri
                                  ? "black"
                                  : isBox
                                    ? "rgba(75,148,144,0.4)"
                                    : "#edf3f7"
                            : marked.includes(item)
                              ? "#4b9490"
                              : dark
                                ? "#292e33"
                                : isBox
                                  ? "rgba(75,148,144,0.4)"
                                  : "#d3e3ee",
                        },
                      ]}
                    ><View>
                      {isBox && !pressed && (
                        <Pressable
                          onPress={() => {
                            handleCopy();
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
                      )}

                      <Text
                        style={[
                          styles.msg,
                          {
                            margin: 2.5,
                            fontSize: 16,
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
			      fontSize:10
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
                              size={25}
                              style={{
                                zIndex: 40,
                                top: 20,
                                right: 20,
                                backgroundColor: "rgba(242,255,243,0.6)",
                                padding: 5,
                                borderRadius: 10,
                                position: "absolute",
                                alignSelf: "center",
                              }}
                            />
                          )}
                        </View>
                      )}</View>
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
            backgroundColor: dark ? "#0d131a" : "white",
            flexDirection: "row",
            zIndex: 27,
          }}
        >
          {typing && (
            <FontAwesome5 
	    name="images"
	    color={"#0d131a"}
	    size={25}
              onPress={() => pickImage()}
              style={{
		padding:6,
		height:40,
		width:40,
		borderRadius: 20,
                backgroundColor: "#eee",
              }}
            />
          )}
          <TextInput
            value={typed}
            autoFocus={false}
            style={{
              width: typing ? width * 0.65 : width * 0.7,
              height: typed.length > 0 ? 80 : 50,
              borderRadius: typed.length > 0 ? 15 : 25,
              borderWidth: typing ? 1 : 0,
              textAlignVertical: typed.length > 0 ? "top" : "center",
              paddingLeft: 10,
              paddingBottom: 10,
              paddingRight: 10,
              paddingTop: 10,
              textAlign: "top",
              backgroundColor: dark ? "#0d131a" : "white",
              borderWidth: typed.length > 0 ? 1.5 : 0.5,
              borderColor: "#4b9490",
              color: dark ? "white" : "rgba(0,0,0,0.8)",
            }}
            multiline={true}
            onFocus={() => {
              setTyping(true);
            }}
            onBlur={() => {
              setTyping(false);
            }}
            onChangeText={(e) => {
              setTyped(e);
            }}
            placeholder="Reply customer ..."
            placeholderTextColor={"#4b9490"}
          />
	  <Pressable
            android_ripple={{ color: "white", radius: 20, overflow: "hidden" }}
            onPress={() => {
              sendReply();
            }}
            style={{
              height: typing ? 40 : 50,
              width: typing ? 40 : 50,
              backgroundColor: dark ? "#eee" : "#0d131a",
              borderRadius: typing ? 20 : 25,
              borderWidth: 0,
              borderColor: "#00d4d4",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
	  {typed.length>0?<Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: dark ? "#00d4d4" : "#00d4d4",
              }}
            >
              Send
            </Text>:<Image source={require("./assets/iconBW.png")}
	    style={{resizeMode:"contain",height:"95%",width:"95%"}}/>}
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

  wrapper: { paddingHorizontal: 2 },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 30,
    paddingHorizontal: 8,
    height: 50,
    width: 160,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 5,
    backgroundColor: "black",
  },
  input: { width: 100, fontSize: 14, color: "black" },

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

  typedBox: {
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
