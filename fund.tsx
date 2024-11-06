import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {BlurView} from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import Menu from './menu';



const Fund: React.FC = () => {

	const navigation=useNavigation();

	const route =useRoute();
	const toggleMenu=route.params.toggleMenu;

	const toggleMsg=route.params.toggleMsg;
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

		<TouchableOpacity onPress={toggleMsg}style={styles.infoCircle}>                                          <Image style={styles.bellIcon} source={{ uri: 'https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png' }} />                   </TouchableOpacity>

                <ScrollView style={styles.contentArea}>

		<View style={styles.contentTitle}>

		<Text style={styles.quickTitle}>Quick Processing
		</Text>
		

		<Text style={styles.flash}>⚡</Text>

		</View>


		<Text style={styles.addAccount}>Link Bank Account → </Text>
                    <View style={styles.fundingArea}>


		    <View style={styles.balArea}>
		    <Text style={styles.bal}>Bal:</Text>
		    <Text style={styles.balance}>₦100,000</Text>
		    </View>

		    <Text style={styles.recentAccounts}>Recent Accounts</Text>
		    <View style={styles.accountsList}>
		    <LinearGradient
		    colors={[ '#fff', '#fff', '#fff', '#ccc']}
		    start={{x:0, y:0}}
		    end={{x:1, y:0}}
		    style={styles.usedAccount}/>

		    <LinearGradient                                                 colors={['#fff', '#fff', '#fff', '#ccc']}
                    start={{x:0, y:0}}                                              end={{x:1, y:0}}                                                style={styles.usedAccount}/>

		    <LinearGradient                                                 colors={[ '#fff', '#fff', '#fff', '#ccc']}
                    start={{x:0, y:0}}                                              end={{x:1, y:0}}                                                style={styles.usedAccount}/>

		    <LinearGradient                                                 colors={['#fff', '#fff', '#fff', '#ccc']}
                    start={{x:0, y:0}}                                              end={{x:1, y:0}}                                                style={styles.usedAccount}/>

		    </View>

		    <View style={styles.fundButtons}>

                        <View style={styles.fund1}>
<Image style={styles.addImage}                             source={{uri: 'https://i.postimg.cc/x14DHtjJ/Picsart-24-11-03-14-43-11-943.png'}}/>

			<Text style ={styles.addFund}>Add Fund</Text>
			</View>
                        <View style={styles.fund2}>
			<Image style={styles.withdrawImage}
			source={{uri: 'https://i.postimg.cc/TwGKMd8X/Picsart-24-11-03-13-56-07-199.png'}}/>
			<Text style={styles.withdraw}>Withdraw</Text>
			</View>
			</View>
                   </View> 
                </ScrollView>
            </View>
	    </LinearGradient>
        </View>



	<BlurView style={styles.bottomTab}>
                <TouchableOpacity 
		onPress={()=>navigation.navigate('home')}style={styles.tabArea}>
                    <View style={styles.tab} >                                            <Image style={styles.homeImage} source={{uri : 'https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png'}}/>                        </View>                                                               <Text style={styles.tabText}>Home</Text>                          </TouchableOpacity>                                                                                                                                     <TouchableOpacity onPress={()=>navigation.navigate('fund')}style={styles.tabArea}>                             <View style={styles.tab} ><Image style={styles.fundImage} source={{uri :'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png'}}/>                                                                             </View>                           <Text style={styles.tabText}>Fund</Text>                                                                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('recents')} style={styles.tabArea}>
                    <View style={styles.tab} >                                            <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png'}}/>
 </View>
                    <Text style={styles.tabText}>Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('profiles')} style={styles.tabArea}>                                             <View style={styles.tab} >                                      <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png'}}/>                                                                             </View>
                    <Text style={styles.tabText}>Profile</Text>
                </TouchableOpacity>                                                           </BlurView>
        
   </> );
};

