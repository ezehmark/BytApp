import React from 'react';
import { View, StyleSheet } from 'react-native';

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
        borderRadius: 20,
	
	
    },
    fundingArea: {
        position: 'absolute',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 15,
        top: 130,
        backgroundColor: '#ddd',
        height: 270,
        width:300,
	alignSelf:'center',
	borderRadius:15,
	shadowColor:'black',
	shadowOffset:{width:0, height:2},
	shadowRadius:2,
	shadowOpacity:0.2,
	elevation:5,
	
    },

    balArea:{
	    height:50,
	    width:200,
	    justifyContent:'space-around',
	    position: 'absolute',
	    top:150,
	    right:5,
	    borderRadius:2,

    },

    bal:{
	    fontSize:8,
	    color:'#ddd',
	    
    },

    balance:{
	    fontSize:13,
	    color:'black',
    },
    fund1:{
	    height:50,
	    width:100,
	    borderRadius:15,
	    shadowColor:'black',
	    shadowOffset:{width:0, height:0},
	    shadowRadius:4,
	    elevation:5,
    },

    fund2:{
            height:50,
            width:100,
            borderRadius:15,
            shadowColor:'black',
            shadowOffset:{width:0, height:0},
            shadowRadius:4,
            elevation:5,
    },
});

export default Fund;
