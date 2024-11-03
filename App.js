import React, { useState } from 'react';
import Home from './home';
import Menu from './menu';
import Fund from './fund.tsx';

export default function App() {
    

    const toggleMenu = () => {

    };

    return (
        <>
            {/* <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> */}
            {/* <Home toggleMenu={toggleMenu} /> */}
	    <Fund/>
        </>
    );
}
