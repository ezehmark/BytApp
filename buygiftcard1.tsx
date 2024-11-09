import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const BuyGiftCard1: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const toggleMenu = route.params?.toggleMenu;

    const [giftCards, setGiftCards] = useState<string[]>([]);
    const[loading, setLoading] = useState<boolean>(false);

    const countries = [
        { name: 'Nigeria', flag: '🇳🇬' },
        { name: 'Afghanistan', flag: '🇦🇫' },
        { name: 'Albania', flag: '🇦🇱' },
        { name: 'Algeria', flag: '🇩🇿' },
        { name: 'Andorra', flag: '🇦🇩' },
        { name: 'Angola', flag: '🇦🇴' },
        { name: 'Argentina', flag: '🇦🇷' },
        { name: 'Armenia', flag: '🇦🇲' },
        { name: 'Australia', flag: '🇦🇺' },
        { name: 'Austria', flag: '🇦🇹' },
        { name: 'Azerbaijan', flag: '🇦🇿' },
        { name: 'Bahamas', flag: '🇧🇸' },
        { name: 'Bahrain', flag: '🇧🇭' },
        { name: 'Bangladesh', flag: '🇧🇩' },
        { name: 'Barbados', flag: '🇧🇧' },
        { name: 'Belarus', flag: '🇧🇾' },
        { name: 'Belgium', flag: '🇧🇪' },
        { name: 'Belize', flag: '🇧🇿' },
        { name: 'Benin', flag: '🇧🇯' },
        { name: 'Bhutan', flag: '🇧🇹' },
        { name: 'Bolivia', flag: '🇧🇴' },
        { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
        { name: 'Botswana', flag: '🇧🇼' },
        { name: 'Brazil', flag: '🇧🇷' },
        { name: 'Brunei', flag: '🇧🇳' },
        { name: 'Bulgaria', flag: '🇧🇬' },
        { name: 'Burkina Faso', flag: '🇧🇫' },
        { name: 'Burundi', flag: '🇧🇮' },
        { name: 'Cambodia', flag: '🇰🇭' },
        { name: 'Cameroon', flag: '🇨🇲' },
        { name: 'Canada', flag: '🇨🇦' },
        { name: 'Cape Verde', flag: '🇨🇻' },
        { name: 'Central African Republic', flag: '🇨🇫' },
        { name: 'Chad', flag: '🇹🇩' },
        { name: 'Chile', flag: '🇨🇱' },
        { name: 'China', flag: '🇨🇳' },
        { name: 'Colombia', flag: '🇨🇴' },
        { name: 'Comoros', flag: '🇰🇲' },
        { name: 'Congo', flag: '🇨🇬' },
        { name: 'Costa Rica', flag: '🇨🇷' }
    ];


const fetchGiftCards = async(countryName: string)=>{
setLoading(true);
try{
	const response = await fetch(`http://127.0.0.1:8000/api/giftcards?country=${countryName}`);
	const data = await response.json();
	if(data.giftCards){
		setGiftCards(data.giftCards);}



else{
	setGiftCards([]);}
}	catch(error){
		Alert.alert('Error', 'Failed to load gift cards');
			    setGiftCards([]);
	}
	finally{setLoading(false)}
}

    return (
        <>
            <View style={styles.container}>
                <LinearGradient
                    colors={['white', '#f5b857']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradientContainer}>
                    <View style={styles.body}>

                        {giftCards.length > 0 && !loading && (
    <View style={styles.giftCardsList}>
        {giftCards.map((giftCard, index) => (
            <Text key={index} style={styles.giftCardText}>
                {giftCard}
            </Text>
        ))}
    </View>
)}

		    <TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>
                            <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Buy Gift Cards</Text>
                        <TouchableOpacity style={styles.infoCircle}>
                            <Image style={styles.bellIcon} source={{ uri: 'https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png' }} />
                        </TouchableOpacity>

                        <View style={styles.contentArea}>
                            <View style={styles.contentTitle}>
                                <Text style={styles.quickTitle}>Select Country</Text>
                            </View>

                            <ScrollView style={styles.scrollView}>
                                <View style={styles.accountsList}>
                                   

{countries.map((country, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => fetchGiftCards(country.name)}
                                            style={styles.usedAccount}
                                        >
                                            <LinearGradient
                                                colors={['#00cdde', '#00cdde']}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }}
                                                style={styles.countryContainer}
                                            >
                                                <Text style={styles.countries}>{`${country.name} ${country.flag}`}</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </ScrollView>
			    {loading && <ActivityIndicator size="large" color="blue"/>}
			    {giftCards.length===0 && !loading &&(<Text style={styles.noGiftCards}>No Gift Card Available for selected country</Text>)}
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <BlurView style={styles.bottomTab}>
                <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.tabArea}>
                    <View style={styles.tab}>
                        <Image style={styles.homeImage} source={{ uri: 'https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png' }} />
                    </View>
                    <Text style={styles.tabText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('fund')} style={styles.tabArea}>
                    <View style={styles.tab}>
                        <Image style={styles.fundImage} source={{ uri: 'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png' }} />
                    </View>
                    <Text style={styles.tabText}>Fund</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('recents')} style={styles.tabArea}>
                    <View style={styles.tab}>
                        <Image style={styles.tabImage} source={{ uri: 'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png' }} />
                    </View>
                    <Text style={styles.tabText}>Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('profiles')} style={styles.tabArea}>
                    <View style={styles.tab}>
                        <Image style={styles.tabImage} source={{ uri: 'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png' }} />
                    </View>
                   
		    <Text style={styles.tabText}>Profile</Text>
		    
                </TouchableOpacity>
            </BlurView>
        </>
    );
};


