import React, { useState } from 'react';                                                                              import { NavigationContainer } from '@react-navigation/native';                                                       import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Menu from './menu';
import Fund from './fund.tsx';
import Recents from './recents.tsx';
import Messages from './messages.tsx';
import Profile from './profiles.tsx';

export default function App() {                                                                                         

   return (
	   <>
{menuOpen && <Menu isOpen = {menuOpen} toggleMenu={toggleMenu} />}


	    
        <Profile/>
	</>
    );
}


