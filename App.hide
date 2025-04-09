import "react-native-reanimated";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
      {" "}
      {loading && (
        <View
          style={{
            zIndex: 150,
            alignSelf: "center",
            top: "40%",
            flexGrow: 1,
            alignItems: "center",
            backgroundColor: "rgba(46,74,95,0.0)",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <BlurView
            style={{
              zIndex: 155,
              padding: 15,
              borderRadius: 10,
              shadowColor: "rgba(0,0,0,0.3)",
              justifyContent: "space-between",
              gap: 5,
              flexDirection: "column",
              alignItems: "center",
              elevation: 5,
              position: "absolute",
              alignSelf: "center",
              shadowOffset: { height: 2, width: 1 },
              shadowRadius: 4,
              alignItems: "center",
            }}
          >
            <ActivityIndicator
              style={{
                shadowColor: "rgba(0,0,0,0.2)",
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 1,
                borderRadius: 20,
              }}
              size={40}
              color={"#feb819"}
            />
            <Text style={{ color: "#feb819", whiteSpace: "noWrap" }}>
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
      <StatusBar barStyle="light-content" backgroundColor="#2e4a5f" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MyApp">
          <Stack.Screen
            name="MyApp"
            options={{ headerShown: false, unmountOnBlur: false }}
          >
            {(props) => (
              <MyApp
                {...props}
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
      <BlurView style={styles.tabBar}>
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
                    width: screenWidth / 3,
                    borderRightWidth: 0,
                    borderColor: isTab ? "#ccc" : "transparent",
                    backgroundColor: isTab ? "white" : "transparent",
                    borderTopRightRadius: item.id == 1 && 0,
                    borderTopLeftRadius: item.id == 1 && 15,
                    borderWidth: 0,
                    borderColor: isTab ? "#ccc" : "transparent",
                  },
                ]}
              >
                <Text
                  style={{
                    borderRadius: 25,
                    color: isTab ? "#2e4a5f" : "white",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#ccc",
    overflow: "hidden",

    flexDirection: "row",
  },
  home: {
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
