import{Image, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import {BlurView} from 'expo-blur';

import {LinearGradient} from 'expo-linear-gradient';

interface cardListProps{
	isList:boolean;
	toggleCardList:()=>void;
}

const GiftCardsList:React.FC<cardListProps>=({isList, toggleCardList})=>{
    
    if(!iList) return null;
    return(
        
        <View style={styles.bodi}>

	<TouchableOpacity onPress={toggleCardList}style={styles.closeBtn}>❌</TouchableOpacity>
            
            <View

	    style={styles.container}>
	    <Text style={styles.msg}>Gift Card Type</Text>
                
                <View style={styles.contentArea}>
                    
                    <ScrollView
		    style={styles.scrollArea}>
                       <View style={styles.msgArea}>


		       <TouchableOpacity style={styles.giftCardBox}>
		       <Image style={styles.giftCardLogo} source={{uri:'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png'}}/>
                        <View
			style={styles.giftCardName}>Australia Amazon E-code (25 and above)</View>
			</TouchableOpacity>
                       </View> 
                        </ScrollView>
                    </View>
                </View>
            
        </View>
        
        
    );
    
}

const styles =StyleSheet.create({
    bodi:{
    
    position:'absolute',
    height:'85%',
    width:'90%',
    alignSelf:'center',
    borderRadius:30,
    top:25,
    padding:10,
    backgroundColor:'#28272c',
    left:'5%',
    shadowColor:'black',

    shadowOffset:{height:6, width:3},                     shadowOpacity:0.6,

    shadowRadius:8,

    elevation:7,
    
    
        
    },

    msg:{
	    fontSize:17,
	fontWeight:'bold',
	position:'absolute',
	top:7,
	alignSelf:'center',
	color:'#3CB2CB',


    },

    closeBtn: {       
	    height:25,

	    width:45,
	    textAlign: 'center',                                 
	    color: 'white',                                       
	    backgroundColor: 'black',                             
	    borderRadius: 10,                                     
	    marginLeft: '75%',                                      
	    top: -2.5,                                              
	    zIndex: 3,                                            
	    whiteSpace:'nowrap',
	    fontSize:10,
	    justifyContent:'center',
	    alignItems:'center',


    },
    
    container:{
        position:'absolute',
        borderRadius:25,
        height:'90%',
        width:'95%',
        justifyContent:'center',
	backgroundColor:'black',
	left:'2.5%',
	top:35,
        
    },
    
    contentArea:{
        position:'absolute',
        width:'95%',
        height:'90%',
        padding:20,
        top:30,
	backgroundColor:'#5d6262',
	borderRadius:25,
	left:'2.5%',
    },
    scrollArea:{
        position:'absolute',
        height:'95%',
	width:'95%',
	
	alignSelf:'center',
	top:4,
	paddingBottom:40,

    },

	msgArea:{                                                
		position:'absolute',                                
		height:580,                    
		width:'98%',                                          
		backgroundColor:'#5d6262',                               
		justifyContent:'space-around',                        
		flexDirection:'column',
		alignSelf:'center',
		top:2,
		borderTopRightRadius:15,
		borderTopLeftRadius:15,
		alignItems:'center',
    },

    giftCardBox:{
        height:80,
        width:'90%',
        borderRadius:20,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
	backgroundColor:'#3CB2CB',
	padding:5,

	

     
    },

    giftCardName:{
	    color:'black',
	    fontSize:15,
	    alignSelf:'center',
	    position:'absolute',
	    left:40,
	    fontWeight:'bold',

    },
    giftCardLogo:{
	    position:'absolute',
    height:20,
    width:30,
    alignSelf:'center',
    left:5,
    borderRadius:5,
    }
});


export default GiftCardsList;


