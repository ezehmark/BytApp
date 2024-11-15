import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface networkProps {
  isCard: boolean;
  toggleCard: () => void;
  handleSelectCard:(cardName:string)=> void;
  handleWhich:(cardName:string)=> void;
}

// Define an array of gift cards
const mobileNetworks = [
  { name: "MTN", uri: 'https://i.postimg.cc/JhRWnm0V/mtnIcon.png' },
  { name: "AIRTEL", uri: 'https://i.postimg.cc/ydt1W52m/images-13.png'},
  { name: "GLO", uri: 'https://i.postimg.cc/ZYvYXbyV/globacom-limited-icon-2048x2048-uovm3iz4.png'},
  { name: "9MOBILE", uri: 'https://i.postimg.cc/rwM8d5ZP/images-18.jpg'},

];


const MobileNetworks: React.FC<networkProps> = ({ isCard, toggleCard, handleWhich, handleSelectCard }) => {
  if (!isCard) return null;

  return (
	  <BlurView style={styles.mainBodi}>
    <View style={styles.bodi}>
      <TouchableOpacity onPress={()=>toggleCard()} style={styles.closeBtn}>❌</TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.msg}>Choose Network</Text>

        <View style={styles.contentArea}>
          <ScrollView style={styles.scrollArea}>
            <View style={styles.msgArea}>
              {mobileNetworks.map((network, index) => (
                <TouchableOpacity key={index} style={styles.giftCardBox} onPress={()=>{handleWhich(network.name);handleSelectCard(network.name);}}>
                 <View style={styles.logoCover}> 
		 <Image style={styles.networkLogo} source={{ uri: network.uri }} /></View>
                  <Text style={styles.networkName}>
		  {network.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
	mainBodi:{height:'100%', width:'100%',position:'absolute',zIndex:20,},
  bodi: {
    height: '85%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    top: 25,
    padding: 10,
    backgroundColor: '#28272c',
    left: '5%',
    shadowColor: 'black',
    shadowOffset: { height: 6, width: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 7,
    position:'absolute',
    zIndex:10,
  },
  msg: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    top: 7,
    alignSelf: 'center',
    color: '#3CB2CB',
  },
  closeBtn: {
    height: 25,
    width: 45,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#20a385',
    borderRadius: 10,
    marginLeft: '75%',
    top: -2.5,
    zIndex: 3,
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    borderRadius: 25,
    height: '90%',
    width: '95%',
    justifyContent: 'center',
    backgroundColor: '#30b3bf',
    left: '2.5%',
    top: 35,
  },
  contentArea: {
    position: 'absolute',
    width: '95%',
    height: '90%',
    padding: 20,
    top: 30,
    backgroundColor: '#d7e5d3',
    borderRadius: 25,
    left: '2.5%',
    overflow:'hidden',
  },
  scrollArea: {
    position: 'absolute',
    height: '95%',
    width: '95%',
    alignSelf: 'center',
    top: 4,
    paddingBottom: 40,
  },
  msgArea: {
    position: 'absolute',
    height: 500,
    width: '98%',
    backgroundColor: 'd7e5d3',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignSelf: 'center',
    top: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    gap:10,
  },
  giftCardBox: {
    height: 70,
    width: '90%',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20a385',
    shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
  networkName: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
    position: 'absolute',
    left: 60,
    fontWeight: 'bold',
  },
  logoCover: {
    position: 'absolute',
    height: 40,
    width: 40,
    alignSelf: 'center',
    left: 5,
    borderRadius: 20,
    overflow:'hidden',
    backgroundColor:'black',
    
  },

  networkLogo:{resizeMode:'cover', 
  position:'absolute',
  height:40,
  width:40,
  alignSelf:'center',
  },
});

export default MobileNetworks;