const styles = StyleSheet.create({

	infoCircle: {                                                             position: 'absolute',                                                 top: 6,                                                              right: 10,                                                            height: 30,                                                           width: 30,                                                            borderRadius: 15,                                                     justifyContent: 'center',                                             alignItems: 'center',                                                 backgroundColor: 'black',                                             overflow: 'hidden',                                                   zIndex: 3,                                                        },

	bellIcon: {                                                               height: 25,                                                           width: 25,                                                            left:1                                                            },

	menuCircle: {                                                                                                                                   top: 6,                                                              left: 10,                                                             height: 30,                                                           width: 35,                                                            overflow: 'hidden',                                                   zIndex:3,                                                         },                                                                    menuIcon: {                                                               height: 24,                                                           width: 24,                                                                                                                                  left:8,
        resizeMode:'contain',                                                                                                                   },
	gradientContainer:{
		flex:1,
	},
    container: {
        flex: 1,
    },

    contentTitle:{
	    position:'absolute',
	    top:25,
	    alignSelf:'center',
	    justifyContent:'space-around',
	    width:300,
	    height:30,
	    flexDirection:'row',
	    
    },

    quickTitle:{
	    fontSize:25,
	    fontWeight:'bold',
	    color:'#3CB2CB',

    },

    flash:{
	    fontSize:30
    },
    body: {
        height: '100%',
        width: '100%',
        top: 0,
        position: 'absolute',
	backgroundColor:' #f5b857',
	
    },
    contentArea: {
        height: 500,
        width: '95%',
        position: 'absolute',
        alignSelf: 'center',
        top: 40,
        backgroundColor: '#cfccc5',
        borderRadius: 30,
	
	
    },
    fundButtons:{
	    flex:1,
	    position: 'absolute',                                           justifyContent: 'space-around',                                 flexDirection: 'row',                                           gap:20,
    },
    fundingArea: {
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        top: 80,
        backgroundColor: '#f7fcf6',
        height: 350,
        width:320,
	alignSelf:'center',
	borderRadius:30,
	shadowColor:'black',
	shadowOffset:{width:0, height:2},
	shadowRadius:2,
	shadowOpacity:0.2,
	elevation:5,

	
    },

    balArea:{
	    height:20,
	    width:100,
	    justifyContent:'space-around',
	    position: 'absolute',
	    top:85,
	    right:28,
	    borderRadius:15,
	    flexDirection:'row',
	    borderWidth:0.3,
	    borderColor:'#548C94',

    },

    bal:{
	    fontSize:12,
	    color:'#548C94',
	    fontWeight:'bold',
	    alignSelf:'center',
	    left:5,
	    
    },

    balance:{
	    fontSize:12,
	    color:'#082350',
	    alignSelf:'center',
	    fontWeight:'bold',
    },
    fund1:{
	    height:60,
	    width:130,
	    borderRadius:15,
	    shadowColor:'black',
	    shadowOffset:{width:0, height:0},
	    shadowRadius:4,
	    elevation:5,
	    backgroundColor:'#3CB2CB',
	    shadowOpacity:0.3,},
	fund2:{                                                                 height:60,                                                      width:130,                                                      borderRadius:15,                                                shadowColor:'black',                                            shadowOffset:{width:0, height:0},                               shadowRadius:4,                                                 elevation:5,                                                    shadowOpacity:0.3,
		backgroundColor:'#548C94',
	},




	addImage:{                                                         top:-8,                                                                                                                          height:60,                                                      width:100,                                                      resizeMode:'contain',                                           alignSelf:'center',                                             position:'absolute',                                                                                                                                                                                                                                                                                            },







	    withdrawImage:{
		    top:5,
	
		    height:45,
		    width:100,
		    resizeMode:'contain',
		    alignSelf:'center',
		    position:'absolute',


	    

    },

    addFund:{
	    fontWeight:'bold',
	    position: 'absolute',
	    alignSelf:'center',
	    color:'white',
	    bottom:4.5,
    },

    withdraw:{
	    fontWeight:'bold',                                                    position: 'absolute',                                                 alignSelf:'center',                                                   color:'black',                                                         bottom:4.5,
    },




    recentAccounts:{
	    position:'absolute',
	    top:85,
	    left:30,
	    fontWeight:'bold',
    },


    addAccount:{                                                              position:'absolute',                                                  
	   top :455,                                                      
	    alignSelf:'center',
	fontWeight:'bold',
	color:'#3CB2CB',
	zIndex:13,
	fontSize:12,
    },

    accountsList:{
	    position:'absolute',
	    top:120,
	    
	    flex:1,
	    padding:15,
	    justifyContent:'space-around',
	    flexDirection:'column',
	    alignItems:'center',
	    borderRadius:30,
            elevation:5,
	    backgroundColor:'#ccc',
	    paddingTop:20,
	    paddingBottom:20,
	    paddingRight:30,
	    alignSelf:'center',
	    
	    

    },

    usedAccount:{
	    height:30,
	    width:240,
	    backgroundColor:'black',
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

export default Fund;
