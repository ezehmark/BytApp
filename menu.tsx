import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from 'expo-blur';

const Menu: React.FC = () => {
    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(prevMenu => !prevMenu);
    };

    return (
        menu ? (
            <BlurView style={styles.mymenu}>
	    <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeBtn}>
                    Close
                </Text>
		</TouchableOpacity>
                <Text style={styles.item1}>Exchange</Text>
                <Text style={styles.item1}>Referrals</Text>
                <Text style={styles.item1}>History</Text>
                <Text style={styles.item1}>About Us</Text>
                <Text style={styles.item1}>Privacy Policy</Text>
            </BlurView>
        ) : null
    );
};

const styles = StyleSheet.create({
    mymenu: {
        height: '98%',
        width: '80%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: 15,
        paddingBottom: 300,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
	shadowColor:'black',
	hadowOffset:{width:4, height:1},
	zIndex:12,
    },
    closeBtn: {
        width: 60,
        textAlign: 'center',
        padding: 5,
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
	marginLeft:150,

	top:15,
	zIndex:3,
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
