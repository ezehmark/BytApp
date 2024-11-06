import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient}from 'expo-linear-gradient';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
<View style={styles.container}>                                                        
<LinearGradient                                                                         
colors={['white', '#f5b857']}                                                           
start={{x:0, y:0}}                                                                      
end={{x:0, y:1}}                                                                       
style={styles.gradientContainer}>                                                       


<View style={styles.userInfoArea}>
<View style={styles.userInfo}>

<View style={styles.infoWritten1}>
<Text style={styles.userName}>Username:</Text>
<Text style={styles.userNameValue}>Ezeh Mark</Text>
</View>


<View style={styles.infoWritten2}>
<Text style={styles.rank}>Rank</Text>
<Text style={styles.rankValue}>Level 1 ⭐</Text>
</View>

</View>

</View>

<View style={styles.profilePic}></View>

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

            </LinearGradient>                                                                   </View>
    </>
  );
};

const styles = StyleSheet.create({

	userInfoArea:{
		position:'absolute',
		height:200,
		width:300,
		marginLeft:'10%',
		borderRadius:25,
		top:20,
		backgroundColor:'red',
		justifyContent:'space-around',
		flexDirection:'row',
		zIndex:1,

	},


	userInfo:{

		position:'absolute',
		height:'98%',
		width:'70%',
		marginLeft:'10%',
		justifyContent:"space-around",
		flexDirection:'column',
		borderRadius:30,
		backgroundColor:"#fff",


	},

	infoWritten1:{
	position:'absolute',
	height:50,
	width:150,
	justifyContent:'space-around',
	flexDirection:'row',
	top:5,
	backgroundColor:'#ccc',

	},

	userName:{
		color:'blue',
		fontWeight:'bold',

	},

	userNameValue:{
		color:'green',
		fontWeight:'bold',

	},


	infoWritten2:{                                                 
		position:'absolute',                                            height:50,                                                      width:150,                                                      justifyContent:'space-around',                                  flexDirection:'row',                                            top:5,                                                          backgroundColor:'#ccc',                                                                                                         },                                                                                                                              
		rank:{                                                              color:'blue',                                                   fontWeight:'bold',                                                                                                      },                                                                                                                              rankValue:{                                                         color:'green',                                                  fontWeight:'bold',
                                                                        },



	



	gradientContainer:{
                

		height:'100%',
		width:'100%',
        },
	
	container:{flex:1},

	body: {                                                                                    
		height: '100%',                                                                        
		width: '100%',                                                                         
		top: 0,                                                                                
		position: 'absolute',                                                                  
		backgroundColor:' #f5b857',
	},
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 70,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D3DEE8',
    zIndex: 5,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingBottom: 5,
  },
  tabArea: {
    height: 60,
    width: 60,
    padding: 4,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  tab: {
    height: 40,
    width: 50,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  homeImage: {
    height: 35,
    width: 45,
    top: 5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  fundImage: {
    height: 35,
    width: 45,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  tabImage: {
    height: 35,
    width: 45,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Profile;
