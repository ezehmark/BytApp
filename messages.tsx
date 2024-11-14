import{Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import {BlurView} from 'expo-blur';

import {LinearGradient} from 'expo-linear-gradient';

interface messagesProps{
	isMsg:boolean;
	toggleMsg:()=>void;
}

const Messages:React.FC<messagesProps>=({isMsg, toggleMsg})=>{

    const messages=[{message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},
	    

	    {message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},
    {message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},
    {message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},
    {message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},                                                                 
    {message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},         {message:"You are welcome to FLASH ⚡. The No. 1 Fintech App for all important services. Enjoy our fast service app."},
    ]

    if(!isMsg) return null;
    return(
        
        <View style={styles.bodi}>

	<TouchableOpacity onPress={toggleMsg}style={styles.closeBtn}>Close ❌</TouchableOpacity>
            
            <LinearGradient
	    colors={['white', '#3CB2CB']}                         start={{x:0, y:0}}                                    end={{x:0, y:1}}

	    style={styles.container}>
	    <Text style={styles.msg}>Messages</Text>
                
                <View style={styles.contentArea}>
                    
                    <ScrollView
		    style={styles.scrollArea}>
                       <View style={styles.msgArea}> 
		       
		       {messages.map((item, index)=><View key={index}
				    
			style={styles.msgBox}>{item.message}</View>                                                                                                             )} 
				     </View>
                       
                        </ScrollView>
                    </View>
                </LinearGradient>
            
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
    backgroundColor:'#3CB2CB',
    left:'5%',
    shadowColor:'black',

    shadowOffset:{height:6, width:3},                     
    shadowOpacity:0.6,

    shadowRadius:8,

    elevation:7,

    
    
        
    },

    msg:{
	    fontSize:22,
	fontWeight:'bold',
	position:'absolute',
	top:10,
	alignSelf:'center',
	color:'black',


    },

    closeBtn: {                                               
	    height:30,

	    width:70,
	    textAlign: 'center',                                  padding: 10,                                          color: 'white',                                       backgroundColor: 'black',                             borderRadius: 10,                                     marginLeft: 185,                                      top: -4,                                              zIndex: 3,                                            whiteSpace:'nowrap',
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
	backgroundColor:'white',
	left:'2.5%',
	top:45,
        
    },
    
    contentArea:{
        position:'absolute',
        width:'95%',
        height:'85%',
        padding:20,
        top:50,
	backgroundColor:'#ddd',
	borderRadius:25,
	left:'2.5%',
    },
    scrollArea:{
        position:'absolute',
        height:'95%',
	width:'90%',
	
	alignSelf:'center',
	top:4,
	paddingBottom:40,

    },

	msgArea:{                                               
		position:'absolute',                                  
		                                 
		flex:1,                                         
		backgroundColor:'#ddd',                             
		justifyContent:'space-around',                        
		flexDirection:'column',
		alignSelf:'center',
		top:2,
		borderTopRightRadius:15,
		borderTopLeftRadius:15,
		paddingBottom:50,
		gap:15,
    },
    msgBox:{
        height:80,
        width:'90%',
        borderRadius:20,
        padding:15,
        justifyContent:'left',
        alignItems:'center',
	backgroundColor:'#3CB2CB',
	color:'black',
	fontSize:12,
	shadowColor:'black',
	shadowOpacity:0.6,
	elevation:4,
	shadowOffset:{height:1,width:0.5},
	shadowRadius:5,
	alignSelf:'center',

     
    },
    
});


export default Messages

