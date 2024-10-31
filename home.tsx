import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { BlurView } from 'expo-blur';

const Home: React.FC = () => {
    const [click, setClick] = useState(false);

    const toggleClick = () => {
        setClick(click => !click);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
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
            </View>

            <View style={styles.menuCircle}>
                <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/QCsHpQWD/images-17.png' }} />
            </View>

            <View style={styles.infoCircle}>
                <Image style={styles.bellIcon} source={{ uri: 'https://i.postimg.cc/QCsHpQWD/images-17.png' }} />
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
		<Text style={styles.SGiftCards}>Gift Cards</Text>
		<View style={styles.sellIcon}>
		    <Image style={styles.image} source={{ uri: 'https://i.postimg.cc/nhsTGFhp/DALL-E-2024-10-31-11-40-54-A-modern-icon-showing-the-concept-of-selling-a-gift-card-for-dollars-T.png' }} />
		</View>
	    </View>

	    <View style={styles.sellGiftCard}>
		<Text style={styles.Sell}>Sell</Text>
		<Text style={styles.GiftCards}>Gift Cards</Text>
		<View style={styles.sellIcon}>
		    <Image style={styles.image} source={{ uri: 'https://i.postimg.cc/nVSB75hc/shopping-cart-no-bg.png' }} />
		</View>
	    </View>

	    <View style={styles.buyData}>
	    <Text style={styles.Buy}>Buy</Text>                 <Text style={styles.SGiftCards}>Cheap Data</Text>
		<View style={styles.buyIcon}>
		    <Image style={styles.image} source={{ uri: 'https://i.posttimg.cc/ynVSB75hc/shopping-cart-no-bg.png' }} />
		</View>
	    </View>
	    
	    <View style={styles.buyAirtime}>
	    <Text style={styles.Sell}>Top-Up</Text>                 <Text style={styles.SGiftCards}>Airtime</Text>
		<View style={styles.sellIcon}>
		    <Image style={styles.airtimeImage} source={{ uri: 'https://i.postimg.cc/Dy4bC8Lj/Picsart-24-10-31-12-01-16-766.jpg' }} />
		</View>
	    </View>
	    
	    <View style={styles.subscribeTv}>
	    <Text style={styles.Sell}>Fast Tv Subscriptions</Text>
	    </View>
	</View>
	

                {/* Add more scrollable content if needed */}
            </ScrollView>

            <View style={styles.bottomTab}>
                <View style={styles.tabArea}>
                    <View style={styles.tab} />
                    <Text style={styles.tabText}>Home</Text>
                </View>

		<View style={styles.tabArea}>                             <View style={styles.tab} />                           <Text style={styles.tabText}>Home</Text>                                                                </View>
                <View style={styles.tabArea}>
                    <View style={styles.tab} />
                    <Text style={styles.tabText}>Trade</Text>
                </View>
                <View style={styles.tabArea}>
                    <View style={styles.tab} />
                    <Text style={styles.tabText}>Buy</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
	topContainer: {                                           padding: 20,                                          height: 190,                                          width: '100%',                                        borderBottomRightRadius: 25,                          borderBottomLeftRadius: 25,                           position: 'absolute',                                 shadowColor: 'white',                                 shadowOffset: {height: 4, width: 0},                  shadowOpacity: 0.3,                                   shadowRadius: 4,                                      backgroundColor: '#ccc',                              zIndex: 2,                                        },
    headingContainer: {position:'absolute',height:30,width:'100%', padding:30,
    },
    heading1: {fontSize:15, fontWeight:'bold', position:'absolute',top:15,
    },
    heading2: {fontSize:10,fontWeight: 'bold', position:'absolute',bottom:8,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
	zIndex: 1,
        marginTop: 198, // Adjust this based on the static content height
	
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
        backgroundColor: '#20a385',
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
        color: '#ff7b00',
        position: 'absolute',
        top: 15,
        right: 30,
    },
    Sell: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'red',
        position: 'absolute',
        top: 15,
        left: 25,
    },
    GiftCards: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ea1c4d',
        position: 'absolute',
        bottom: 20,
	justifyContent: 'center',
	
	marginLeft:30,
    },
    buyIcon: {
        position: 'absolute',
        height: 50,
        width: 50,
	borderRadius:15,
        borderColor: '#20a385',
        top: 5,
        left: 5,
        backgroundColor: 'white',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 45,
        width: 45,
        position: 'absolute',
        top: 8,
        left: 7,
        resizeMode: 'contain',
    },

    airtimeImage: {                                                            height: 60,                                                     width: 60,                                                      position: 'absolute',                                           resizeMode: 'contain',
    sellGiftCard: {
        height: 120,
        width: 160,
        marginVertical: 20,
        backgroundColor: '#20a385',
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
    SGiftCards: {                                              fontWeight: 'bold',                                   fontSize: 16,                                         color: '#ea1c4d',                                     position: 'absolute',                                 bottom: 20,                                           marginLeft: 30,                                     },
    buyData: {
        height: 120,
        width: 160,
        marginVertical: 20,
        backgroundColor: '#20a385',
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
        backgroundColor: '#20a385',
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
        top: 60,borderWidth:1,borderRadius:15,},
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
        
	marginTop:'auto',                                     marginBottom: 'auto',
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
    },
    hideAndSee: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#20a385',
        
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
        height: 80,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
	zIndex: 3,
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
        backgroundColor: '#20a385',
	top:0,
	marginLeft: 'auto',
	marginRight: 'auto',
    },
    tabText: {alignSelf:'center',
        color: '#20a385',
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
        backgroundColor: '#20a385',
	overflow: 'hidden',
	zIndex: 3,
    },
    

    
    
    menuCircle: {
        position: 'absolute',
        top: 10,
        left: 10,
        height: 30,
        width: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',overflow: 'hidden',
	zIndex: 3,
    },
    menuIcon: {
        height: 22,
        width: 22, 
        position: 'absolute',
    },
    
    bellIcon: {
        height: 32,
        width: 32,
    },
});

export default Home




