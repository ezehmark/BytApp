import React, { useState } from 'react';
import Home from './home.tsx';
import Menu from './menu.tsx';
import Fund from './fund.tsx;

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
           // <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
            //<Home toggleMenu={toggleMenu} />
        </>
    );
}
