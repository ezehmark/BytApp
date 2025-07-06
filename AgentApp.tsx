import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  Dimensions,
  Image,
  TouchableOpacity,
  useColorScheme,
  Alert,
} from "react-native";
import Welcome from "./welcome";
import { useState, useEffect, useRef,useCallback } from "react";

import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import HomeComp from "./homecomp";
import ChatArea from "./chatArea.tsx";
import BottomTab from "./bottomTab.tsx";

import { MMKV } from "react-native-mmkv";
import io from "socket.io-client";
import AdminPanel from "./adminPanel.tsx";
import useStore from "./zustand";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import {requestUserPermission} from "./firebaseNotify.tsx";
import uuid from "react-native-uuid";

//const myStore = new MMKV();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);



  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const Stack = createStackNavigator();

useEffect(() => {
	const userId = uuid.v4();
	requestUserPermission(userId);

  SplashScreen.hideAsync(); // hides splash when JS is ready
}, []);

//handling foregroundNotifications


  //Initialize zustand variables and functions
  const chats = useStore((state) => state.chats);

const setChats = useStore((state) => state.setChats);
const socket = useStore(s=>s.socket);
const dark = useStore(st=>st.dark);

//Hiding splash screen after a simulated delay


  useEffect(() => {
    async function prepare() {
      // Simulate loading tasks
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAppIsReady(true);
    }

    prepare();
  }, []);



// AND set dark mode inside a component like:
const setDark = useStore(state=>state.setDark);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    console.log("Initial color scheme:", colorScheme);
    setDark(colorScheme === "dark");

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log("Appearance changed to:", colorScheme);
      setDark(colorScheme === "dark");
    });

    return () => subscription.remove();
  }, []);



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
	  <View onLayout={onLayoutRootView}
	  style={{flex:1}}>
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
      </View>

  );
}
