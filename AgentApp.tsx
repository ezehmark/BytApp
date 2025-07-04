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
import {requestUserPermission} from "./firebasenotifymanager.tsx";


//const myStore = new MMKV();

export default function App() {
  const Stack = createStackNavigator();

useEffect(() => {
	requestUserPermission();

  SplashScreen.hideAsync(); // hides splash when JS is ready
}, []);

//handling foregroundNotifications

useEffect(()=>{
registerPushNotification();

const subscription = Notifications.addNotificationReceivedListener((notification)=>console.log("Notification:", notification));

return ()=> sunscription.remove();

},[]);

  //Initialize zustand variables and functions
  const chats = useStore((state) => state.chats);

const setChats = useStore((state) => state.setChats);
const socket = useStore(s=>s.socket);
const dark = useStore(st=>st.dark);



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
	  <View style={{flex:1}}>
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
