import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation, useRoute} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile: React.FC = () => {
	const route = useRoute();
  const navigation = useNavigation();
  const toggleMenu =route.params.toggleMenu;
  const toggleMsg=route.params.toggleMsg;

  return (
    <View style={styles.container}>
    <TouchableOpacity 
    onPress={toggleMenu} style={styles.menuCircle}>                                                     
    <Image style={styles.menuIcon} source={{ uri: 'https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png' }} /> </TouchableOpacity>

    <TouchableOpacity onPress={toggleMsg} style={styles.infoCircle}>
    <Image style={styles.bellIcon} source={{ uri: 'https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png' }} />                   </TouchableOpacity>
      <LinearGradient
        colors={['white', '#f5b857']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientContainer}>
        <View style={styles.userInfoArea}>
	<View style={styles.picContainer}>

	<View style={styles.userPicCircle}>
	<Image style={styles.userPic} source={{uri:'https://i.postimg.cc/66P9tyfV/IMG-20241018-082659.jpg'}}/>
	</View>
	</View>

          <View style={styles.userInfo}>
            <View style={styles.infoWritten1}>
              <Text style={styles.userName}>
	      Username:</Text>
              <Text 
	      style={styles.userNameValue}>Ezeh Mark</Text>
            </View>
            <View style={styles.infoWritten2}>
              <Text style={styles.rank}>Ranking:</Text>
              <Text style={styles.rankValue}>
	      Level 1 ⭐</Text>
            </View>

	    <View style={styles.infoWritten3}>                                <Text style={styles.userName}>Referral ID:</Text>
              <Text style={styles.userNameValue}>
	      #A1014GG</Text>                                                                           </View>
          </View>
        </View>

    <LinearGradient
    colors={['rgba(0,0,0,0.2)','rgba(0,0,0,1)', '#8cd5cd',]}
    start={{x:0, y:0}}
    end={{x:0,y:1}}
    style={styles.itemsZone}>                
        <Text style={styles.item1}>User Verification</Text>
        <Text style={styles.item1}>Engage Customer Support </Text>
        <Text style={styles.item3}>Follow Us On ↓</Text>

<TouchableOpacity
style={styles.socialIcons}>                    
<View onPress={navigation.navigate('https:x.com')} style={styles.icon1}>                                <Image style={styles.iconImg} source ={{uri: 'https://i.postimg.cc/Pr5HZ3gT/Picsart-24-11-07-07-24-41-438.png' }}/></View>                                                       <View style={styles.icon1}><Image style={styles.iconImg} source ={{uri: 'https://i.postimg.cc/QC7PD7P4/Picsart-24-11-07-07-18-09-134.png' }}/></View>                      
<View style={styles.icon1}><Image style={styles.iconImg} source ={{uri: 'https://i.postimg.cc/tJ15GH19/2021-Facebook-icon-svg.png' }}/></View>                         </TouchableOpacity>
    </LinearGradient>








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

          <TouchableOpacity 
	  onPress={() => navigation.navigate('fund')} style={styles.tabArea}>
            <View style={styles.tab}>
              <Image style={styles.fundImage}
                source={{ uri: 'https://i.postimg.cc/3RD6dnVS/Picsart-24-11-01-02-14-35-571.png' }}/>
            </View>
            <Text style={styles.tabText}>Fund</Text>
          </TouchableOpacity>

          <TouchableOpacity 
	  onPress={() => navigation.navigate('recents')} style={styles.tabArea}>
            <View style={styles.tab}>
              <Image style={styles.tabImage}
                source={{ uri: 'https://i.postimg.cc/RZHzKTXL/Picsart-24-11-01-05-09-49-049.png' }}/>
            </View>
            <Text style={styles.tabText}>Recents</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profiles')} style={styles.tabArea}>
            <View style={styles.tab}>
              <Image
                style={styles.tabImage}
                source={{ uri: 'https://i.postimg.cc/rs3PwBXX/Picsart-24-11-01-05-26-01-447.png' }}/>
            </View>
            <Text style={styles.tabText}>Profile</Text>
          </TouchableOpacity>
        </BlurView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCircle: {
    top: 6,
    left: 10,
    height: 30,
    width: 35,
    overflow: 'hidden',
    zIndex: 3,
  },
  menuIcon: {
    height: 24,
    width: 24,
    left: 8,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  userInfoArea: {
    position: 'absolute',
    height: 105,
    width: '88%',
    left: '6%',
    borderRadius: 25,
    top: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    zIndex: 1,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
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
    zIndex: 3,
  },
  bellIcon: {
    height: 25,
    width: 25,
    left: 1,
  },
  picContainer: {
    height: 95,
    width: 94,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    position: 'absolute',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    right: 2,
  },
  userPicCircle: {
    height: 76,
    position: 'absolute',
    width: 76,
    borderRadius: 38,
    backgroundColor: 'blue',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#8cd5cd',
  },
  userPic: {
    resizeMode: 'contain',
    height: 150,
    width: 100,
    bottom: 55,
    right:17,
  },
  userInfo: {
    position: 'absolute',
    height: 95,
    width: '65%',
    left: 2,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#000',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  infoWritten1: {
    height: 25,
    width: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#adafa4',
    borderWidth: 1,
  },
  userName: {
    color: '#ccc',
    fontWeight: 'bold',
  },
  userNameValue: {
    color: '#8cd5cd',
    fontWeight: 'bold',
  },
  infoWritten2: {
    height: 25,
    width: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#adafa4',
    borderWidth: 1,
  },
  infoWritten3: {
    height: 25,
    width: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#adafa4',
    borderRadius: 10,
    borderWidth: 1,
  },
  rank: {
    color: '#ccc',
    fontWeight: 'bold',
  },
  rankValue: {
    color: '#8cd5cd',
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
    position: 'absolute',
    height: 400,
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'column',
    top: 160,
    paddingBottom: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    left: '5%',
    padding: 20,
    alignItems: 'center',
  },
  item1: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#8cd5cd',
    borderRadius: 10,
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  item3: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  socialIcons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 60,
    width: '80%',
    alignSelf: 'center',
  },
  icon1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { height: 2, width: 1 },
    elevation: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    resizeMode: 'cover',
    height: 48,
    width: 48,
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



