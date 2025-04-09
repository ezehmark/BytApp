import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

interface cardListProps {
  isCard: boolean;
  toggleCard: () => void;
  handleSelectCard: (cardName: string) => void;
  handleWhich: (cardName: string) => void;
}

// Define an array of gift cards
const giftCards = [
  {
    name: "Amazon",
    uri: "https://i.postimg.cc/pdBMKPrx/amazon-gift-card-1.png",
  },
  {
    name: "American Express(AMEX)",
    uri: "https://i.postimg.cc/Zn0hf47h/American-Express-logo-2018-svg.png",
  },
  {
    name: "Apple/iTunes",
    uri: "https://i.postimg.cc/L5HPcZt1/images-22-1.jpg",
  },
  {
    name: "Google Play",
    uri: "https://i.postimg.cc/8c55dddt/google-play-gift-card-online.png",
  },
  {
    name: "Steam Wallet",
    uri: "https://i.postimg.cc/hvLBdf6p/images-34-1.jpg",
  },
  { name: "Walmart", uri: "https://i.postimg.cc/66LgCJTj/images-20.png" },
  {
    name: "eBay",
    uri: "https://i.postimg.cc/D0ygqNYH/ebay-icon-logo-EA65-D4-EEE0-seeklogo-com.png",
  },
  { name: "Sephora", uri: "https://i.postimg.cc/HxS5CkBv/images-34-2.jpg" },
  { name: "Nordstrom", uri: "https://i.postimg.cc/15D0Y6LJ/images-22.png" },
  { name: "Target", uri: "https://i.postimg.cc/ZY6n3ckY/images-24.png" },
  {
    name: "Nike",
    uri: "https://i.postimg.cc/8cwjvpFQ/Picsart-24-11-12-22-33-37-180.jpg",
  },
  { name: "Best Buy", uri: "https://i.postimg.cc/gc59z9tn/images-25.png" },
  { name: "Vanilla Cards", uri: "https://i.postimg.cc/d1gKSgzk/images-35.jpg" },
  {
    name: "Xbox",
    uri: "https://i.postimg.cc/T3TvSVH9/xbox-logo-0-DAE30-CE6-A-seeklogo-com.png",
  },
  { name: "PlayStation", uri: "https://i.postimg.cc/rpz3XQGS/images-36-1.jpg" },
];

const GiftCardsList: React.FC<cardListProps> = ({
  isCard,
  toggleCard,
  handleWhich,
  handleSelectCard,
}) => {
  if (!isCard) return null;

  return (
    <BlurView style={styles.mainBodi}>
      <View style={styles.bodi}>
        <TouchableOpacity onPress={() => toggleCard()} style={styles.closeBtn}>
          ❌
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.msg}>Choose Card Company</Text>

          <View style={styles.contentArea}>
            <ScrollView style={styles.scrollArea}>
              <View style={styles.msgArea}>
                {giftCards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.giftCardBox}
                    onPress={() => {
                      handleWhich(card.name);
                      handleSelectCard(card.name);
                    }}
                  >
                    <View style={styles.logoCover}>
                      {" "}
                      <Image
                        style={styles.giftCardLogo}
                        source={{ uri: card.uri }}
                      />
                    </View>
                    <Text style={styles.giftCardName}>{card.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  mainBodi: { height: "100%", width: "100%", position: "absolute", zIndex: 20 },
  bodi: {
    height: "85%",
    width: "90%",
    alignSelf: "center",
    borderRadius: 30,
    top: 25,
    padding: 10,
    backgroundColor: "#28272c",
    left: "5%",
    shadowColor: "black",
    shadowOffset: { height: 6, width: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 7,
    position: "absolute",
    zIndex: 10,
  },
  msg: {
    fontSize: 17,
    fontWeight: "bold",
    position: "absolute",
    top: 7,
    alignSelf: "center",
    color: "#3CB2CB",
  },
  closeBtn: {
    height: 25,
    width: 45,
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
    marginLeft: "75%",
    top: -2.5,
    zIndex: 3,
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    borderRadius: 25,
    height: "90%",
    width: "95%",
    justifyContent: "center",
    backgroundColor: "black",
    left: "2.5%",
    top: 35,
  },
  contentArea: {
    position: "absolute",
    width: "95%",
    height: "90%",
    padding: 20,
    top: 30,
    backgroundColor: "#5d6262",
    borderRadius: 25,
    left: "2.5%",
    overflow: "hidden",
  },
  scrollArea: {
    position: "absolute",
    height: "95%",
    width: "95%",
    alignSelf: "center",
    top: 4,
    paddingBottom: 40,
  },
  msgArea: {
    position: "absolute",
    height: 1500,
    width: "98%",
    backgroundColor: "#5d6262",
    justifyContent: "space-around",
    flexDirection: "column",
    alignSelf: "center",
    top: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
    gap: 10,
  },
  giftCardBox: {
    height: 70,
    width: "90%",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3CB2CB",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  giftCardName: {
    color: "black",
    fontSize: 15,
    alignSelf: "center",
    position: "absolute",
    left: 40,
    fontWeight: "bold",
  },
  logoCover: {
    position: "absolute",
    height: 30,
    width: 30,
    alignSelf: "center",
    left: 5,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "black",
  },

  giftCardLogo: {
    resizeMode: "cover",
    position: "absolute",
    height: 30,
    width: 35,
    alignSelf: "center",
  },
});

export default GiftCardsList;
