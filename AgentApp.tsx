import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions,Image,
	TouchableOpacity } from 'react-native';
import Welcome from "./welcome";
import {useState,useEffect,useRef} from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {useNavigation,NavigationContainer} from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo"
import HomeComp from "./homecomp";
import ChatArea from "./chatArea.tsx";
import  Pusher from "pusher-js";

import {MMKV} from "react-native-mmkv";   
import ChatBubble from "./bubble.tsx";
import io from "socket.io-client";
const myStore = new MMKV();




export default function App() {
const Stack = createStackNavigator();

const [chats,setChats]=useState([]);
function getDateTime(){
	const date = new Date();
	const months = [
"January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const thisMonth = months[date.getMonth()];
const thisDay = date.getDate();
const thisHour = date.getHours();
  const thisMinute = date.getMinutes().toString().padStart(2,"0");
  const meridian = thisHour >=12?"pm":"am";                                                                                                      
  let hour = thisHour % 12;                                           
  hour = hour?hour:12;                                                                                                                        
  return`${thisDay} ${thisMonth}, ${hour}:${thisMinute} ${meridian}`
                                                                      }
const [date,setDate]=useState(null);



/*const myPusher = new Pusher("9f6c0b8345c2297e09e6",{cluster: "eu"});

const[msg,setMsg]=useState("");

const ws = useRef<WebSocket | null>(null);
//Websocket for CSAgent complaints
useEffect(()=>{
ws.current = new WebSocket("wss://mybackend-oftz.onrender.com");

ws.current.onmessage=(info)=>{
try{const mdata = JSON.parse(info.data);
console.log(info.data);
console.log(info);
console.error(info.data);
console.error(info);
const updatedChats = [...chats,...mdata];

setChats(updatedChats);

const dateNow = getDateTime();
setDate(dateNow);
//Storing it locally:
myStore.set("storedChats",JSON.stringify(updatedChats));
console.log(updatedChats);
const myDate = dateNow;
myStore.set("date",myDate);}
catch(error){console.error(error)}
}

ws.current.onerror=(error)=>{
console.log("please chaeck, something is erronous",error)}

return()=>ws.current?.close();

},[]);
*/


/*useEiffect(()=>{

console.log(msg??"No messages received")
const channel = myPusher.subscribe("CSAgent");
channel.bind("complaints",(data)=>{
console.log(data??"No user array found");
const updatedChats = [...chats,...data];
setChats(updatedChats);


const dateNow = getDateTime();
setDate(dateNow);
//Storing it locally:
myStore.set("storedChats",JSON.stringify(updatedChats));
console.log(chats);
const myDate = dateNow;
myStore.set("date",myDate);


});
return()=>{
myPusher.unsubscribe();
myPusher.unbind_all();                                                
myPusher.disconnect()}                                                
},[]);

*/

const socket = io("https://mybackend-oftz.onrender.com");

useEffect(()=>{                                                                         socket.on("connection",()=>console.log("Front end is connected to backend"));
                                                                                        socket.on("complaints",(info)=>{
try{const mdata = Array.isArray(info)?info:[info];                                                
	console.log(info);                                                                 console.log(info);
console.error(info);
const dateNow = getDateTime();
setDate(dateNow);                                                                       //Storing it locally:

myStore.set("date",dateNow);
const msgAndTime = mdata.map((item)=>({...item,date:dateNow}))
setChats(prev=>{
const updatedChats = [...prev,...msgAndTime];


myStore.set("storedChats",JSON.stringify(updatedChats));                                    console.log(updatedChats);


myStore.set("date",dateNow);
return updatedChats;
})     
}
catch(error){console.error(error)}
});
},[]);



//Retreiving the stored data

const[savedChats,setSavedChats]=useState([]);                                   
const[myDate,setMyDate]=useState("");
//Dark mode toggle
const[dark,setDark]=useState(false);

function toggleDark(){
setDark(dark=>!dark)}


useEffect(()=>{
const savedChat = JSON.parse(myStore.getString("storedChats") || "[]");
const mDate = myStore.getString("date");
setSavedChats(savedChat);
setMyDate(mDate)
},[]);


const[isConnect,setIsConnect]= useState(false);

  return (<>

	  <NavigationContainer>

	  <Stack.Navigator initialRouteName="welcome"
	  screenOptions={{headerShown:false}}>
	  <Stack.Screen name="home">
	  {(props)=><HomeComp {...props} 
		  myDate={myDate}
		  date={date} updatedChats={chats}
		  dark={dark}
		  savedChats={savedChats}/>}
	  </Stack.Screen>

	  <Stack.Screen name="bubble">
          {(props)=><ChatBubble {...props}                                     
		  myDate={myDate}
                  date={date} updatedChats={chats}                           
		  dark={dark}
                  savedChats={savedChats}/>}                         
		  </Stack.Screen>

	  <Stack.Screen name="welcome">                                           
	  {(props)=><Welcome {...props} />}                                                     
	  </Stack.Screen>

	  <Stack.Screen name="chatArea">
          {(props)=><ChatArea {...props} 
		  myDate={myDate} myStore={myStore}
		  date={date} date = {date} myDate={myDate} 
	updatedChats={chats} savedChats={savedChats}/>}
          </Stack.Screen>


	  </Stack.Navigator>
	  </NavigationContainer>


      <StatusBar backgroundColor="white" style="light"   />



	  </>
    
  );

}



