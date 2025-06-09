import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  onFocus,
  onBlur,
  TextInput,
  Image,
  ScrollView,
  Pressable
} from "react-native";
import {MMKV} from "react-native-mmkv";
import Animated,{Easing,useSharedValue,withTiming,withSequence,withRepeat,useAnimatedStyle} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import axios from "axios";
import Pusher from "pusher-js";

const Chat = ({
  loading,
  connected,
  setLoading,
  notifyMsg,
  dark,
  loadingTxt,
  setLoadingTxt,
  setNotifyMsg,
  dropDownChanger,
}) => {
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState(0);
  const [inChats, setInChats] = useState([]);
  const [chats, setChats] = useState([]);
  const [finalMsg, setFinalMsg] = useState("");
  const updateMsg = (text) => {
    setMsg(text);
  };


  const myPusher = new Pusher("9f6c0b8345c2297e09e6",{cluster: "eu"});
  const asyncStorage = new MMKV();


  const saveChats = (chats:any[])=>{
        try{
	asyncStorage.set("chats",JSON.stringify(chats))}
catch(error){console.error("error saving chats", error)}}

  useEffect(()=>{
  const channel = myPusher.subscribe("chat-channel");
  channel.bind("chatance",(data)=>{
  setChats((prev)=>[...prev,data])});
  return()=>{channel.unbind_all();
  channel.unsubscribe();
  channel.disconnect()}
  },[]);

useEffect(()=>{saveChats(chats)},[chats]);


const retrieveChats = ()=>{
try{
const savedChats = asyncStorage.getString("chats");
if(savedChats){
	const parsedChats = JSON.parse(savedChats);
	if(JSON.stringify(parsedChats)!==JSON.stringify(chats)){
	setChats(parsedChats)}
	console.log(parsedChats);
}
}
catch(error){console.error("failed to retrie chats")}
}

useEffect(()=>{
retrieveChats();},[]);





  const flatListRef = useRef(null);
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chats]);
  const [focused, setFocused] = useState(false);
  const [push, setPush] = useState("Send");


  const[logoAnim,setLogoAnim]=useState(false);
  const widthX = useSharedValue(1);
      const widthAnim = useAnimatedStyle(()=>{                        
	      return{borderWidth:widthX.value}});                                                                                             
	      const animateBorder = ()=>{                                     
		      widthX.value = withTiming(8,{duration:2000})}

  const sendToBackend = async () => {
    if (msg !== "") {
      setLogoAnim(true);


      await axios
        .post("https://mybackend-oftz.onrender.com/chats", { myChats: msg })
        .then((response) => {
          setNotifyMsg(response.data.msg);
        })
        .catch((err) => {
          console.error(err);
          setNotifyMsg(err.response.data.errMsg);
          dropDownChamger();
        })
        .finally(() => {
          setLogoAnim(false);
          setMsg("");
        });
    }
  };

  const rotateDeg = useSharedValue("0deg");

  const rotateAnim = useAnimatedStyle(()=>{
  return{transform:[{rotate:rotateDeg.value}]}});

  useEffect(()=>{
	  rotateDeg.value = withRepeat(
	  withTiming("360deg",{duration:1000,easing:Easing.linear}),-1,false)
  },[]);


  return (
    <React.Fragment>
        <View style={[styles.outer,{backgroundColor:dark?"#080917":"white"}]}>



	<View style={{height:40,borderRadius:10,overflow:"hidden",width:120,justifyContent:"center",backgroundColor:"transparent",position:"absolute",top:10,left:10}}>
	{logoAnim &&<Animated.View style={[{zIndex:10,position:"absolute",alignSelf:"center",height:"50%",width:"120%",backgroundColor:"#00f0a9"},logoAnim && rotateAnim]}>
	</Animated.View>}
          <Text
            style={{
              position: "absolute",
              color: dark?"#f0f8ff":"#2e4a5f",
              fontSize: 24,
              fontWeight: "bold",
	      height:"95%",
	      width:"96.5%",
	      textAlign:"center",
	      borderRadius:10,

	      backgroundColor:dark?"#080917":"white",
	      alignSelf:"center",
	      elevation:5,
	      shadowColor:"#feb819",
	      zIndex:15,
            }}
          >Chatance</Text>
	  </View>


          <View style={styles.pushArea}>
              <TextInput
                onChangeText={(text) => {
                  updateMsg(text);
                }}
                onFocus={() => {setFocused(true);animateBorder()}}
                onBlur={() => setFocused(false)}
                value={msg}
                multiline={true}
                returnKeyType="Enter"
                placeholder={"Chat here"}
                placeholderTextColor={dark?"rgba(254,184,25,0.8)":"rgba(0,0,0,0.5)"}
		style={[{
                  width: focused ? "80%" : "70%",
                  height: focused && msg.length >0 ? "140%":"100%" || focused && msg.length ==30&&"180%",
                  textAlign: "left",
                  color: dark?"#f0f8ff":"black",
		  zIndex:150,
		  justifyContent: "flex-start",
                  padding: 10,
		  textAlignVertical:msg.length>0?"top":"center",
                  outlineWidth: 0,
                  caretColor: "red",
		  borderRadius:15,
		  borderColor:"#00f0a9",
		  borderWidth:1,
		  backgroundColor:dark?"rgba(0,0,0,0.5)":"#e0e2d7"
		},focused && widthAnim]}
              />
	      <TouchableOpacity
              onPress={() => {
                sendToBackend();
              }}
              style={{
                height: 45,
                width: 45,
                borderRadius: 22.5,
                backgroundColor: "#feb819",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
	    { msg.length >0? 
		    <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black",
                }}
              >
                {push}
              </Text>:<Image source={{uri:"https://i.postimg.cc/xdYQVrtg/Picsart-25-04-16-12-47-48-955.png"}}style={{resizeMode:"contain",position:"absolute",height:"55%",width:"55%"}}/>}
            </TouchableOpacity>

          </View>

          <View style={[styles.listContainer,{backgroundColor:dark?"black":"#e0e2d7"}]}>
	  <View style={{height:8,width:8,elevation:2,borderRadius:4,backgroundColor:connected?"#00f0a9":"black",top:4,right:4,position:"absolute"}}/>
            <FlatList
              ref={flatListRef}
              showsVerticalScrollIndicator={true}
              horizontal={false}
              data={chats}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                const isWritten = index == num;
                    return(<><Pressable
		    style={styles.msgBox}><Text style={{color:"#feb819",textAlign:"left"}}>{item}</Text></Pressable>
                  </>
                );
              }}
            />
          </View>
        </View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  pushArea: {
    position: "absolute",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 5,
    height: 50,
    alignItems: "center",
    width: "100%",
    bottom: 50,
    zIndex: 100,
    padding: 5,
  },
  outer: {
    padding: 5,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    height: "78%",
    width: "60%",
    borderWidth:0,
    shadowRadius: 4,
    shadowColor: "white",
    borderRadius: 20,
    borderTopRightRadius:5,
    backgroundColor: "#a5a79b",
    position: "absolute",
    right: 0,
    elevation:4,
    top: 0,
    padding:10,
    paddingBottom:50,
    marginBottom:50,
    marginRight:5,
  },
  msgBox: {
    color: "#feb819",
    shadowColor: "black",
    shadowRadius: 2,
    elevation: 4,
    padding:12,
    borderRadius: 15,
    backgroundColor:"#2e4a5f",
    margin: 5,

  },
});

export default Chat;
