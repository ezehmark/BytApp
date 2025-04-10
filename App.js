import React, { useState } from "react";
import {FlatList} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
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


export default function App(){

	const[nav,setNav]=useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const [openMsg, setOpenMsg] = useState(false);
  const toggleMsg = () => setOpenMsg((msg) => !msg);

const tabs = [{name:"Home",route:"home",id:1,uri:"https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png"},

	{name:"Fund",route:"fund",id:1,uri:"https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png"},

	{name:"Recents",route:"recents",id:1,uri:"https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png"},

	{name:"Profile",route:"profile",id:1,uri:"https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png"}




]

  return (
    <>

<NavigationContainer>                                             <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
	  options={{headerShown:false}}>
	  {(props)=><Home {...props} toggleMenu={toggleMenu} toggleMsg={toggleMsg}/>}

	  </Stack.Screen>

	  <Stack.Screen                                                     name="tvsub"
          options={{headerShown:false}}>                                  {(props)=><TvSub {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>

	  <Stack.Screen                                                     name="electricity"
          options={{headerShown:false}}>                                  {(props)=><Electricity {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>

	  <Stack.Screen                                                     name="recents"
          options={{headerShown:false}}>                                  {(props)=><Recents {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>


	  <Stack.Screen                                                     name="buygiftcard1"
          options={{headerShown:false}}>                                  {(props)=><BuyGiftCard1 {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>

	  <Stack.Screen                                                     name="sellgiftcards"
          options={{headerShown:false}}>                                  {(props)=><SellGiftCards {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>

	  <Stack.Screen                                                     name="fund"
          options={{headerShown:false}}>                                  {(props)=><Fund {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>

	  <Stack.Screen                                                     name="buyairtime"
          options={{headerShown:false}}>                                  {(props)=><BuyAirtime {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>


<Stack.Screen 
	  name="buydata"
          options={{headerShown:false}}>                                  {(props)=><BuyData {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>

	  <Stack.Screen                                                     name="profiles"
          options={{headerShown:false}}>                                  {(props)=><Profiles {...props} toggleMenu={toggleMenu} tog
gleMsg={toggleMsg}/>}
                                                                          </Stack.Screen>




	  </Stack.Navigator>
	  </NavigationContainer>


      {menuOpen && <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />}
      {openMsg && <Messages isMsg={openMsg} toggleMsg={toggleMsg} />}


    

	  <BlurView style={styles.bottomTab}>

	  <FlatList
		  data={tabs}
		  horizontal={true}
		  showsHorizontalScrollIndicator={false}
		  keyExtractor={(item)=>item.id}
		  renderItem={({item})=>{
			  const isTab = pressedTab === item.id;
	
			  
		return(
			<TouchableOpacity style={styles.tabArea} onPress={()=>{setPressedTab(item.id);nav?.navigate(item.route)}}>
          <View style={styles.tab}>
			<View style={styles.tab}>                                                                              {" "}                                                                                                <Image                                                                                                 style={styles.tabImage}                                                                              source={{                                                                                              uri: "https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png",                            }}                                                                                                 />                                                                                                 </View>                                                                                              <Text style={styles.tabText}>Recents</Text>                                                        </TouchableOpacity>
		)


		  }}/>
	  </BlurView>
<>)
}
