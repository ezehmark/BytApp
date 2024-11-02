import React from 'react';
import Home from './home.tsx'; // Import your SignupScreen
import Menu from './menu.tsx';


export default function App() {
const[menuSeen, setMenuSeen]= useState(false);
    const toggleMenu =()=>{                                            setMenuSeen(prevMenu =>!prevMenu);
    }

  return (
	  <>
	  <Menu isMenu ={menuSeen} toggleMenu ={toggleMenu} />
  <Home toggleMenu ={toggleMenu} />
  </>);
}
