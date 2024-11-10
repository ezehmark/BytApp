import React, {useState} from 'react';
import { TextInput, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const SellGiftCards: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toggleMenu = route.params?.toggleMenu;
  const toggleMsg = route.params?.toggleMsg;
  const toggleCardList= route.params?.toggleCardList;
  const[giftCardType, setGiftCardType] = useState("");
  

  const [quantity, setQuantity]=useState("");

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={['white', '#f5b857']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientContainer}
        >
          <View style={styles.body}>
            <Text style={styles.topTitle}>Sell Gift Cards</Text>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>
              <Image
                style={styles.menuIcon}
                source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMsg} style={styles.infoCircle}>
              <Image
                style={styles.bellIcon}
                source={{ uri: 'https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png' }}
              />
            </TouchableOpacity>

            <View style={styles.contentArea}>

	    <View style={styles.topCover}/>
              <View style={styles.contentTitle}>
                <Text style={styles.quickTitle}>Simple and Fast</Text>
                <Text style={styles.flash}>⚡</Text>
              </View>

	      <ScrollView style ={styles.scrollView}>



              <View style={styles.giftCardForm}>
                  <TouchableOpacity
                    style={styles.giftCardBox}>
		    <Text style={styles.selectGiftCard}>Select Gift Card</Text><Image source={{uri:'https://i.postimg.cc/bdcnJBLZ/Picsart-24-11-09-18-11-45-769.png'}} style={styles.dropDownIcon}/>
              </TouchableOpacity>

	      <TouchableOpacity
	      onPress={toggleCardList}
	 style={styles.giftCardBox}>                                     <Text style={styles.selectGiftCard}>Select Type</Text><Image source={{uri:'https://i.postimg.cc/bdcnJBLZ/Picsart-24-11-09-18-11-45-769.png'}} style={styles.dropDownIcon}/>                                                                          </TouchableOpacity>
	      

	      <TextInput style={styles.quantityInput} name='amount' value={quantity} placeholder='Quantity' color='black' placeholderTextColor='#999' onChangeText={setQuantity}/>


	      <View                                                 style={styles.amountBox}>                                     <Text style={styles.amountText}>
	      ₦ 00</Text>
	      </View>
	      </View>

	      </ScrollView>

              <View style={styles.cardsType}>
                <View style={styles.physical}>
                  <Image
                    style={styles.addImage}
                    source={{ uri: 'https://i.postimg.cc/8PZB3x3H/file-g-IPIy-HIkhon58isq-Be-Plahat.webp' }}
                  />
                  <Text style={styles.addFund}>Physical</Text>
                </View>
		<Text style={styles.andText}>and</Text>
                <View style={styles.ecode}>
                  <Image
                    style={styles.withdrawImage}
                    source={{ uri: 'https://i.postimg.cc/nrqwLKzV/file-Czt3-RAx-TFDidojyun-BG3-Gvz6.webp' }}
                  />
                  <Text style={styles.ecodeText}>E-Code</Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      <BlurView style={styles.bottomTab}>
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.tabArea}>
          <View style={styles.tab}>
            <Image
              style={styles.homeImage}
              source={{ uri: 'https://i.postimg.cc/N0KGCxqB/Picsart-24-11-01-00-52-07-164.png' }}
            />
          </View>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('fund')} style={styles.tabArea}>
          <View style={styles.tab}>
            <Image
              style={styles.fundImage}
              source={{ uri: 'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png' }}
            />
          </View>
          <Text style={styles.tabText}>Fund</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('recents')} style={styles.tabArea}>
          <View style={styles.tab}>
            <Image
              style={styles.tabImage}
              source={{ uri: 'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png' }}
            />
          </View>
          <Text style={styles.tabText}>Recents</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('profiles')} style={styles.tabArea}>
          <View style={styles.tab}>
            <Image
              style={styles.tabImage}
              source={{ uri: 'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png' }}
            />
          </View>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </BlurView>
    </>
  );
};

