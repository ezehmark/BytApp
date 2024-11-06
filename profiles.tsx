import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['white', '#f5b857']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientContainer}
      >
        <View style={styles.userInfoArea}>

	<View style={styles.userPicCircle}>
	<Image style={styles.userPic} source={{uri:'https://i.postimg.cc/66P9tyfV/IMG-20241018-082659.jpg'}}/>
	</View>

          <View style={styles.userInfo}>
            <View style={styles.infoWritten1}>
              <Text style={styles.userName}>Username:</Text>
              <Text style={styles.userNameValue}>Ezeh Mark</Text>
            </View>
            <View style={styles.infoWritten2}>
              <Text style={styles.rank}>Ranking:</Text>
              <Text style={styles.rankValue}>Level 1 ⭐</Text>
            </View>

	    <View style={styles.infoWritten3}>                                <Text style={styles.userName}>Referral ID:</Text>
              <Text style={styles.userNameValue}>#A1014GG</Text
>                                                                           </View>
          </View>
        </View>

<ScrollView style={styles.moveable}>
    <BlurView style={styles.itemsZone}>                
        <Text style={styles.item1}>User Verification</Text>
        <Text style={styles.item1}>Engage Customer Support</Text>
        <Text style={styles.item1}>Follow Us On ↓</Text>
    </BlurView>
</ScrollView>





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
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradientContainer: { flex: 1 },
  userInfoArea: {
    position: 'absolute',
    height: 100,
    width: '90%',
    marginLeft: '5%',
    borderRadius: 25,
    top: 50,
    backgroundColor: 'red',
    justifyContent: 'space-around',
    flexDirection: 'row',
    zIndex: 1,
    padding:15,
    alignItems:'center',
    
  },

  userPicCircle:{
	  height:80,
	  position:'absolute',
	  width:80,
	  borderRadius:40,
	  backgroundColor:'blue',
	  right:2,
	  
	  overflow:'hidden',
	  right:10,

	  

  },

  userPic:{
	  resizeModw:'contain',
	  height:150,
	  width:100,
	  bottom:30,
  },
  userInfo: {
    position: 'absolute',
    height: '98%',
    width: '55%',
    left: 10,
    justifyContent: 'space-around',
    flexDirection: 'column',
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems:'center',
    overflow:'hidden',
  },
  infoWritten1: {
    height: 25,
    width: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
    
    backgroundColor: '#ccc',
    alignItems:'center',
  },
  userName: {
    color: 'blue',
    fontWeight: 'bold',
  },
  userNameValue: {
    color: 'green',
    fontWeight: 'bold',
  },


  infoWritten2: {
    
    height: 25,
    width: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
    
    backgroundColor: '#ccc',

    alignItems:'center',
  },

  infoWritten3: {                                                   
    height: 25,                                                     width: 150,                                                     justifyContent: 'space-around',
    flexDirection: 'row',                                                                                                   
    backgroundColor: '#ccc',                                        alignItems:'center',                                          },


  rank: {
    color: 'blue',
    fontWeight: 'bold',
  },
  rankValue: {
    color: 'green',
    fontWeight: 'bold',
  },

moveable: {
        height: 400,
        width: '96%',
        position: 'absolute',
        top: 400,
        left: '2%',
        backgroundColor: 'blue',
    },
    itemsZone: {
        // Removed 'absolute' to let the ScrollView manage positioning
        height: 500,
        width: 240,
        justifyContent: 'space-around',
        flexDirection: 'column',
        top: 20,
        paddingBottom: 100,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    item1: {
        height: 80,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        backgroundColor: 'green',
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