const styles = StyleSheet.create({
	title:{fontSize:20,
	fontWeight:'bold',
	alignSelf:'center',
	top:7,
	position:'absolute',
	color:'#002444',
	},

	giftCardsList:{
		position:'absolute',
		top:50,
		height:60,
		width:'80%',
		borderRadius:20,
		backgroundColor:'green',
		
		 
	},

	giftCardsList:{
		position:'absolute',
		alignSelf:'center',
		height:50,
		width:'90%',
		fontSize:20,
		fontWeight:'bold',
	},


	infoCircle: {
		position: 'absolute',
		top: 6,
		right: 10,
		height: 30,
		width: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		overflow: 'hidden',
		zIndex: 3,                                                        },

	bellIcon: {
		height: 25,
		width: 25,
		left:1
	},

	menuCircle: {
		top: 6,
		left: 10,
		height: 30,
		width: 35,
		overflow: 'hidden',
		zIndex:3,                                                         },
		menuIcon: {
			height: 24,
			width: 24,
			left:8,
        resizeMode:'contain',                                                                                                                   },
	gradientContainer:{
		flex:1,
	},
    container: {
        flex: 1,
    },

    contentTitle:{
	    position:'absolute',
	    top:15,
	    alignSelf:'center',
	    justifyContent:'space-around',
	    width:300,
	    height:30,
	    flexDirection:'row',

    },

    quickTitle:{
	    fontSize:20,
	    fontWeight:'bold',
	    color:'#3CB2CB',
	    top:-4,

    },

    body: {
        height: '100%',
        width: '100%',
        top: 0,
        position: 'absolute',
	backgroundColor:' #f5b857',

    },
    contentArea: {
        height: '80%',
        width: '95%',
        position: 'absolute',
        alignSelf: 'center',
        top: 40,
        backgroundColor: '#000',
        borderRadius: 30,
	alignItems:'center',
	justifyContent:'center',


    },









    scrollView:{
    position:'absolute',
    height:'90%',
    width:'90%',
    backgroundColor:'#002444',
    left:'5%',
    top:'8%',
    borderRadius:25,
    shadowColor:'white',
    shadowOffset:{height:0,width:0},
    shadowRadius:4,
    elevation:3,
    shadowOpacity:0.7,
    },
    accountsList:{
	    position:'absolute',
	    top:15,
	    alignItems:'center',

	    height:400,
	    width:'90%',
	    justifyContent:'space-around',
	    flexDirection:'column',
	    borderRadius:30,
	    backgroundColor:'#002444',
	    paddingBottom:20,
	    left:'5%',



    },

    usedAccount:{
	    alignItems:'center',
	    justifyContent:'center',
	    height:60,
	    width:'95%',
	    backgroundColor:'#00cdde',
	    borderRadius:20,
	    margin:5,
    },
    bottomTab: {                                                              position: 'absolute',                                                 bottom: 0,                                                            flexDirection: 'row',                                                 height: 70,                                                           width: '100%',                                                        justifyContent: 'space-around',                                       alignItems: 'center',                                                 backgroundColor: '#D3DEE8',                                           zIndex: 3,                                                            borderTopWidth: 0.5,                                                  borderColor: '#ddd',                                                  paddingBottom:5,                                                                                                                        },                                                                    tabArea: {                                                                                                                                          height: 60,                                                           width:60,                                                             padding:4,                                                            justifyContent: 'space-around',                                      flexDirection: 'column',                                      },                                                                    tab: {                                                                    height: 40,                                                           width: 50,                                                            borderRadius: 15,                                                     top:0,                                                                marginLeft: 'auto',                                                   marginRight: 'auto',                                                  paddingRight: 'auto',                                                 paddingLeft:'auto',                                                                                                                                                                                           },

    tabImage:{
	    height: 40,
	    width: 50,
	    top:5,                                                                alignSelf: 'center',
	    position: 'absolute',                                                                                                                       resizeMode: 'contain',                                            },

	    homeImage:{
		    height: 35,
		    width: 45,
		    top:5,
		    alignSelf: 'center',
		    position: 'absolute',
		    resizeMode: 'contain',

	    },
		    fundImage:{                                                         height: 31,                                                                     width: 50,                                                            top:10,                                                                alignSelf: 'center',                                        position: 'absolute',                                                           resizeMode: 'cover',                                      },                                                                      tabText: {alignSelf:'center',                                             color: '#1C445C',                                                     marginTop: 5,                                                         alignItems: 'center',                                             },





}

				);


export default BuyGiftCard1;