const styles = StyleSheet.create({
  topTitle:{
	fontSize:20,
	fontWeight:'bold',
	position:'absolute',
	alignSelf:'center',
	top:5,},

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
	    top:15,
	    alignSelf:'center',
	    justifyContent:'space-around',
	    width:300,
	    height:30,
	    flexDirection:'row',
	    alignItems:'center',
	    zIndex:4,
	    
    },

    topCover:{
    position:'absolute',
    height:120,
    width:'100%',
    backgroundColor:'#5d6262',
    top:0,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    zIndex:1,
    },

    quickTitle:{
	    fontSize:20,
	    fontWeight:'bold',
	    color:'#3CB2CB',
	    zIndex:3,

    },

    flash:{
	    fontSize:25
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
        width: '98%',
        position: 'absolute',
        alignSelf: 'center',
        top: 50,
        backgroundColor: '#374550',
        borderRadius: 30,
	marginBottom:50,
	overflow:'hidden',

	
	
    },


    cardsType:{
	    flex:1,
	    position: 'absolute',                                           justifyContent: 'space-around',                                 flexDirection: 'row',                                           gap:10,
	    top:55,
	    alignSelf:'center',
	    alignItems:'center',
	    zIndex:4,

    },

    scrollView:{
    height:500,
    width:'100%',
    position:'absolute',
    borderRadius:25,
    marginBottom:200,


    },

    physical:{
	    height:50,
	    width:110,
	    borderRadius:20,
	    shadowColor:'black',
	    shadowOffset:{width:0, height:0},
	    shadowRadius:4,
	    elevation:5,
	    backgroundColor:'#3CB2CB',
	    shadowOpacity:0.3,
    overflow:'hidden',},
	ecode:{                                                                 height:50,                                                      width:110,                                                      borderRadius:20,                                                shadowColor:'black',                                            shadowOffset:{width:0, height:0},                               shadowRadius:4,                                                 elevation:5,                                                    shadowOpacity:0.3,
		backgroundColor:'#548C94',
		overflow:'hidden',
	},

	ecodeText:{                                                              fontWeight:'bold',                                                    
		position: 'absolute',                                                
		alignSelf:'center',                                                 
		color:'white',                                                        
		bottom:4.5,                    },



	andText:{
	color:'#feb819',
	height:36,
	width:36,
	borderRadius:18,
	textAlign:'center',
	padding:5,
	whiteSpace:'nowrap',
	paddingTop:8,
	borderWidth:0.5,
	borderColor:'#feb819',


	},




	addImage:{                                                        
		height:50,                                                      width:110,                                                      resizeMode:'cover',                                           alignSelf:'center',                                             position:'absolute',},







	    withdrawImage:{
	
		    height:50,
		    width:110,
		    resizeMode:'cover',
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






    addAccount:{                                                              position:'absolute',                                                  
	   top :455,                                                      
	    alignSelf:'center',
	fontWeight:'bold',
	color:'#3CB2CB',
	zIndex:13,
	fontSize:12,
    },

    giftCardForm:{
	    position:'absolute',
	    top:130,
	    
	    height:450,
	    width:'90%',
	    justifyContent:'space-around',
	    flexDirection:'column',
	    alignItems:'center',
	    borderRadius:30,
            elevation:5,
	    backgroundColor:'#ccc',
	    paddingTop:20,
	    paddingBottom:20,
	    paddingVertical:30,
	    alignSelf:'center',
	    alignItems:'center',
	    spacing:20,
	    marginBottom:100,
	    
	    

    },

    giftCardBox:{
	    height:60,
	    width:'85%',
	    backgroundColor:'black',
	    borderRadius:20,
	    justifyContent:'space-around',
	    flexDirection:'row',
	    alignItems:'center',

    },

    amountBox:{                                                           height:60,                                                      width:'85%',                                                    backgroundColor:'#374550',                                        borderRadius:20,                                                justifyContent:'space-around',                                  flexDirection:'row',                                            alignItems:'center',                                                                                                    },

    amountText:{
    fontSize:20,                                                    color:'#feb819',},

    selectGiftCard:{
    fontSize:20,
    color:'#ccc',},

    quantityInput:{
    height:60,
    width:'85%',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:20,
    borderWidth:1,
    borderColor:'blue',
    paddingLeft:10,
    },
    dropDownIcon:{
    height:10,
    width:15,
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





});

export default SellGiftCards
