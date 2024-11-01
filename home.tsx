import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { BlurView } from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';

const Home: React.FC = () => {
    const [click, setClick] = useState(false);

    const toggleClick = () => {
        setClick(click => !click);
    }

    return (
        <View style={styles.container}>

               <BlurView style={styles.topContainer}>
	       <View style={styles.balanceArea}>
                    <Text style={styles.refresh}>
		    </Text>
                    <Text style={styles.balance}>Balance</Text>
                    <View style={styles.currency}>
                        <Text style={styles.NGN}>NGN</Text>
                        <Text style={styles.flag}>🇳🇬</Text>
                    </View>
                    <View style={styles.hide}>
                        <Text style={styles.hideAndSee} onPress={toggleClick}>{click ? 'Hide' : 'See'}</Text>
                    </View>

                    <Text style={styles.naira}></Text>
                    <Text style={styles.total}>
                        {click ? '₦100,000' : <Text style={{fontSize:16, top:-5,}}>₦ ⚡ ⚡ ⚡ ⚡</Text>}
                    </Text>
                </View>
                <Text style={styles.welcome}>Welcome, Mark</Text>
            
</BlurView>
    <View style={styles.menuCircle}>
                <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }} />
            </View>

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


	<View style={styles.services}>
	    <View style={styles.buyGiftCard}>
		<Text style={styles.Buy}>Buy</Text>
		<Text style={styles.GiftCards}>Gift Cards</Text>
		<View style={styles.buyIcon}>
		    <Image style={styles.image} source={{ uri: 'https://i.postimg.cc/nVSB75hc/shopping-cart-no-bg.png' }} />
		</View>
	    </View>


	    <View style={styles.sellGiftCard}>
		<Text style={styles.Sell}>Sell</Text>
		<Text style={styles.GiftCards}>Gift Cards</Text>
		<View style={styles.sellIcon}>
		    <Image style={styles.sImage} source={{ uri: 'https://i.postimg.cc/SN8bBzFw/Screenshot-20241031-210908.png' }} />
		</View>
	    </View>

	    <View style={styles.buyData}>
	    <Text style={styles.sBuy}>Buy</Text>                 <Text style={styles.sGiftCards}>Cheap Data</Text>
		<View style={styles.buyIcon}>
		    <Image style={styles.sImage} source={{ uri: 'https://i.postimg.cc/SNNkMxw5/Picsart-24-10-31-12-01-16-766.jpg' }} />
		</View>
	    </View>
	    
	    <View style={styles.buyAirtime}>
	    <Text style={styles.recharge}>Top-Up</Text>                 <Text style={styles.topUp}>Airtime</Text>
		<View style={styles.sellIcon}>
		    <Image style={styles.sImage} source={{ uri: 'https://i.postimg.cc/850Bm5ZH/Picsart-24-10-31-22-10-12-892-1.jpg' }} />
		</View>
	    </View>
	    
	    <View style={styles.subscribeTv}>
	    <Text style={styles.Sell}>Fast Tv Subscriptions</Text>
	    </View>
	</View>
	

                {/* Add more scrollable content if needed */}
            </ScrollView>

            <BlurView style={styles.bottomTab}>
                <View style={styles.tabArea}>
                    <View style={styles.tab} >
		    <Image style={styles.homeImage} source={{uri : 'https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png'}}/>
		    </View>
                    <Text style={styles.tabText}>Home</Text>
                </View>

		<View style={styles.tabArea}>                             <View style={styles.tab} ><Image style={styles.fundImage} source={{uri :'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png'}}/>                                                                             </View>                           <Text style={styles.tabText}>Fund</Text>                                                                </View>
                <View style={styles.tabArea}>
                    <View style={styles.tab} >
		    <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png'}}/>                                                                             </View>
                    <Text style={styles.tabText}>Recents</Text>
                </View>
                <View style={styles.tabArea}>
		    <View style={styles.tab} >                                      <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png'}}/>                                                                             </View>
                    <Text style={styles.tabText}>Profile</Text>
                </View>
            </BlurView>
        </View>
    );
};
const styles = StyleSheet.create({
	topContainer: {                                           
		padding: 20,                                         
		height: 170,                                         
		width: '100%',                                        
		borderBottomRightRadius: 25,                          
		borderBottomLeftRadius: 25,
		
		position: 'absolute',                                 
		shadowColor: 'white',                                 
		shadowOffset: {height: 4, width: 0},                  
		shadowOpacity: 0.3,                                   
		shadowRadius: 4,                                           blur: 3,
		zIndex: 2,                                        },
		
    headingContainer: {
	    position:'absolute',
	    height:30,
	    width:'100%', 
	    padding:30,
    },
    heading1: {
	    fontSize:15, 
	    fontWeight:'bold', 
	    position:'absolute',top:15,
	    color: '#09435F',
    },
    heading2: {
	    fontSize:10,
	    fontWeight: 'bold', 
	    position:'absolute',
	    bottom:8,
	    color:'#526669',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
	zIndex: 1,
        marginTop: 160,
	
        width: '100%',
        paddingTop: 20,
    },
    services: {
        height: 600,
        width: '100%',
        position: 'absolute',
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
	marginTop:2,
    },
    buyGiftCard: {
        height: 120,
        width: 160,
        marginVertical: 20,
        backgroundColor: '#F5B857',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 4,
        position: 'absolute',
        top: 45,
    },
    Buy: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#033F5B',
        position: 'absolute',
        top: 15,
        right: 30,
    },
    Sell: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#09435F',
        position: 'absolute',
        top: 15,
        left: 25,
    },
    recharge: {                                                        fontWeight: 'bold',                                        fontSize: 17,                                              color: '#D8711B',                                              position: 'absolute',                                      top: 15,                                                   left: 25,
    },
    GiftCards: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#D63440',
        position: 'absolute',
        bottom: 20,
	justifyContent: 'center',
	
	marginLeft:30,
	padding:8,
	borderRadius:15,
	borderWidth:1,
	borderColor:'white',
    },
    sBuy: {                                                         fontWeight: 'bold',
        fontSize: 17,
        color: '#06F983',
        position: 'absolute',
        top: 15,                                                   right: 30,
    },
    sGiftCards: {                                                   fontWeight: 'bold',                                        fontSize: 16,                                              color: '#D63440',                                          position: 'absolute',                                      bottom: 20,                                                justifyContent: 'center',
                                                                   marginLeft:30,                                             padding:8,                                                 borderRadius:15,                                           borderWidth:1,                                             borderColor:'white',                                   },

	topUp: {                                                   fontWeight: 'bold',                                        fontSize: 16,                                              color: 'white',                                          position: 'absolute',                                      bottom: 20,                                                justifyContent: 'center',                                                                                            marginLeft:30,                                             padding:8,                                                 borderRadius:15,                                           borderWidth:1,                                             borderColor:'white',                                   },							   
    buyIcon: {
        position: 'absolute',
        height: 52,
        width: 50,
	borderRadius:15,
        borderColor: '#20a385',
        top: 5,
        left: 5,
        backgroundColor: '#EFAA51',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 45,
        width: 45,
        position: 'absolute',
        top: 6,
        left: 5,
        resizeMode: 'contain',
    },

    sImage: {                                                            height: 70,                                                     width: 70,                                                      position: 'absolute',                                           top: -7.6,                                                         left: -10,                                                        resizeMode: 'contain',                                      },

    sellGiftCard: {
        height: 120,
        width: 160,
        marginVertical: 20,
        backgroundColor: '#4AD8E3',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 4,
        position: 'absolute',
        top: 45,
        right: 15,
    },
    sellIcon: {
        position: 'absolute',
        borderColor: '#20a385',
        height: 50,
        width: 50,
        borderRadius:15,
        backgroundColor: 'white',
        overflow: 'hidden',
	top:5,
	right:5,
    },
    SGiftCards: {                                              
	    fontWeight: 'bold',                                   
	    fontSize: 16,                                         
	    color: '#ea1c4d',                                     
	    position: 'absolute',                                 
	    bottom: 20,                                           
	    marginLeft: 30,                              
    },
    buyData: {
        height: 120,
        width: 160,
        marginVertical: 20,
        backgroundColor: '#504A4C',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 4,
        position: 'absolute',
        top: 200,
    },
    buyAirtime: {
        height: 120,
        width: 160,
        marginVertical: 20,
        backgroundColor: '#4A6163',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 4,
        top: 200,
        position: 'absolute',
        right: 15,
    },
    subscribeTv: {
        height: 120,
        width: 327,
        marginVertical: 'auto',
        backgroundColor: '#20a385',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 4,
        top: 370,
        position: 'absolute',
        right: 15,
    },
      balanceArea: {
        position: 'absolute',
        height: 100,
        width: 270,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
        top: 60,borderWidth:0.5,
	borderColor: '#4AD8E3',

	borderRadius:15,
	shadowColor:'#ccc',                                       shadowOffset:{width:0, height: 0},                         shadowRadius:6,                                            elevation: 3,
        shadowOpacity: 0.6,
      },
