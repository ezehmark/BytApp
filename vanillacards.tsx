import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface vanillaProps {
  isList: boolean;
  toggleCardList: () => void;
  onSelectCard:(giftCard:string)=> void;
}

// Define an array of gift cards
const vanillaCards = [
  { name: "Australia OneVanilla Visa/Mastercard  (100 and above)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "Australia OneVanilla Visa/Mastercard (50 to 99)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "Canada OneVanilla Visa/Mastercard (100 and 199)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "Canada OneVanilla Visa/Mastercard (200 and above)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "Canada OneVanilla Visa/Mastercard (50 to 99)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "UK OneVanilla Visa/Mastercard (100 and 150)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "USA OneVanilla Visa/Mastercard (100 and 299)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "USA OneVanilla Visa/Mastercard (25 to 49)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

  { name: "USA OneVanilla Visa/Mastercard (300 to 399)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

{ name: "USA OneVanilla Visa/Mastercard (400 and above)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

{ name: "USA OneVanilla Visa/Mastercard (50 to 99)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

{ name: "USA OneVanilla Visa/Mastercard E-card(100 and 299)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},

{ name: "USA OneVanilla Visa/Mastercard E-card (300 and above)", uri: 'https://i.postimg.cc/d1gKSgzk/images-35.jpg'},
];


const VanillaCards: React.FC<vanillaProps> = ({ isList, toggleCardList, onSelectCard }) => {
  if (!isList) return null;

  return (
	  <BlurView style={styles.mainBodi}>
    <View style={styles.bodi}>
      <TouchableOpacity onPress={()=>toggleCardList()} style={styles.closeBtn}>❌</TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.msg}>Gift Card Type</Text>

        <View style={styles.contentArea}>
          <ScrollView style={styles.scrollArea}>
            <View style={styles.msgArea}>
              {vanillaCards.map((amazon, index) => (
                <TouchableOpacity key={index} style={styles.giftCardBox} onPress={()=>onSelectCard(amazon.name)}>

		<View style={styles.logoCover}><Image style={styles.giftCardLogo} source={{ uri: amazon.uri }} /></View>


                  <Text style={styles.giftCardName}>{amazon.name}</Text>
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
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    left: '2.5%',
    top: 35,
  },
  contentArea: {
    position: 'absolute',
    width: '95%',
    height: '90%',
    padding: 20,
    top: 30,
    backgroundColor: '#5d6262',
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
    height: 1500,
    width: '98%',
    backgroundColor: '#5d6262',
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
    backgroundColor: '#3CB2CB',
    shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
  giftCardName: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
    position: 'absolute',
    left: 40,
    fontWeight: 'bold',
  },
logoCover: {                                                      position: 'absolute',                                           height: 30,                                                     width: 30,                                                      alignSelf: 'center',                                            left: 5,                                                        borderRadius: 15,                                               overflow:'hidden',                                              backgroundColor:'black',                                                                                                      },                                                                                                                              giftCardLogo:{resizeMode:'cover',                               position:'absolute',                                            height:30,                                                      width:35,                                                       alignSelf:'center',                                             },
});

export default VanillaCards;


