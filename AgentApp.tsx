import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Welcome from "./welcome";
import { useState, useEffect, useRef,useCallback } from "react";

import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import HomeComp from "./homecomp";
import ChatArea from "./chatArea.tsx";

import { MMKV } from "react-native-mmkv";
import io from "socket.io-client";
import AdminPanel from "./adminPanel.tsx";
import * as SplashScreen from "expo-splash-screen";
import useStore from "./zustand";
//const myStore = new MMKV();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createStackNavigator();

  //Initialize zustand variables and functions
  const chats = useStore((state) => state.chats);

const setChats = useStore((state) => state.setChats);

  const[appReady,setAppReady]=useState(false);

useEffect(()=>{
async function prepareApp(){
try {
await new Promise(res=>setTimeout(res,2000))}
catch(e){console.warn(e)}
finally{setAppReady(true)}}

prepareApp();
},[]);

const onLayoutRootView=useCallback(async()=>{
	if(appReady){await SplashScreen.hideAsync()}},[appReady]);
  const [newestChats, setNewestChats] = useState([]);
  function getDateTime() {
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const thisMonth = months[date.getMonth()];
    const thisDay = date.getDate();
    const thisHour = date.getHours();
    const thisMinute = date.getMinutes().toString().padStart(2, "0");
    const meridian = thisHour >= 12 ? "pm" : "am";
    let hour = thisHour % 12;
    hour = hour ? hour : 12;
    return `${thisDay} ${thisMonth}, ${hour}:${thisMinute} ${meridian}`;
  }
  const [date, setDate] = useState(null);


  const socket = io("https://mybackend-oftz.onrender.com");

  useEffect(() => {
    socket.on("connection", () =>
      console.log("Front end is connected to backend"),
    );
    socket.on("complaints", (info) => {
      try {
        const mdata = Array.isArray(info) ? info : [info];
        console.log(info);
        console.log(info);
        console.error(info);

        setChats(mdata);
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  //Retreiving the stored data

  const [savedChats, setSavedChats] = useState([]);
  const [myDate, setMyDate] = useState("");
  //Dark mode toggle
  const [dark, setDark] = useState(true);

  function toggleDark() {
    setDark((dark) => !dark);
  }

  const [isConnect, setIsConnect] = useState(false);

  if(!appReady)return;

  return (
    <View style={{flex:1}}
    onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{ cardStyleInterpolator:CardStyleInterpolators.forHorizontalAndroid,gestureEnabled:true,headerShown: false }}
        >
          <Stack.Screen name="home"
	  options={{
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalAndroid
  }}>
            {(props) => (
              <HomeComp
                {...props}
                myDate={myDate}
                date={date}
                updatedChats={chats}
                dark={dark}
                newestChats={newestChats}
                setNewestChats={setNewestChats}
                savedChats={savedChats}
              />
            )}
          </Stack.Screen>


          <Stack.Screen name="welcome">
            {(props) => <Welcome {...props} />}
          </Stack.Screen>

          <Stack.Screen name="chatArea"
	  options={{
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalAndroid,
  }}>
            {(props) => (
              <ChatArea
                {...props}
                dark={dark}
                setNewestChats={setNewestChats}
                updatedChats={chats}
              />
            )}
          </Stack.Screen>
	  <Stack.Screen name="adminPanel"                                             
	  options={{                                                
		  cardStyleInterpolator: CardStyleInterpolators.forHorizontalAndroid  }}>                                                                             
		  {(props) => (
              <AdminPanel                                                             
	      {...props}                                                          
	      />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}
