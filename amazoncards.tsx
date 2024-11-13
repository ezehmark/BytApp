import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface cardListProps {
  isList: boolean;
  toggleCardList: () => void;
  onSelectCard:(giftCard:string)=> void;
}

// Define an array of gift cards
const amazonCards = [
  { name: "Australia Amazon E-code (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Australia Amazon No Receipt (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Australia Amazon With Receipt (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Canada Amazon E-code (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Canada Amazon No Receipt (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Canada Amazon With Receipt (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Credit/No Receipt (101-200)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Credit/No Receipt (201-500)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Credit/No Receipt (50-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Debit Receipt (101-200)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Debit Receipt (201-499)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Debit Receipt (50-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon (10-24)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon (25-49)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Cash Receipt (101-200)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Cash Receipt (201-499)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Cash Receipt (50-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "USA Amazon Cash Receipt Single (500)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Germany Amazon E-code (25 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Germany Amazon No Receipt (10-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "Germany Amazon With Receipt (10-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "UK Amazon E-code (10 and above)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "UK Amazon No Receipt (10-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
  { name: "UK Amazon With Receipt (10-100)", uri: 'https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png' },
];


const AmazonCards: React.FC<cardListProps> = ({ isList, toggleCardList, onSelectCard }) => {
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
              {amazonCards.map((amazon, index) => (
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

export default AmazonCards;

