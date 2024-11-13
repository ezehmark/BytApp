import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface applCardProps {
  isList: boolean;
  toggleCardList: () => void;
  onSelectCard:(giftCard:string)=> void;
}

// Define an array of gift cards
const appleCards = [
  { name: "Austria  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Austria  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Australia  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Australia  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Belgium  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Belgium  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Brazil  Apple/iTunes E-code (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Brazil  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Canada  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Canada  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Denmark  Apple/iTunes E-code (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Denmark  Apple/iTunes Physical (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Australia  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Finland  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Finland  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "France  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "France  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Australia  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Germany  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Germany  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Greece  Apple/iTunes E-code (25 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Greece  Apple/iTunes Physical (25 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Ireland  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Ireland  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Italy  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Italy  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Luxembourg  Apple/iTunes E-code (25 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Luxembourg  Apple/iTunes Physical (25 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Mexico  Apple/iTunes Physical (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Netherlands  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Netherlands  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "New Zealand  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "New Zealand  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Norway  Apple/iTunes E-code (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Norway  Apple/iTunes Physical (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Poland  Apple/iTunes Physical (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Portugal  Apple/iTunes E-code (25 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Portugal  Apple/iTunes Physical (25 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Singapore  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Singapore  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Spain  Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Spain  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Swedish  Apple/iTunes E-code (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Swedish  Apple/iTunes Physical (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Switzerland Apple/iTunes E-code (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "Switzerland  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "UAE  Apple/iTunes E-code (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "UAE  Apple/iTunes Physical (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "UK  Apple/iTunes E-code (100 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "UK  Apple/iTunes Physical (10 to 499)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "UK  Apple/iTunes Physical (50 to 500)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes E-code (10 to 99)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes E-code (100 to 500)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Horizontal  Physical (10 to 99)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Horizontal Physical (100 to 450)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Physical (301 to 499)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "  Apple/iTunes Physical (50 and above)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Horizontal Physical (500)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Physical (101 to 199)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Physical (201 to 299)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Physical SLOW (500)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

  { name: "USA  Apple/iTunes Vertical Physical (150, 250, 350, 450)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},


  { name: "USA  Apple/iTunes Vertical Physical (10 to 49, 51 to 99)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

{ name: "USA  Apple/iTunes Vertical Physical (100, 200, 300, 400)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

{ name: "USA  Apple/iTunes Vertical Physical (50)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

{ name: "USA  Apple/iTunes Vertical Physical (500)", uri: 'https://i.postimg.cc/L5HPcZt1/images-22-1.jpg'},

];


const AppleCards: React.FC<appleCardProps> = ({ isList, toggleCardList, onSelectCard }) => {
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
              {appleCards.map((amazon, index) => (
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

export default AppleCards;


