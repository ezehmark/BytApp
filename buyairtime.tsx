import React, { useEffect,useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import {BallIndicator} from "react-native-indicators";
import { useNavigation, useRoute } from "@react-navigation/native";
import MobileNetworks from "./mobilenetworks";
import axios from "axios";
import moment from "moment-timezone";
import {MMKV} from "react-native-mmkv";
const BuyAirtime = ({ darkTheme, toggleMenu, toggleMsg }) => {
  
const[token,setToken]=useState("");
const[balance,setBalance]=useState("");
const[loading1,setLoading1]=useState(false);

const myStore = new MMKV()
let newtoken;

useEffect(()=>{
async function getToken(){

setLoading1(true);
await axios.post("https://ebills.africa/wp-json/jwt-auth/v1/token",{username:"ezehmark@gmail.com",password:"Mark@ebills5050"})
.then((response)=>{newtoken = response.data.token;setToken(newtoken);console.log(response.data.token)})
.catch((error)=>console.error(error))
.finally(()=>{setLoading1(false);console.log("Token obtained successfully")});
}

getToken();
},[]);

const navigation = useNavigation();
  const route = useRoute();

  const [cardList, setCardList] = useState(false);
  const toggleCardList = () => {
    setCardList((init) => !init);
  };

  const[loading,setLoading]=useState(false);

  const[phone,setPhone]=useState("");
  const[amount,setAmount]=useState("");
  const[serviceId,setServiceId]=useState("");

  function getRequestId(){
  const lagosTime = moment.tz("Africa/Lagos").format("YYYYMMDDHHmm");
  return lagosTime + phone.toString()}

  const mtnIdentity = [
    "0803",
    "0806",
    "0703",
    "0706",
    "0810",
    "0813",
    "0814",
    "0816",
    "0903",
    "0906",
    "0913",
    "0916",
  ];

  const airtelIdentity = [
    "0802",
    "0808",
    "0708",
    "0812",
    "0902",
    "0907",
    "0901",
    "0912",
  ];

  const gloIdentity = ["0805", "0807", "0705", "0811", "0815", "0905", "0915"];

  const nineMobileIdentity = ["0809", "0817", "0818", "0909", "0908"];

  const [inputNotice, setInputNotice] = useState("");
  const [isNotice, setIsNotice] = useState(false);

  const checkNetwork = (txt) => {
    var firstFour;
    if (txt.length >= 4) {
      firstFour = txt.slice(0, 4);

      if (firstFour && mtnIdentity.includes(firstFour)) {
        setInputNotice("MTN Nigeria");
        setIsNotice(true);
      }

      if (firstFour && airtelIdentity.includes(firstFour)) {
        setInputNotice("Airtel Nigeria");
        setIsNotice(true);
      }

      if (firstFour && gloIdentity.includes(firstFour)) {
        setInputNotice("Glo Nigeria");
        setIsNotice(true);
      }

      if (firstFour && nineMobileIdentity.includes(firstFour)) {
        setInputNotice("9 Mobile");
        setIsNotice(true);
      }
    } else {
      setIsNotice(false);
    }
  };

  const [pin, setPin] = useState("");
  const[notice,setNotice]=useState("");



  const getBalance = async()=>{
	  console.log(token);
if(!token){console.log("empty token. pleqse get one before getting balance")}
  await axios.get("https://ebills.africa/wp-json/api/v2/balance",{headers:{Authorization:`Bearer ${token}`}}).then((response)=>{console.log(`Token before balance: ${token}`);setBalance(response.data.data.balance);console.log(response.data.data.balance)})
  .catch((error)=>console.error(error))
  .finally(console.log("You have successfully obtained your balance"))};


  const handlePurchase =async()=>{
  setLoading(true);
  await axios.post("https://sandbox.vtpass.com/api/pay",{request_Id:getRequestId(),serviceID:cardType,phone:phone,amount:amount},{
  headers:{"api-key":"0f0c613baa1f831c13499d84186a4372","secret-key":"SK_6163cc9d969dcb761a5f5f223a5f8da2f36ebad21b6"}})
  .then((response)=>{setNotice(response.data?.content?.transactions?.status)})
  .catch((error)=>{console.error(message);setNotice(error.message)})
  .finally(()=>setLoading(false))}

  const [isCard, setIsCard] = useState(false);
  const toggleCard = () => {
    setIsCard((prev) => !prev);
  };

  const [cardType, setCardType] = useState(
    "Which Network?                     ⌄",
  );

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
        <MobileNetworks
          isCard={isCard}
          toggleCard={toggleCard}
          handleSelectCard={handleSelectCard}
          handleWhich={handleWhichIsSelected}
        />
      )}

      <LinearGradient
        colors={[
          darkTheme ? "black" : "white",
          darkTheme ? "#022d36" : "#f7fcf6",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1, padding: 10, backgroundColor: "black" }}
      >
        <Text style={styles.topTitle}>Airtime Top-Up</Text>
        <TouchableOpacity style={styles.menuCircle} onPress={toggleMenu}>
          
          <Image
            style={styles.menuIcon}
            source={{
              uri: darkTheme
                ? "https://i.postimg.cc/B65wgYfV/images-41.jpg"
                : "https://i.postimg.cc/3xCFDfww/Picsart-25-05-04-05-37-21-849.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleMsg}
          style={[
            styles.infoCircle,
            {
              elevation: 4,
              shadowColor: darkTheme ? "white" : "black",
              backgroundColor: darkTheme ? "#022d37" : "black",
            },
          ]}
        >
          
          <Image
            style={styles.bellIcon}
            source={{
              uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            elevation: 5,
            shadowColor: "black",
            position: "absolute",
            alignSelf: "center",
            top: 70,
            backgroundColor: "red",
            width: "95%",
            borderRadius: 20,
            overflow: "hidden",
            height: 500,
            padding: 0,
          }}
        >
          <View
            style={[
              styles.contentTitle,
              { backgroundColor: darkTheme ? "#022d36" : "#6c969f" },
            ]}
          >
            <Text
              style={{
                fontSize: 17,
                textDecorationLine: "underline",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Quick Recharge, All Networks
            </Text>
            <Text style={styles.flash}>⚡</Text>
          </View>

          <ScrollView
            contentContainerStyle={{
              backgroundColor: darkTheme ? "black" : "white",
              padding: 0,
            }}
          >
            <View
              style={{
                height: 700,
                padding: 5,
                marginTop: 50,
                backgroundColor: "transparent",
              }}
            >{loading1 && <View style={{height:60,width:60,alignItems:"center",justifyContent:"center",alignSelf:"center",zIndex:150}}><ActivityIndicator size={40} color={"black"}/></View>}
              <TouchableOpacity
                onPress={() => toggleCard()}
                style={styles.networkBox}
              >
                <Text style={styles.selectNetwork}>{cardType}</Text>
                <Image
                  source={{
                    uri: "https://i.postimg.cc/bdcnJBLZ/Picsart-24-11-09-18-11-45-769.png",
                  }}
                  style={styles.dropDownIcon}
                />
              </TouchableOpacity>

              {isNotice && (
                <Text
                  style={{
                    color:
                      (inputNotice == "Glo Nigeria" && "white") ||
                      (inputNotice == "Airtel Nigeria" && "white") ||
                      (inputNotice == "MTN Nigeria" && "black") ||
                      (inputNotice == "9 Mobile" && "black"),
                    fontSize: 12,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    backgroundColor:
                      (inputNotice == "MTN Nigeria" && "yellow") ||
                      (inputNotice == "Airtel Nigeria" && "red") ||
                      (inputNotice == "Glo Nigeria" && "green") ||
                      (inputNotice == "9 Mobile" && "#c7ea46"),
                    alignSelf: "center",
                    marginLeft: "50%",
                    marginBottom: 5,
                    marginTop: -15,
                  }}
                >
                  {inputNotice}
                </Text>
              )}

	      <Text style={{color:"grey",fontSize:12,fontWeight:"bold"}}>{notice}</Text>

              <TextInput
                style={styles.pinInput}
                value={phone}
                keyboardType="numeric"
                placeholder="Phone number"
                color="black"
                placeholderTextColor="#999"
                onChangeText={(txt) => {
                  checkNetwork(txt);
                  setPhone(txt);
                }}
              />

              <TextInput
                style={styles.pinInput}
                value={amount}
                placeholder="₦100 to ₦5,000"
                color="black"
                keyboardType="numeric"
                placeholderTextColor="#999"
                onChangeText={setAmount}
              />

              <TextInput
                style={styles.pinInput}
                value={pin}
                keyboardType="numeric"
                placeholder="6 digits PIN"
                color="black"
                placeholderTextColor="#999"
                onChangeText={setPin}
              />

              <TouchableOpacity onPress={()=>{handlePurchase();console.log(getRequestId(),cardType)}}style={styles.buyBox}>
		      <View style={{justifyContent:"space-between",gap:0,flexDirection:"row",alignItems:"center"}}>
                <Text style={styles.buyText}>Recharge Now</Text>{loading && <BallIndicator size={20} color="#cc7722"/>}</View> </TouchableOpacity>

		<View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",gap:10,backgroundColor:"#ccc"}}>
		<TouchableOpacity disabled={!token} style={{position:"relative",padding:8,borderRadius:15,backgroundColor:"black",alignItems:"center",justifyContent:"center"}} onPress={()=>getBalance()}><Text style={{color:"white",fontWeight:"bold"}}>Get Balance</Text></TouchableOpacity>
		{balance && <Text style={{color:"green"}}>{balance}</Text>}
		</View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
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
  contentTitle: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 4,
    backgroundColor: "#6c969f",
  },

  flash: {
    fontSize: 25,
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

  addAccount: {
    position: "absolute",
    top: 455,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#3CB2CB",
    zIndex: 13,
    fontSize: 12,
  },

  networkBox: {
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#20a385",
    borderRadius: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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

  buyBox: {
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#28272c",
    borderRadius: 20,
    alignItems: "center",
    justifyContent:"center",
    shadowColor: "#feb819",
    shadowRadius: 8,
    shadowOffset: { height: 3, width: 0 },
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

  buyText: {
    fontSize: 17,

    color: "#20a385",
  },

  selectNetwork: {
    fontSize: 17,
    color: "#ddd",
  },

  pinInput: {
    height: 40,
    width: "90%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#f7fcf6",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#30b3bf",
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default BuyAirtime;
