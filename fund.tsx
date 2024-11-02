import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { BlurView } from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';
import Menu from './menu.tsx';

interface HomeProps{toggleMenu: ()=> void}
const Fund: React.FC<HomeProps>= ({toggleMenu}) => {
    const [click, setClick] = useState(false);

    const toggleClick = () => {
        setClick(click => !click);
    }return (                                                                                                 <View style={styles.container}>                                                                                                                                                                                                                                                                                       <BlurView style={styles.topContainer}>
               <Image source={{uri: 'https://i.postimg.cc/sXShHWLR/Picsart-24-11-01-15-07-20-853.png'
}} style={styles.icon}/>
               <View style={styles.balanceArea}>                                                                                                                                                                              <Text style={styles.balance}>Balance</Text>
                    <View style={styles.currency}>
                        <Text style={styles.NGN}>NGN</Text>
                        <Text style={styles.flag}>🇳 🇬 </Text>
                    </View>
                    <View style={styles.hide}>                                                                               <Text style={styles.hideAndSee} onPress={toggleClick}>{click ? 'Hide' : 'See'
}</Text>
                    </View>
                                                                                                                         <Text style={styles.naira}></Text>
                    <Text style={styles.total}>
                        {click ? '₦100,000' : <Text style={{fontSize:16, top:-5,}}>₦ ⚡ ⚡ ⚡ ⚡</Tex
t>}
                    </Text>
                </View>
                <Text style={styles.welcome}>Welcome, Mark</Text>                                    
</BlurView>


            <TouchableOpacity style={styles.menuCircle}
            onPress={toggleMenu}>
                <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }} />
                </TouchableOpacity>
		<View style={styles.infoCircle}>
                <Image style={styles.bellIcon} source={{ uri: 'https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png' }} />
            </View>
            {/* Apply ScrollView here */}
            <ScrollView style={styles.scrollView}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading1}>Buy and Sell</Text>
                <Text style={styles.heading2}>Gift Cards, Subscriptions and more
                </Text>
                </View>


const styels = StyleSheet.create({
	topContainer: {                                                               padding: 20,                                                          height: 170,                                                          width: '100%',                                                        top:0,                                                                borderBottomRightRadius: 25,                                                                                      
		borderBottomLeftRadius: 25,                                                                 position: 'absolute',                                                 shadowColor: 'black',
                shadowOffset: {height: 0.5, width: 0},                                                                                                      shadowOpacity: 0.2,                                                   elevation: 1,                                                         zIndex: 3,                                                    },                                                                                                                                      headingContainer: {                                                           position:'absolute',                                                  height:30,                                                            width:'100%',                                                         padding:30,                                                   },                                                                    heading1: {                                                                   fontSize:15,                                                          fontWeight:'bold',                                                    position:'absolute',top:15,                                           color: '#09435F',                                             },                                                                    heading2: {                                                                   fontSize:10,                                                          fontWeight: 'bold',                                                   position:'absolute',                                                  bottom:8,                                                             color:'#526669',
		},
	container: {                                                                  flex: 1,    
		backgroundColor: '#EBE2C2',                               },
                                                                          scrollView: {                                                             flex: 1,                                                              zIndex: 1,                                                            marginTop: 130,                                                                                                                             width: '100%',                                                        paddingTop: 20,                                                   },


});

export default Fund
