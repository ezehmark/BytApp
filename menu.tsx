import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from 'expo-blur';
import Recents from './recents.tsx';
import {useNavigation} from '@react-navigation/native';

interface MenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {


    if (!isOpen) return null;

    return (
        <BlurView style={styles.mymenu}>
            <TouchableOpacity onPress={toggleMenu} style={styles.btnCover}>
	<Text style={styles.closeBtn}>Close ❌</Text>
            </TouchableOpacity>
            <Text style={styles.item1}>Exchange</Text>
            <Text style={styles.item1}>Referrals</Text>
            <Text 
	    style={styles.item1}>History</Text>
            <Text style={styles.item1}>About Us</Text>
            <Text style={styles.item1}>Privacy Policy</Text>
        </BlurView>
    );
};

const styles = StyleSheet.create({
    mymenu: {
        position: 'absolute',
        height: '99%',
        width: '80%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: 15,
        paddingBottom: 300,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 1 },
        shadowRadius: 4,
        shadowOpacity: 0.5,
        zIndex: 12,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    btnCover:{
	    flex:1,
	    left: '60%',
	    top: 10,
	    zIndex:3,
    },
    closeBtn: {
        

	    height:30, 
	    width:90,
	    textAlign: 'center',
        padding: 5,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
	whiteSpace:'nowrap'
    },
    item1: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
});

export default Menu;
