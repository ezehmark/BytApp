import {useState,useEffect,useRef} from "react";
import {StyleSheet,FlatList,StatusBar,View,Text,Image,TouchableOpacity,Dimensions,TextInput} from "react-native";
import Animated,{useSharedValue,useAnimatedStyle,withTiming,
        withSequence} from "react-native-reanimated";
import { BallIndicator }from "react-native-indicators";
import  Pusher from "pusher-js";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation}  from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import * as NavigationBar from "expo-navigation-bar";




export default function ChatArea({updatedChats,date,myDate,myStore,savedChats}){

const [chatList,setChatList]=useState(updatedChats);

const [replying,setReplying]=useState(false);


const navigation = useNavigation();

const handleNavBar = async()=>{                                       
	await NavigationBar.setBackgroundColorAsync("white");              
	await NavigationBar.setButtonStyleAsync("light")}



useEffect(()=>{                                                       
	handleNavBar();},[]);

const listRef = useRef(null);

useEffect(()=>{
if(listRef.current){
listRef.current.scrollToEnd({animated:true})}
},[updatedChats,savedChats]);

const [reply,setReply]=useState("");

function sendReply(){
if (reply.trim().length ===0){
return;}
const newReply = {msg:reply,mine:true};
setChatList((prev)=>[...prev,newReply]);
console.log(chatList);
setReply("");}
useEffect(()=>{
if(chatList.length>0){
myStore.set("chatList",JSON.stringify(chatList))}},[chatList]);

const [savedList,setSavedList]= useState(null);

useEffect(()=>{console.log(updatedChats??"No msgs");
	  const rawList = myStore.getString("chatList");
if(rawList){
	setSavedList(JSON.parse(rawList))}
},[chatList]);

return(<>

<StatusBar backgroundColor="white" barStyle="dark-content"/>
<View style={styles.outer}>


<View style = {styles.user}>
<Text style={{color:"#213547",
fontSize:"bold",fontSize:16,
fontWeight:"bold"}}>{updatedChats.length >0?updatedChats[0].name: savedChats[0]?.name}</Text>

<View style={{height:30,width:30,borderRadius:15,
backgroundColor:"white",alignItems:"center",
justifyContent:"center"}}><Text style={{fontSize:14,fontWeigh20t:"bold",color:"white",alignSelf:"center",position:"absolute"}}>
{updatedChats.length>0?updatedChats[0]?.name.charAt(0):savedChats[0]?.name.charAt(0)}</Text></View>
</View>

<View style={styles.listBox1}>
<FlatList
ref={listRef}
extraData={chatList.length>0?chatList:savedList}
data={chatList.length>0?chatList:savedList}
keyExtractor={(item,index)=>index.toString()}
renderItem={({item})=>{
return(<>
<View style={[styles.chatBox,{
	borderTopRightRadius:item.mine &&0,borderTopLeftRadius:item.mine&&15,borderBottomLeftRadius:item.mine&&15,borderTopLeftRadius:item.mine&&15,alignSelf:item.mine && "flex-end",backgroundColor:item.mine && "green"}]}>
<Text style={styles.msg}>{item.msg}</Text>
<Text style={styles.date}>{item.date}</Text>

</View>

      </>)}}
/>

</View>

</View>
<View style={{justifyContent:"space-between",padding:10,width:"100%",alignItems:"center",position:"absolute",bottom:80,flexDirection:"row"}}>
<TextInput 
value={reply}
style={{width:"75%",height:60,borderRadius:15,borderWidth:replying?1:0,textAlignVertical:replying?"top":"center",paddingLeft:10,paddingBottom:10,
	paddingRight:10,paddingTop:10,
	textAlign:"top",backgroundColor:replying?"white":"#ccc",elevation:2}}
multiline={true}
onFocus={()=>{setReplying(true)}}
onBlur={()=>{setReplying(false)}}
onChangeText={(e)=>{setReply(e)}}
placeholder="Reply customer"/>
<TouchableOpacity
onPress={()=>{sendReply()}}
style={{height:50,width:50,backgroundColor:"black",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:12,color:"white"}}>Send</Text>
</TouchableOpacity>
</View>
<BottomTab/>

       </>)
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
outer:{
backgroundColor:"white",height:"100%",width:"100%",},

user:{
height:40,alignItems:"center",alignSelf:"center",
justifyContent:"space-between",gap:10,flexDirection:"row",borderRadius:10,backgroundColor:"transparent",position:"absolute",top:50},
name:{color:"white"},

listBox1:{position:"absolute",alignItems:"left",
	justifyContent:"flex-start",top:100,height:"70%",width:"100%",backgroundColor:"",padding:10,paddingBottom:60},

chatBox:{padding:10,borderTopRightRadius:15,borderBottomRightRadius:15,borderBottomLeftRadius:15,marginBottom:10,width:"80%",backgroundColor:"#e0e2d7",alignItems:"center",justifyContent:"space-between",flexDirection:"column"},

replyBox:{padding:10,marginBottom:10,width:"70%",borderRadius:15,backgroundColor:"black",alignItems:"center",marginRight:10,justifyContent:"space-between",flexDirection:"column"},

msg:{color:"black",fontSize:15,marginBottom:20},
date:{fontSize:10,position:"absolute",right:10,bottom:10}




})
