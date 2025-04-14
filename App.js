import React, { useEffect,useState } from "react";
import * as NavigationBar from "expo-navigation-bar";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
StatusBar,
  Text,
  Image,
Dimensions
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";

import Home from "./homes";
import Menu from "./menu";
import Fund from "./fund.tsx";
import Recents from "./recents.tsx";
import Messages from "./messages.tsx";
import Profile from "./profiles.tsx";
import BuyGiftCard1 from "./buygiftcard1";
import SellGiftCards from "./sellgiftcards";
import GiftCardsList from "./giftcardslist.tsx";
import AmazonCards from "./amazoncards.tsx";
import AppleCards from "./applecards.tsx";
import BuyAirtime from "./buyairtime.tsx";
import BuyData from "./buydata.tsx";
import TvSub from "./tvsubs.tsx";
import Electricity from "./electricity.tsx";





export default function App() {

	const[darkTheme,setDarkTheme]=useState(false);


const Stack = createStackNavigator();
	const handleNav = async()=>{
await NavigationBar.setBackgroundColorAsync("#f5b857");               await NavigationBar.setButtonStyleAsync(darkTheme?"light":"dark")}
                                                                      useEffect(()=>{handleNav()},[]);


  const [nav, setNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [pressedTab, setPressedTab] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleMsg = () => setOpenMsg((msg) => !msg);


  const tabs = [
    {
      name: "Home",
      route: "home",
      id: 1,
      uri: "https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png",
    },
    {
      name: "Fund",
      route: "fund",
      id: 2,
      uri: "https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png",
    },
    {
      name: "Recents",
      route: "recents",
      id: 3,
      uri: "https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png",
    },
    {
      name: "Profile",
      route: "profiles",
      id: 4,
      uri: "https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png",
    },
  ];

  return (
    <>
	  <StatusBar barStyle={"dark-content"} backgroundColor={"#f5b857"}/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home">
            {(props) => (
              <Home
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
                setNav={setNav}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="tvsub">
            {(props) => (
              <TvSub {...props} toggleMenu={toggleMenu} toggleMsg={toggleMsg} />
            )}
          </Stack.Screen>
          <Stack.Screen name="electricity">
            {(props) => (
              <Electricity
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="recents">
            {(props) => (
              <Recents
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="buygiftcard1">
            {(props) => (
              <BuyGiftCard1
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="sellgiftcards">
            {(props) => (
              <SellGiftCards
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="fund">
            {(props) => (
              <Fund {...props} darkTheme={darkTheme}
		    toggleMenu={toggleMenu} toggleMsg={toggleMsg} />
            )}
          </Stack.Screen>
          <Stack.Screen name="buyairtime">
            {(props) => (
              <BuyAirtime
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="buydata">
            {(props) => (
              <BuyData
                {...props}
		darkTheme={darkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="profiles">
            {(props) => (
              <Profile
                {...props}
		darkTheme={darkTheme}
		setDarkTheme={setDarkTheme}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

      {menuOpen && <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />}
      {openMsg && <Messages isMsg={openMsg} toggleMsg={toggleMsg} />}

      <View style={styles.bottomTab}>
        <FlatList
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isTab = pressedTab == item.id;
            return (
              <TouchableOpacity
                style={styles.tabArea}
                onPress={() => {
                  setPressedTab(item.id);
                  nav?.navigate(item.route);
                }}
              >
                  <Image
                    style={styles.tabImage}
                    source={{
                      uri: item.uri,
                    }}
                  />
                  <Text style={styles.tabText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  bottomTab: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    height: 40,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D3DEE8",
    zIndex: 3,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    paddingBottom: 5,
  },
  tabArea: {
    height: 60,
    padding: 4,
	  alignItems:"center",
	  justifyContent:"space-around",
	  flexDirection:"column",
width:screenWidth/4,
  },
  tab: {
    height:"100%",
    width: "100%",
    borderRadius: 15,
  },
  tabImage: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  homeImage: {
    height: 35,
    width: 45,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "contain",
  },
  fundImage: {
    height: 31,
    width: 50,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "cover",
  },
  tabText: {
    alignSelf: "center",
    color: "#1C445C",
    marginTop: 5,
    alignItems: "center",
  },
});
