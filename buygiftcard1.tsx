import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {BlurView} from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import Menu from './menu';



const BuyGiftCard1: React.FC = () => {

	const navigation=useNavigation();

	const route =useRoute();
	const toggleMenu=route.params.toggleMenu;

    return (
	    <>
        <View style={styles.container}>
	<LinearGradient
	colors={['white', '#f5b857']}
	start={{x:0, y:0}}
	end={{x:0, y:1}}
	style={styles.gradientContainer}>
	<View style={styles.body}>
	<TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>                                                     <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }} />
                </TouchableOpacity>
		<Text style={styles.title}>Buy Gift Cards</Text>

		<TouchableOpacity
		style={styles.infoCircle}>                                          <Image style={styles.bellIcon} source={{ uri: 'https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png' }} />                   </TouchableOpacity>

                <View style={styles.contentArea}>

		<View style={styles.contentTitle}>

		<Text style={styles.quickTitle}>
		Select Country
		</Text>
		</View>
		



		    <ScrollView style={styles.ScrollView}>


		    <View style={styles.accountsList}>
		    <LinearGradient
		    colors={[ '#fff', '#fff', '#fff', '#ece6fc']}
		    start={{x:0, y:0}}
		    end={{x:1, y:0}}
		    style={styles.usedAccount}><Text style={styles.countries}>Nigeria   🇳🇬</Text>
		    </LinearGradient>

<LinearGradient                                            colors={[ '#fff', '#fff', '#fff', '#ece6fc']}                                                                         start={{x:0, y:0}}                                         end={{x:1, y:0}}                                           style={styles.usedAccount}><Text style={styles.countries}>Afghanistan 🇦🇫</Text>                                       </LinearGradient>
<LinearGradient                                            colors={[ '#fff', '#fff', '#fff', '#ece6fc']}                                                                         start={{x:0, y:0}}                                         end={{x:1, y:0}}                                           style={styles.usedAccount}><Text style={styles.countries}></Text>                                       </LinearGradient><LinearGradient                                            colors={[ '#fff', '#fff', '#fff', '#ece6fc']}                                                                         start={{x:0, y:0}}                                         end={{x:1, y:0}}                                           style={styles.usedAccount}><Text style={styles.countries}></Text>                                       </LinearGradient>

<LinearGradient                                            colors={[ '#fff', '#fff', '#fff', '#ece6fc']}                                                                         start={{x:0, y:0}}                                         end={{x:1, y:0}}                                           style={styles.usedAccount}><Text style={styles.countries}></Text>                                       </LinearGradient>

<LinearGradient                                            colors={[ '#fff', '#fff', '#fff', '#ece6fc']}                                                                         start={{x:0, y:0}}                                         end={{x:1, y:0}}                                           style={styles.usedAccount}><Text style={styles.countries}></Text>                                       </LinearGradient>

         <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            {/* Repeat for a total of 40 times */}
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>



         <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            {/* Repeat for a total of 40 times */}
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
       


         <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            {/* Repeat for a total of 40 times */}
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
       


         <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            {/* Repeat for a total of 40 times */}
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
            <LinearGradient
                colors={['#fff', '#fff', '#fff', '#ece6fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.usedAccount}
            >
                <Text style={styles.countries}></Text>
            </LinearGradient>
       



		    </View>

		    </ScrollView>


                </View>
            </View>
	    </LinearGradient>
        </View>



	<BlurView style={styles.bottomTab}>
                <TouchableOpacity 
		onPress={()=>navigation.navigate('home')}style={styles.tabArea}>
                    <View style={styles.tab} >                                            <Image style={styles.homeImage} source={{uri : 'https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png'}}/>                        </View>                                                               <Text style={styles.tabText}>Home</Text>                          </TouchableOpacity>                                                                                                                                     <TouchableOpacity onPress={()=>navigation.navigate('fund')} style={styles.tabArea}>                             <View style={styles.tab} ><Image style={styles.fundImage} source={{uri :'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png'}}/>                                                                             </View>                           <Text style={styles.tabText}>Fund</Text>                                                                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('recents')}style={styles.tabArea}>
                    <View style={styles.tab} >                                            <Image style={styles.tabImage} 
		    source={{uri : 'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png' }}/>
 </View>
                    <Text style={styles.tabText}>Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('profiles')}style={styles.tabArea}>                                             <View style={styles.tab} >                                      <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png'}}/>                                                                             </View>
                    <Text style={styles.tabText}>Profile</Text>
                </TouchableOpacity>                                                           </BlurView>
        
   </> );
};

const styles = StyleSheet.create({
	title:{fontSize:20,
	fontWeight:'bold',
	alignSelf:'center',
	top:5,
	position:'absolute',
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









    ScrollView:{
    position:'absolute',
    height:'90%',
    width:'90%',
    backgroundColor:'black',
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
	    backgroundColor:'black',
	    paddingBottom:20,
	    left:'5%',
	    
	    

    },

    usedAccount:{
	    alignItems:'center',
	    justifyContent:'center',
	    height:60,
	    width:'95%',
	    backgroundColor:'black',
	    borderRadius:20,
	    margin:5,
    },

    countries:{
    fontSize:17,
    fontWeight:'bold'},

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


