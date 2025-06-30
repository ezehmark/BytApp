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
import useStore from "./zustand";
//const myStore = new MMKV();

export default function App() {
  const Stack = createStackNavigator();

  //Initialize zustand variables and functions
  const chats = useStore((state) => state.chats);

const setChats = useStore((state) => state.setChats);
const socket = useStore(s=>s.socket);
const dark = useStore(st=>st.dark);






  useEffect(() => {
    socket.on("connection", () =>
      console.log("Front end is connected to backend"),
    );
    socket.on("complaints", (info) => {
      try {
        const mdata = Array.isArray(info) ? info : [info];
        console.log(info);

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


  const [isConnect, setIsConnect] = useState(false);


  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{ cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,gestureEnabled:false,headerShown: false }}
        >
          <Stack.Screen name="home">
            {(props) => (
              <HomeComp
                {...props}
                dark={dark}
              />
            )}
          </Stack.Screen>


          <Stack.Screen name="welcome">
            {(props) => <Welcome {...props} />}
          </Stack.Screen>

          <Stack.Screen name="chatArea"
  >
            {(props) => (
              <ChatArea
                {...props}
                dark={dark}
              />
            )}
          </Stack.Screen>
	  <Stack.Screen name="adminPanel"                                             
		  >                                                                             
		  {(props) => (
              <AdminPanel                                                             
	      {...props}                                                          
	      />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

  );
}
