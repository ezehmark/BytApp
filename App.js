import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Menu from './menu';
import Fund from './fund.tsx';

const Stack = createStackNavigator();

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            <NavigationContainer initialRoutName='home'>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={Home} 
	    options={{headerShown:false}}initialParams={{toggleMenu}}/>


                    <Stack.Screen name="fund" component={Fund}
	    options={{headerShown:false}}initialParams={{toggleMenu}}/>


                </Stack.Navigator>
            </NavigationContainer>
	    {menuOpen && <Menu isOpen = {menuOpen} toggleMenu={toggleMenu} />}
        </>
    );
}
