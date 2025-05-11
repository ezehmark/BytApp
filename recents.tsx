import React,{useEffect,useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import {BallIndicator} from "react-native-indicators";
import { useNavigation, useRoute } from "@react-navigation/native";
import Menu from "./menu";

const Recents = ({darkTheme,toggleMenu,toggleMsg}) => {


useEffect(()=>{
const fetchHistory = async()=>{
setLoading(true);
await axios.get("https://mybackend-oftz.onrender.com/health")
.then((response)=>{console.log(resposnse.data.msg);
if(response.data.msg.length < 50){console.log("Feedback not sufficient")}})

.catch((error)=>console.log(error))
.finally(()=>setTimeout(()=>{setLoading(true)},8000))}
},[]);

  const route = useRoute();
  const [loading,setLoading]=useState(false);
  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={[darkTheme?"black":"white",darkTheme?"#022d36":"white"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientContainer}
        >
          <View style={styles.body}>
<TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>                                                                                                                                 <Image
                style={styles.menuIcon}
                source={{                                                         uri:darkTheme?"https://i.postimg.cc/B65wgYfV/images-41.jpg":"https://i.postimg.cc/3xCFDfww/Picsart-25-05-04-05-37-21-849.png"                                                                 }}
              />                                                            </TouchableOpacity>                                                                                                             <TouchableOpacity onPress={toggleMsg} style={[styles.infoCircle,{backgroundColor:darkTheme?"#022d36":"black"}]}>                                                                                  <Image                                                            style={styles.bellIcon}                                         source={{
                  uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",                                                       }}                                                            />                                                            </TouchableOpacity>
	    <Text style={[styles.quickTitle,{alignSelf:"center",poaition:"absolute",fontSize:18,top:20}]}>Recent Transactions</Text>	

            <View style={[styles.contentArea,{borderColor:"#3CB2CB",borderWidth:0,elevation:5,shadowColor:"rgba(0,0,0,0.6)",backgroundColor:darkTheme?"#022d36":"#f7fcf6",borderRadius:25,top:50}]}>

	    {loading && <BallIndicator size={40} color={"#022d36"}/>}




              <Text style={[styles.moreHistory,{fontSize:12,color:darkTheme?"#feb819":"#3CB2CB",borderRadius:5,borderColor:darkTheme?"#feb819":"#3CB2CB",padding:5,fontWeight:"bold",borderWidth:1,bottom:20}]}>See All → </Text>
            </View>
          </View>
        </LinearGradient>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
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

  bellIcon: {
    height: 25,
    width: 25,
    left: 1,
  },

  menuCircle: {
    top: 6,
    left: 10,
    height: 30,
    width: 35,
    overflow: "hidden",
    zIndex: 3,
  },
  menuIcon: {
    height: 24,
    width: 24,
    left: 8,
    resizeMode: "contain",
  },
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
  },

  quickTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3CB2CB",
    position:"absolute"
  },

  body: {
    height: "100%",
    width: "100%",
    top: 0,
    position: "absolute",
    backgroundColor: " #f5b857",
  },
  contentArea: {
    height:"80%",
    width: "90%",
    position: "absolute",
    alignSelf: "center",
    top: 40,
    backgroundColor: "#cfccc5",
    borderRadius: 30,
    alignItems:"center",
    justifyContent:"center"
  },
  fundingArea: {
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
    top: 60,
    backgroundColor: "#f7fcf6",
    height: 420,
    width: 320,
    alignSelf: "center",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 5,
  },

  moreHistory: {
    position: "absolute",
    alignSelf: "center",
    fontWeight: "bold",
  },

  accountsList: {
    position: "absolute",
    top: 20,

    flex: 1,
    padding: 15,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
    backgroundColor: "#ccc",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    alignSelf: "center",
  },

  usedAccount: {
    height: 30,
    width: 200,
    backgroundColor: "black",
    borderRadius: 20,
    margin: 5,
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

export default Recents;
