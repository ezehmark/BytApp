import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import GiftCardsList from "./giftcardslist.tsx";
import AmazonCards from "./amazoncards.tsx";
import AppleCards from "./applecards.tsx";
import AmxCards from "./amxcards.tsx";
import WalmartCards from "./walmartcards.tsx";
import EbayCards from "./ebaycards.tsx";
import SteamCards from "./steamcards.tsx";
import VanillaCards from "./vanillacards.tsx";
import GooglePlayCards from "./googleplaycards.tsx";
import * as ImagePicker from "expo-image-picker";

const BuyGiftCard1: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const toggleMenu = route.params?.toggleMenu;
  const toggleMsg = route.params?.toggleMsg;
  const[rate,setRate]=useState(1650);

  const [cardList, setCardList] = useState(false);
  const toggleCardList = () => {
    setCardList((init) => !init);
  };

  const [amount, setAmount] = useState("0.00");

  const [quantity, setQuantity] = useState("");

  const handleRate = (text: string) => {
    const amountFinal = Number(text) * 1520;
    setAmount(amountFinal);
    if (isNaN(amountFinal)) {
      setAmount("Enter numbers only");
    } else {
      setAmount(amountFinal);
    }
  };

  const [isCard, setIsCard] = useState(false);
  const toggleCard = () => {
    setIsCard((prev) => !prev);
  };

  const [cardType, setCardType] = useState("Choose Card");

  const handleSelectCard = (cardName) => {
    setCardType(cardName);
    setGiftCardType("Select Type");
    toggleCard();
  };

  const [giftCardType, setGiftCardType] = useState("Select Type");
  const onSelectCard = (giftCard) => {
    setGiftCardType(giftCard);
    toggleCardList();
  };

  const [whichIsSelected, setWhichIsSelected] = useState("amazon");

  const handleWhichIsSelected = (cardName) => {
    setWhichIsSelected(cardName);
  };

  return (
    <>
      {isCard && (
        <GiftCardsList
          isCard={isCard}
          toggleCard={toggleCard}
          handleSelectCard={handleSelectCard}
          handleWhich={handleWhichIsSelected}
        />
      )}

      {cardList && whichIsSelected === "Amazon" && (
        <AmazonCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}

      {cardList && whichIsSelected === "Apple/iTunes" && (
        <AppleCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}

      {cardList && whichIsSelected === "American Express(AMEX)" && (
        <AmxCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}

      {cardList && whichIsSelected === "Walmart" && (
        <WalmartCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}
      {cardList && whichIsSelected === "eBay" && (
        <EbayCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}
      {cardList && whichIsSelected === "Steam Wallet" && (
        <SteamCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}

      {cardList && whichIsSelected === "Vanilla Cards" && (
        <VanillaCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}

      {cardList && whichIsSelected === "Google Play" && (
        <GooglePlayCards
          isList={cardList}
          toggleCardList={toggleCardList}
          onSelectCard={onSelectCard}
        />
      )}

      <View style={styles.container}>
        <LinearGradient
          colors={["white", "#f5b857"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientContainer}
        >
          <View style={styles.body}>
            <Text style={styles.topTitle}>Buy Gift Cards</Text>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>
              <Image
                style={styles.menuIcon}
                source={{
                  uri: "https://i.postimg.cc/ZnGwS6pJ/Picsart-24-11-01-05-41-03-753.png",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMsg} style={styles.infoCircle}>
              <Image
                style={styles.bellIcon}
                source={{
                  uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",
                }}
              />
            </TouchableOpacity>

            <View style={styles.contentArea}>
              <View style={styles.topCover} />
              <View style={styles.contentTitle}>
                <Text style={styles.quickTitle}>Simple, Secure and Fast!</Text>
                <Text style={styles.flash}>⚡</Text>
              </View>

              <ScrollView style={styles.scrollView}>
                <View style={styles.giftCardForm}>
                  <TouchableOpacity
                    onPress={() => toggleCard()}
                    style={styles.giftCardBox}
                  >
                    <Text style={styles.selectGiftCard}>{cardType}</Text>
                    <Image
                      source={{
                        uri: "https://i.postimg.cc/bdcnJBLZ/Picsart-24-11-09-18-11-45-769.png",
                      }}
                      style={styles.dropDownIcon}
                    />
                  </TouchableOpacity>

                  <TextInput
                    style={styles.quantityInput}
                    returnKeyType={"Done"}
                    placeholder="Quantity"
                    color="black"
                    placeholderTextColor="#999"
                    onChangeText={(text) => {
                      handleRate(text);
                    }}
                  />

                  <View style={styles.amountBox}>
                    
                    <Text style={styles.amountText}>
                      ₦{amount.toLocaleString("en-US")}
                    </Text>
                  </View>

                  <View style={styles.buyBox}>
                    
                    <Text style={styles.buyText}> Buy Now</Text>
                  </View>
                  <Text style={styles.rate}>₦{rate.toLocaleString('en-us')}</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  topTitle: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    top: 8,
  },

  infoCircle: {
    position: "absolute",
    top: 6,
    right: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
    zIndex: 3,
  },

  bellIcon: { height: 25, width: 25, left: 1 },

  menuCircle: {
    top: 6,
    left: 10,
    height: 30,
    width: 35,
    overflow: "hidden",
    zIndex: 3,
  },
  menuIcon: { height: 24, width: 24, left: 8, resizeMode: "contain" },
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  contentTitle: {
    position: "absolute",
    top: 15,
    alignSelf: "center",
    justifyContent: "space-around",
    width: 300,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 4,
  },

  topCover: {
    position: "absolute",
    height: 60,
    width: "100%",
    backgroundColor: "#000",
    top: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 1,
  },

  quickTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#8413f5",
    zIndex: 3,
  },

  flash: {
    fontSize: 25,
  },
  body: {
    height: "100%",
    width: "100%",
    top: 0,
    position: "absolute",
    backgroundColor: " #f5b857",
  },
  contentArea: {
    height: "80%",
    width: "98%",
    position: "absolute",
    alignSelf: "center",
    top: 50,
    backgroundColor: "#002444",
    borderRadius: 30,
    marginBottom: 60,
    overflow: "hidden",
  },

  cardsType: {
    flex: 1,
    position: "absolute",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
    top: 55,
    alignSelf: "center",
    alignItems: "center",
    zIndex: 4,
  },

  scrollView: {
    height: 520,
    width: "100%",
    position: "absolute",
    borderRadius: 20,
    marginBottom: 200,
  },

  physical: {
    height: 50,
    width: 110,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#3CB2CB",
    shadowOpacity: 0.3,
    overflow: "hidden",
  },
  ecode: {
    height: 50,
    width: 110,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 5,
    shadowOpacity: 0.3,
    backgroundColor: "#548C94",
    overflow: "hidden",
  },

  ecodeText: {
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    color: "white",
    bottom: 4.5,
  },

  andText: {
    color: "#feb819",
    height: 36,
    width: 36,
    borderRadius: 18,
    textAlign: "center",
    padding: 5,
    whiteSpace: "nowrap",
    paddingTop: 8,
    borderWidth: 0.5,
    borderColor: "#feb819",
  },

  addImage: {
    height: 50,
    width: 110,
    resizeMode: "cover",
    alignSelf: "center",
    position: "absolute",
  },

  withdrawImage: {
    height: 50,
    width: 110,
    resizeMode: "cover",
    alignSelf: "center",
    position: "absolute",
  },

  addFund: {
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    color: "white",
    bottom: 4.5,
  },

  withdraw: {
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
    color: "black",
    bottom: 4.5,
  },

  addAccount: {
    position: "absolute",
    top: 455,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#3CB2CB",
    zIndex: 13,
    fontSize: 12,
  },

  giftCardForm: {
    position: "absolute",
    top: 80,

    flex: 1,
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
    backgroundColor: "black",
    paddingTop: 40,
    paddingBottom: 80,
    paddingVertical: 30,
    alignSelf: "center",
    marginBottom: 100,
    gap: 20,
  },

  giftCardBox: {
    height: 60,
    width: "85%",
    backgroundColor: "#20a385",
    borderRadius: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  logoCover: {
    position: "absolute",
    height: 24,
    width: 24,
    alignSelf: "center",
    left: 5,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "black",
  },
  giftCardLogo: {
    resizeMode: "cover",
    position: "absolute",
    height: 24,
    width: 30,
    alignSelf: "center",
  },

  amountBox: {
    height: 60,
    width: "85%",
    backgroundColor: "#374550",
    borderRadius: 20,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },

  amountText: {
    fontSize: 20,
    color: "#feb819",
  },

  buyBox: {
    height: 40,
    width: "85%",
    backgroundColor: "#8413f5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.6,
    elevation: 4,
  },
  imageBoxCover: {
    height: 100,
    width: 220,
    justifyContent: "space-between",
    flexDirection: "row",
    left: "3%",
  },

  uploadBox: {
    height: 100,
    width: 200,
    overflow: "hidden",
    backgroundColor: "grey",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#374550",
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  closeImgBtn: {
    top: 2,
    height: 20,
    width: 20,
  },

  uploadedImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  uploadText: {
    fontSize: 18,
    position: "absolute",
    color: "#ccc",
  },
  buyText: {
    fontSize: 18,
    alignSelf: "center",

    color: "#ccc",
    fontWeight: "bold",
  },

  rate: {
    bottom: -20,
    padding: 5,
    borderRadius: 10,
    color: "green",
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 1,
    zIndex: 12,
    width: 100,
  },

  selectGiftCard: {
    fontSize: 17,
    color: "#ddd",
  },

  quantityInput: {
    height: 60,
    width: "85%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    paddingLeft: 10,
  },
  dropDownIcon: {
    height: 10,
    width: 15,
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    height: 70,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D3DEE8",
    zIndex: 3,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    paddingBottom: 5,
  },
  tabArea: {
    height: 60,
    width: 60,
    padding: 4,
    justifyContent: "space-around",
    flexDirection: "column",
  },
  tab: {
    height: 40,
    width: 50,
    borderRadius: 15,
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingRight: "auto",
    paddingLeft: "auto",
  },

  tabImage: {
    height: 40,
    width: 50,
    top: 5,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "contain",
  },

  homeImage: {
    height: 35,
    width: 45,
    top: 5,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "contain",
  },
  fundImage: {
    height: 31,
    width: 50,
    top: 10,
    alignSelf: "center",
    position: "absolute",
    resizeMode: "cover",
  },
  tabText: {
    alignSelf: "center",
    color: "#1C445C",
    marginTop: 5,
    alignItems: "center",
  },
});

export default BuyGiftCard1;
