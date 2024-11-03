import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {BlurView} from 'expo-blur';


const Fund: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.contentArea}>
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

		    <View>


                        <View style={styles.fund1}></View>
                        <View style={styles.fund2}></View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        height: '100%',
        width: '100%',
        top: 0,
        position: 'absolute',
	backgroundColor:'red',
	
    },
    contentArea: {
        height: 600,
        width: '95%',
        position: 'absolute',
        alignSelf: 'center',
        top: 50,
        backgroundColor: '#ccc',
        borderRadius: 30,
	
	
    },
    fundingArea: {
        position: 'absolute',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 15,
        top: 130,
        backgroundColor: '#ddd',
        height: 270,
        width:320,
	alignSelf:'center',
	borderRadius:15,
	shadowColor:'black',
	shadowOffset:{width:0, height:2},
	shadowRadius:2,
	shadowOpacity:0.2,
	elevation:5,
	gap:15,
	
    },

    balArea:{
	    height:20,
	    width:100,
	    justifyContent:'space-around',
	    position: 'absolute',
	    top:80,
	    right:15,
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

    accountsList:{
	    flex:1,
	    padding:15,
	    justifyContent:'space-around',
	    flexDirection:'column',
	    alignItema:'center',
	    borderRadius:30,
	    shadowColor:'black',
	    shadowOffset:{width:0, height:0},
            shadowRadius:4,
            elevation:5,
            shadowOpacity:0.3,
	    backgroundColor:'blue',
	    paddingTop:20,
	    paddingBottom:20,
	    

    },

    usedAccount:{
	    height:40,
	    width:'95%',
    },
});

export default Fund;
