import React, { useState } from 'react';
import Home from './home';
import Menu from './menu';
import Fund from './fund';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            {/* <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> */}
            {/* <Home toggleMenu={toggleMenu} /> */}
        </>
    );
}
