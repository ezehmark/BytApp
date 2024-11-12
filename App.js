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
import GiftCardsList from './giftcardslist';

const Stack = createStackNavigator();

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    const [openMsg, setOpenMsg] = useState(false);
    const toggleMsg = () => setOpenMsg(msg => !msg);

    const [cardList, setCardList] = useState(false);
    const toggleCardList = () => setCardList(list => !list);

    const [giftCardType, setGiftCardType] = useState("Select Type");
    const handleGiftCardType = (cardName) => {
        setGiftCardType(cardName);
        toggleCardList();
    };

    return (
        <>


            {cardList && (
                <GiftCardsList 
                    isList={cardList} 
                    toggleCardList={toggleCardList} 
                    onSelectCard={handleGiftCardType} 
                />
            )}
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName='sellgiftcards'>
                    <Stack.Screen name="home" component={Home} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                    <Stack.Screen name='recents' component={Recents} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                    <Stack.Screen name='buygiftcard1' component={BuyGiftCard1} options={{ headerShown: false }} initialParams={{ toggleMenu }} />
                    <Stack.Screen name='sellgiftcards' component={SellGiftCards} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg, toggleCardList }} />
                    <Stack.Screen name="fund" component={Fund} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                    <Stack.Screen name='profiles' component={Profile} options={{ headerShown: false }} initialParams={{ toggleMenu, toggleMsg }} />
                </Stack.Navigator>
            </NavigationContainer>

            {menuOpen && <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />}
            {openMsg && <Messages isMsg={openMsg} toggleMsg={toggleMsg} />}
        </>
    );
}
