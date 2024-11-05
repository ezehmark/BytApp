import React, { useState } from 'react';                                                                              import { NavigationContainer } from '@react-navigation/native';                                                       import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Menu from './menu';
import Fund from './fund.tsx';
import Recents from './recents.tsx';
import Messages from './messages.tsx';

const Stack = createStackNavigator();

export default function App() {                                                                                           const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };
        const[openMsg, setOpenMsg]=useState(false);
        const toggleMsg =()=>{
                setOpenMsg(msg=>!msg);
        }

    return (
        <>
           <NavigationContainer initialRouteName='recents'>
               
	    <Stack.Navigator initialRouteName='home'>
                   
	    <Stack.Screen name="home" component={Home}
            options={{headerShown:false}}initialParams={{toggleMenu, toggleMsg}}/>
           
	    <Stack.Screen name='recents' component={Recents} initialParams={{toggleMenu, toggleMsg}} options={{headerShown:false}}/>


                   
	    <Stack.Screen name="fund" component={Fund}
            options={{headerShown:false}}initialParams={{toggleMenu, toggleMsg}}/>


                </Stack.Navigator>
            </NavigationContainer>


            {menuOpen && <Menu isOpen = {menuOpen} toggleMenu={toggleMenu} />}

           {openMsg && <Messages isMsg={openMsg} toggleMsg={toggleMsg}/>}

	    
        </>
    );
}

