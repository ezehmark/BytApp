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
import { useState, useEffect, useRef } from "react";

import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import HomeComp from "./homecomp";
import ChatArea from "./chatArea.tsx";

import { MMKV } from "react-native-mmkv";
import io from "socket.io-client";
const myStore = new MMKV();

export default function App() {
  const Stack = createStackNavigator();

  const [chats, setChats] = useState([]);
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

        setChats((prev) => [...prev, ...mdata]);
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

  return (
    <>
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
                myStore={myStore}
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
                myStore={myStore}
                setNewestChats={setNewestChats}
                updatedChats={chats}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
