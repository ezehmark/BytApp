import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {BlurView} from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';


const Fund: React.FC = () => {
    return (
	    <>
        <View style={styles.container}>
	<LinearGradient
	colors={['white', 'white', '#EBE2C2']}
	start={{x:0, y:0}}
	end={{x:0, y:1}}
	style={styles.gradientContainer}>
	<View style={styles.body}>
	<TouchableOpacity style={styles.menuCircle}>                                                     <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }} />
                </TouchableOpacity>

                <ScrollView style={styles.contentArea}>

		<View style={styles.contentTitle}>

		<Text style={styles.quickTitle}>Quick Processing
		</Text>
		

		<Text style={styles.flash}>⚡</Text>

		</View>


		<Text style={styles.addAccount}>Link Bank Account → </Text>
                    <View style={styles.fundingArea}>


		    <View style={styles.balArea}>
		    <Text style={styles.bal}>Bal</Text>
		    <Text style={styles.balance}>₦100,000</Text>
		    </View>

		    <Text style={styles.recentAccounts}>Recent Accounts</Text>
		    <View style={styles.accountsList}>
		    <Text style={styles.usedAccount}/>
		    <Text style={styles.usedAccount}/>
		    <Text style={styles.usedAccount}/>
		    <Text style={styles.usedAccount}/>

		    </View>

		    <View style={styles.fundButtons}>


                        <View style={styles.fund1}>

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
                <View style={styles.tabArea}>
                    <View style={styles.tab} >                                            <Image style={styles.homeImage} source={{uri : 'https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png'}}/>                        </View>                                                               <Text style={styles.tabText}>Home</Text>                          </View>                                                                                                                                     <View style={styles.tabArea}>                             <View style={styles.tab} ><Image style={styles.fundImage} source={{uri :'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png'}}/>                                                                             </View>                           <Text style={styles.tabText}>Fund</Text>                                                                </View>
                <View style={styles.tabArea}>
                    <View style={styles.tab} >                                            <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png'}}/>
 </View>
                    <Text style={styles.tabText}>Recents</Text>
                </View>
                <View style={styles.tabArea}>                                             <View style={styles.tab} >                                      <Image style={styles.tabImage} source={{uri :'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png'}}/>                                                                             </View>
                    <Text style={styles.tabText}>Profile</Text>
                </View>                                                           </BlurView>
        
   </> );
};

const styles = StyleSheet.create({

	menuCircle: {                                                                                                                                   top: 10,                                                              left: 10,                                                             height: 30,                                                           width: 35,                                                            overflow: 'hidden',                                                   zIndex:3,                                                         },                                                                    menuIcon: {                                                               height: 24,                                                           width: 24,                                                                                                                                  left:8,
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
	    color:'blue',

    },

    flash:{
	    fontSize:30
    },
    body: {
        height: '100%',
        width: '100%',
        top: 0,
        position: 'absolute',
	//backgroundColor:'#F77802',
	
    },
    contentArea: {
        height: 500,
        width: '95%',
        position: 'absolute',
        alignSelf: 'center',
        top: 40,
        backgroundColor: '#EBE2C2',
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
        backgroundColor: '#ddd',
        height: 350,
        width:320,
	alignSelf:'center',
	borderRadius:15,
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
	    top:75,
	    right:20,
	    borderRadius:2,
	    backgroundColor:'yellow',
	    flexDirection:'row',

    },

    bal:{
	    fontSize:12,
	    color:'green',
	    fontWeight:'bold',
	    alignSelf:'center',
	    left:5,
	    
    },

    balance:{
	    fontSize:15,
	    color:'black',
	    alignSelf:'center',
    },
    fund1:{
	    height:50,
	    width:130,
	    borderRadius:15,
	    shadowColor:'black',
	    shadowOffset:{width:0, height:0},
	    shadowRadius:4,
	    elevation:5,
	    shadowOpacity:0.3,

	    withdrawImage:{
		    height:45,
		    width:100,
		    resizeMode:'cover',
		    alignSelf:'center',
		    position:'absolute',


	    },

    },

    addFund:{
	    fontWeight:'bold',
	    position: 'absolute',
	    alignSelf:'center',
	    color:'blue',
	    bottom:5,
    },

    withdraw:{
	    fontWeight:'bold',                                                    position: 'absolute',                                                 alignSelf:'center',                                                   color:'blue',                                                         bottom:5,
    },



    fund2:{
            height:50,
            width:130,
            borderRadius:15,
            shadowColor:'black',
            shadowOffset:{width:0, height:0},
            shadowRadius:4,
            elevation:5,
	    shadowOpacity:0.3,
    },

    recentAccounts:{
	    position:'absolute',
	    top:100,
	    left:30,
	    fontWeight:'bold',
    },


    addAccount:{                                                              position:'absolute',                                                  
	   top :455,                                                      
	    alignSelf:'center',
	fontWeight:'bold',
	color:'blue',
	zIndex:13,
	fontSize:12,
    },

    accountsList:{
	    position:'absolute',
	    top:120,
	    left:10,
	    flex:1,
	    padding:15,
	    justifyContent:'space-around',
	    flexDirection:'column',
	    alignItems:'center',
	    borderRadius:30,
	    shadowOffset:{width:0, height:0},
            shadowRadius:4,
            elevation:5,
            shadowOpacity:0.3,
	    //backgroundColor:'blue',
	    paddingTop:20,
	    paddingBottom:20,
	    
	    

    },

    usedAccount:{
	    height:30,
	    width:200,
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
		    fundImage:{                                                         height: 40,                                                                     width: 60,                                                            top:5,                                                                alignSelf: 'center',                                        position: 'absolute',                                                           resizeMode: 'contain',                                      },                                                                      tabText: {alignSelf:'center',                                             color: '#1C445C',                                                     marginTop: 5,                                                         alignItems: 'center',                                             },





}
				
				);

export default Fund;