balance: {
        color: 'black',
        position: 'absolute',
        top: 10,
        left: 20,
       },


       currency: {
        height: 23,
        width: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: 'white',
        position: 'absolute',
        left: 10,
        marginTop:'auto',                                     
        marginBottom: 'auto',
	color:'white',
	shadowColor:'black',                                       shadowOffset:{width:0, height: 0},                         shadowRadius:3,                                            elevation: 2,
        shadowOpacity: 0.5,
       },

       hide: {
        backgroundColor: 'white',
        width: 38,
        height: 23,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
	right:10,
	marginTop:'auto',
	marginBottom: 'auto',
	shadowColor:'black',
	shadowOffset:{width:0, height: 0},
	shadowRadius:3,
	elevation: 2,
	shadowOpacity: 0.5,
    },
    hideAndSee: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'red',
        
    },
    
    NGN: {
        fontWeight: 'bold',
        fontSize: 8,
        color: 'black',
        position: 'absolute',
        left: 3,
    },

    flag: {
        fontSize: 6,
        position: 'absolute',
        right: 3,

    },
    
    
    total: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        position: 'absolute',
        top: 40,
        alignSelf: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 70,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D3DEE8',
	zIndex: 3,
	borderTopWidth: 0.5,
	borderColor: '#ddd',
	blur:3,

    },
    tabArea: {
	    
	    height: 60,
	    width:60,
	    padding:4,
	    justifyContenet: 'space-around',
	    flexDirection: 'column',
    },
    tab: {
        height: 40,
        width: 50,
        borderRadius: 15,
	top:0,
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingRight: 'auto',
	paddingLeft:'auto',
	

    },
    tabImage:{                                                         height: 40,                                                     width: 50,
	    top:5,
	    alignSelf: 'center',
	position: 'absolute',                                           
        resizeMode: 'contain',
    },
    homeImage:{                                                         height: 35,                                                     width: 45,                                            top:5,                                                     alignSelf: 'center',                                   position: 'absolute',                                                                                                 resizeMode: 'contain',                                 },
    fundImage:{                                                         height: 40,
	    width: 60,           
	    top:5,          
	    alignSelf: 'center',                                        position: 'absolute',      
	    resizeMode: 'contain',                                      },
    tabText: {alignSelf:'center',
        color: '#1C445C',
        marginTop: 5,
	alignItems: 'center',
    },
    welcome: {
        fontSize: 11,
        right: 10,
        right: 55,
        position: 'absolute',
    },
    infoCircle: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
	overflow: 'hidden',
	zIndex: 3,
    },
    menuCircle: {
        position: 'absolute',
        top: 10,
        left: 10,
        height: 35,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'none',overflow: 'hidden',
	zIndex: 3,
    },
    menuIcon: {
        height: 24,
        width: 24, 
        position: 'absolute',
	left:8,
	resizeMode:'contain',
    },
    
    bellIcon: {
        height: 25,
        width: 25,
	left:1
    },
});

export default Home





