import React from "react";
import {
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
import Menu from "./menu";

const Fund = ({toggleMenu,toggleMsg,balance,darkTheme}) => {

  const route = useRoute();
  return (
    <>
      <View style={styles.container}>
	<LinearGradient
          colors={[
            darkTheme ? "black" : "white",
            darkTheme ? "black" : "white",
            darkTheme ? "#022d36" : "white",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        
        
	style={[styles.gradientContainer,{}]}
        >
          <View style={styles.body}>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuCircle}>
              
              <Image
                style={styles.menuIcon}
                source={{
                  uri:darkTheme?"https://i.postimg.cc/B65wgYfV/images-41.jpg":"https://i.postimg.cc/3xCFDfww/Picsart-25-05-04-05-37-21-849.png"
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMsg} style={[styles.infoCircle,{backgroundColor:darkTheme?"#022d36":"black"}]}>
              
              <Image
                style={styles.bellIcon}
                source={{
                  uri: "https://i.postimg.cc/Kvhbr28G/Picsart-24-11-01-00-29-29-864.png",
                }}
              />
            </TouchableOpacity>

            <View style={[styles.contentArea,{borderRadius:5,elevation:6,top:45,shadowColor:"white",backgroundColor:"#3db2cb"}]}>
              <View style={styles.contentTitle}>
                <Text style={[styles.quickTitle,{color:darkTheme?"rgba(255,255,255,0.8)":"#feb819"}]}>Quick Processing</Text>

                <Text style={styles.flash}>⚡</Text>
              </View></View>

              <View style={[styles.fundingArea,{backgroundColor:darkTheme?"rgba(0,0,0,0.9)":"#f7fcf6"}]}><Text style={{position:"absolute",bottom:15,alignSelf:"center",padding:5,color:darkTheme?"#feb819":"#3db2cb",borderColor:darkTheme?"#feb819":"#3db2cb",borderRadius:5,borderWidth:1}}>Add more bank card →</Text>
	      <ScrollView>
	<View style={{height:600,backgroundColor:"transparent",width:"100%"}}>
                <View style={styles.balArea}>
                   <Text style={[styles.bal,{color:darkTheme?"grey":"#548C94"}]}>Bal:</Text>
                  <Text style={[styles.balance,{color:darkTheme?"#ccc":"black"}]}>₦{balance.toLocaleString("en-us")}</Text>
                </View>

                <Text style={styles.recentAccounts}>Funding history</Text>
                <View style={styles.accountsList}>

		{Array(5).fill(null).map((_,index)=><LinearGradient
		key={index}
                    colors={["#fff", "#fff", "#fff", "#ccc"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.usedAccount}
                  />)}

                </View>

                <View style={styles.fundButtons}>
                  <View style={styles.fund1}>
                    <Image
                      style={styles.addImage}
                      source={{
                        uri: "https://i.postimg.cc/x14DHtjJ/Picsart-24-11-03-14-43-11-943.png",
                      }}
                    />

                    <Text style={styles.addFund}>Add Fund</Text>
                  </View>
                  <View style={styles.fund2}>
                    <Image
                      style={styles.withdrawImage}
                      source={{
                        uri: "https://i.postimg.cc/TwGKMd8X/Picsart-24-11-03-13-56-07-199.png",
                      }}
                    />
                    <Text style={styles.withdraw}>Withdraw</Text>
                  </View>
                </View>
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
    top: 16,
    alignSelf: "center",
    justifyContent: "space-around",
    width: 300,
    height: 30,
    flexDirection: "row",
  },

  quickTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ec77700",
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
    height: "30%",
    width: "95%",
    position: "absolute",
    alignSelf: "center",
    top: 40,
    backgroundColor: "#cfccc5",
    borderRadius: 30,
  },
  fundButtons: {
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems:"center",
    width:"90%",
    gap: 20,
    alignSelf:'center',
    top:10
  },
  fundingArea: {
    position: "absolute",
    justifyContent: "center",
    padding: 15,
    paddingTop:25,
    top: 100,
    backgroundColor: "#f7fcf6",
    height: 500,
    width: "94.8%",
    alignSelf: "center",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 5,
  },

  balArea: {
    height: 20,
    width: 100,
    justifyContent: "space-around",
    position: "absolute",
    top: 85,
    right: 28,
    borderRadius: 15,
    flexDirection: "row",
    borderWidth: 0.3,
    borderColor: "#548C94",
  },

  bal: {
    fontSize: 12,
    color: "#548C94",
    fontWeight: "bold",
    alignSelf: "center",
    left: 5,
  },

  balance: {
    fontSize: 12,
    color: "#082350",
    alignSelf: "center",
    fontWeight: "bold",
  },
  fund1: {
    height: 60,
    width: 130,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#3CB2CB",
    shadowOpacity: 0.3,
  },
  fund2: {
    height: 60,
    width: 130,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 5,
    shadowOpacity: 0.3,
    backgroundColor: "#548C94",
  },

  addImage: {
    top: -8,
    height: 60,
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
  },

  withdrawImage: {
    top: 5,

    height: 45,
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
  },

  addFund: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    bottom: 4.5,
    position:"absolute",
  },

  withdraw: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "black",
    position:"absolute",
    bottom: 4.5,
  },

  recentAccounts: {
    position: "absolute",
    top: 85,
    left: 30,
    fontWeight: "bold",
  },

  addAccount: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#3CB2CB",
    zIndex: 13,
    fontSize: 12,
  },

  accountsList: {
    position: "absolute",
    top: 120,
    width:"100%",

    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    gap:10,
    elevation: 0,
    alignItems:"center",
    backgroundColor: "transparent",
    alignSelf: "center",
  },

  usedAccount: {
    height: 35,
    width: "90%",
    backgroundColor: "black",
    borderRadius: 15,
    margin: 5,
    elevation:10,
    shadowColor:"rgba(0,0,0,0.8)",
  },


});

export default Fund;
