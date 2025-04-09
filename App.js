import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Menu from './menu';
import Fund from './fund.tsx';
import Recents from './recents.tsx';
import Messages from './messages.tsx';
import Profile from './profiles.tsx';
import BuyGiftCard1 from './buygiftcard1';
import SellGiftCards from './sellgiftcards';
import GiftCardsList from './giftcardslist.tsx';
import AmazonCards from './amazoncards.tsx';
import AppleCards from './applecards.tsx';
import BuyAirtime from './buyairtime.tsx';
import BuyData from './buydata.tsx';
import TvSub from './tvsubs.tsx';
import Electricity from './electricity.tsx';

const Stack = createStackNavigator();

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    const [openMsg, setOpenMsg] = useState(false);
    const toggleMsg = () => setOpenMsg(msg => !msg);



    return (
        <>


            
            <NavigationContainer>
                <Stack.Navigator  initialRouteName='home'>
                    <Stack.Screen name="home" component={Home} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
	    <Stack.Screen name='tvsub' component={TvSub} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />

	    <Stack.Screen name='electricity' component={Electricity} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
	    <Stack.Screen name='recents' component={Recents} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                    <Stack.Screen name='buygiftcard1' component={BuyGiftCard1} options={{ headerShown: false}} initialParams={{ toggleMenu }} />
                    <Stack.Screen name='sellgiftcards' component={SellGiftCards} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                    <Stack.Screen name="fund" component={Fund} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
	    <Stack.Screen name="buyairtime" component={BuyAirtime} options={{headerShown:false}} initialParams={{toggleMsg, toggleMenu}}/>
	    <Stack.Screen name="buydata" component={BuyData} options={{headerShown:false}} initialParams={{toggleMsg, toggleMenu}}/>
                    <Stack.Screen name='profiles' component={Profile} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                </Stack.Navigator>
            </NavigationContainer>

            {menuOpen && <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />}
            {openMsg && <Messages isMsg={openMsg} toggleMsg={toggleMsg} />}
        </>
    );
}
