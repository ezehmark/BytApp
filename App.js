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
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
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
import Drop from "./drop.tsx";





export default function App() {

	const[darkTheme,setDarkTheme]=useState(false);
	const [balance, setBalance]=useState(1500000);


const Stack = createStackNavigator();
	const handleNav = async()=>{
await NavigationBar.setBackgroundColorAsync(darkTheme?"#022d36":"white");               await NavigationBar.setButtonStyleAsync(darkTheme?"light":"dark")}
                                                                      
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
      dark:"https://i.postimg.cc/Hsdvt26P/Picsart-25-05-09-09-28-17-219.png",
light:"https://i.postimg.cc/Y97CSZxx/Picsart-25-05-09-09-25-29-920.png",
active:"https://i.postimg.cc/3NYMmHyt/Picsart-25-05-09-09-30-35-168.png",
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
active:"https://i.postimg.cc/XvqcCg5Q/Picsart-25-05-10-06-47-10-520.png",
light:"https://i.postimg.cc/jd9sTxX2/Picsart-25-05-10-06-50-39-806.png"},

    {
      name: "Profile",
      route: "profiles",
      id: 4,
      uri: "https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png",
    },

  ];


  return (
    <>
	  <StatusBar barStyle={darkTheme?"light-content":"dark-content"} 
	  backgroundColor={darkTheme?"black":"white"}/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false,gestureEnabled:false}}
        >
          <Stack.Screen name="home">
            {(props) => (
              <Home
                {...props}
		darkTheme={darkTheme}
		    balance={balance}
		    setBalance={setBalance}
                toggleMenu={toggleMenu}
                toggleMsg={toggleMsg}
                setNav={setNav}
              />
            )}
          </Stack.Screen>

	  <Stack.Screen name="drop">
	  {(props)=><Drop {...props}/>}
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
              <Fund {...props} darkTheme={darkTheme} balance={balance}
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

      {menuOpen && <Menu  isOpen={menuOpen} nav={nav}darkTheme={darkTheme}toggleMenu={toggleMenu} />}
      {openMsg && <Messages isMsg={openMsg} toggleMsg={toggleMsg} />}

      <View style={styles.bottomTab}>
        <FlatList
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isTab = pressedTab == item.id;
		  let uri = item.light;
		  if(darkTheme){uri = item.dark;}
		  else if(isTab){uri = item.active;}
		  

		
            return (
              <TouchableOpacity
                style={[styles.tabArea,{backgroundColor:darkTheme?"#022d36":"white"}]}
                onPress={() => {
                  setPressedTab(item.id);
                  nav?.navigate(item.route);
                }}
              >
                  <Image
                    style={styles.tabImage}
                    source={{
                      uri
                    }}
                  />
                  <Text style={[styles.tabText],{color:darkTheme?"#ccc":"black"}}>{item.name}</Text>
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
    bottom: -2,
    flexDirection: "row",
    height: 60,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D3DEE8",
backgroundColor:"transparent",
    borderTopWidth: 0,
    borderColor: "#ddd",
    paddingBottom: 0,
  },
  tabArea: {
    height: "100%",
position:"relative",
    padding: 4,
	  gap:0,
	  zIndex:55,
	  alignItems:"center",
	  justifyContent:"space-around",
	  flexDirection:"column",
	  backgroundColor:"#feb819",
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
