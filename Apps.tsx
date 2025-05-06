import "react-native-reanimated";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import {
  StatusBar,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import MyApp from "./comp.tsx";
import ImgComp from "./Image.tsx";
import Chat from "./chat.tsx";
import NetInfo from "@react-native-community/netinfo";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

export default function App() {
  const [myEmail, setMyEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const notifyBoxTop = useSharedValue(-40);
  const notifyBoxOpacity = useSharedValue(1);
  const notifyBoxAnim = useAnimatedStyle(() => {
    return { top: notifyBoxTop.value, opacity: notifyBoxOpacity.value };
  });

  const[dark,setDark]=useState(true);
  const toggleDark = ()=>{setDark((prev)=>!prev)}

  const[connected, setConnected] = useState(false);


  const handleConnection = () => {                                  NetInfo.addEventListener((state) => {                             setConnected(state.isConnected);                              });                                                           };                                                              useEffect(() => {                                                 handleConnection();                                             setInterval(() => {
      handleConnection();                                           }, 1000);                                                     }, []);

  const [notifyMsg, setNotifyMsg] = useState("");
  const [backendActive, setBackendActive] = useState(true);
  const [loadingTxt, setLoadingTxt] = useState("");
  const dropDownChanger = () => {
    setBackendActive(true);
    notifyBoxTop.value = withSequence(
      withTiming(50, { duration: 500 }),
      withTiming(50, { duration: 1500 }),
      withTiming(-40, { duration: 700 }),
    );
    notifyBoxOpacity.value = withSequence(
      withTiming(1, { duration: 500 }),
      withTiming(1, { duration: 1500 }),
      withTiming(0, { duration: 600 }),
    );
  };

  const handleNav = async () => {
    await NavigationBar.setBackgroundColorAsync("#2e4a5f");
    await NavigationBar.setButtonStyleAsync("light");
  };

  useEffect(() => {
    handleNav();
  }, []);

  const Stack = createStackNavigator();
  const screenWidth = Dimensions.get("window").width;
  const [nav, setNav] = useState(null);
  const [tab, setTab] = useState([]);
  const tabs = [
    { id: 1, name: "Home", route: "MyApp" },
    { id: 2, name: "Profile", route: "ImgComp" },
    { id: 3, name: "Chats", route: "chat" },
  ];

  const [clickedTab, setClickedTab] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View
          style={{
            zIndex: 150,
            alignSelf: "center",
            top: "40%",
            position:"absolute",
	    height:100,
	    width:120,
	    alignSelf:"center",
	    alignItems: "center",
            backgroundColor: "rgba(46,74,95,1)",
            justifyContent: "center",
            position: "absolute",
	    borderRadius:15,
	    overflow:"hidden",
	    elevation:7,
	    shadowColor:"black",
          }}
        >
          <BlurView
            style={{
              zIndex: 155,
              padding: 15,
	      height:"100%",
	      width:"100%",
              justifyContent: "space-between",
              gap: 5,
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              alignSelf: "center",
              alignItems: "center",
            }}
	    intensity={60}
          >
            <ActivityIndicator
              size={40}
              color={"#feb819"}
            />
            <Text style={{ fontSize:12,color: "#feb819", whiteSpace: "noWrap" }}>
              {loadingTxt}
            </Text>
          </BlurView>
        </View>
      )}
      <Animated.View
        style={[
          {
            width: "80%",
            position: "absolute",
            borderRadius: 10,
            top: -40,
            backgroundColor: "#feb819",
            opacity: 0,
            alignItems: "center",
            zIndex: 160,
            paddingVertical: 5,
            paddingHorizontal: 5,
            height: 40,
            alignSelf: "center",
            alignItems: "center",
            justfyContent: "center",
          },
          backendActive && notifyBoxAnim,
        ]}
      >
        <Text
          style={{ position: "absolute", left: 2, fontSize: 16, fill: "blue" }}
        >
          📢
        </Text>
        <Text
          style={{
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            left: 40,
            textAlign: "center",
            color: "black",
            fontSize: 14,
            whiteSpace: "wrap",
          }}
        >
          {notifyMsg}
        </Text>
      </Animated.View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MyApp" 
	screenOptions={{gestureEnabled:true,gestureDirection:"vertical",cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}>
          <Stack.Screen
            name="MyApp"
            options={{ headerShown: false, unmountOnBlur: false }}
          >
            {(props) => (
              <MyApp
                {...props}
		dark={dark}
		setDark={setDark}
		toggleDark={toggleDark}
		connected={connected}
		setConnected={setConnected}
                name={name}
                loadingTxt={loadingTxt}
                setLoadingTxt={setLoadingTxt}
                setName={setName}
                myEmail={myEmail}
                isEmail={isEmail}
                loading={loading}
                setNav={setNav}
                setLoading={setLoading}
                dropDownChanger={dropDownChanger}
                notifyMsg={notifyMsg}
                setNotifyMsg={setNotifyMsg}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="ImgComp"
            options={{ headerShown: false, unmountOnBlur: false }}
          >
            {(props) => (
              <ImgComp

                {...props}
		dark={dark}
                loading={loading}
                setNav={setNav}
                name={name}
                loadingTxt={loadingTxt}
                setLoadingTxt={setLoadingTxt}
                setName={setName}
                myEmail={myEmail}
                isEmail={isEmail}
                dropDownChanger={dropDownChanger}
                notifyMsg={notifyMsg}
                setNotifyMsg={setNotifyMsg}
                setLoading={setLoading}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name={"chat"} options={{ headerShown: false }}>
            {(props) => (
              <Chat
                {...props}
		dark={dark}
		connected={connected}
		setConnected={setConnected}
                loading={loading}
                loadingTxt={loadingTxt}
                dropDownChanger={dropDownChanger}
                notifyMsg={notifyMsg}
                setNotifyMsg={setNotifyMsg}
                setLoadingTxt={setLoadingTxt}
                setLoading={setLoading}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.tabBar}>
        <FlatList
          data={tabs}
          horizontal={true}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => {
            const isTab = clickedTab === item.id;

            return (
              <TouchableOpacity
                onPress={() => {
                  setClickedTab(item.id);
                  nav?.navigate(item.route);
                  setTab((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id],
                  );
                }}
                style={[
                  styles.home,
                  {
                    width: isTab? screenWidth / 3.2 : screenWidth/3.3,
                    borderRightWidth: 0,
                    borderColor: isTab ? "#2e4a5f" : "#feb819",
                    backgroundColor: isTab ? "#feb819" : "rgba(255,255,255,0.2)",
                    borderRadius:20,
		    borderWidth: isTab?2:0,
		    margin:2
                  },
                ]}
              >
                <Text
                  style={{
                    borderRadius: 25,
                    color: isTab ? "black" : "white",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height:45,
    alignItems:"center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#ccc",
    borderWidth:0,
    borderBottomWidth:0,
    justifyContent:"center",
    overflow: "hidden",
    elevation:20,
    shadowColor:"white",
    backgroundColor:"#2e4a5f",
    paddingLeft:"2.3%",
    paddingTop:1,

    flexDirection: "row",
  },
  home: {
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
