import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Profile = ({ setDarkTheme, darkTheme, toggleMenu, toggleMsg }) => {
  const route = useRoute();
  const navigation = useNavigation();

  const toggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const handleNav = async () => {
    await NavigationBar.setBackgroundColorAsync(
      darkTheme ? "#022d36" : "white",
    );
    await NavigationBar.setButtonStyleAsync(darkTheme ? "light" : "dark");
  };

  useEffect(() => {
    handleNav();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={darkTheme ? "light-content" : "dark-content"}
        backgroundColor={darkTheme ? "black" : "white"}
      />
      <View style={styles.container}>
        <View
          style={{
            top: 0,
            alignSelf: "center",
            zIndex: 4,
            position: "absolute",
            backgroundColor: darkTheme ? "black" : "white",
            height: 30,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              top: 0,
              backgroundColor: darkTheme ? "transparent" : "white",
              borderRadius: 25,
              elevation: 6,
              height: 30,
              width: 60,
              ovherflow: "hidden",
              left: 20,
              zIndex: 5,
              shadowColor: darkTheme ? "white" : "black",
              alignItems: "centet",
              justifyContent: "center",
              position: "absolute",
            }}
            onPress={() => {
              toggleDarkTheme();
            }}
          >
            <Image
              style={{
                elevation: 0,
                alignSelf: "center",
                height: darkTheme ? "110%" : "112%",
                width: darkTheme ? "115%" : "117%",
                resizeMode: "fill",
                position: "absolute",
              }}
              source={{
                uri: darkTheme
                  ? "https://i.postimg.cc/tCkL3r29/5c0c5c03-9080-4b2a-b8b1-555545701271-1.png"
                  : "https://i.postimg.cc/CxzHsg4b/file-00000000356061f6a68ff9be855f9663-conversation-id-67fa6aad-afd0-800e-9a2f-72e2c3262668-message-i.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{navigation.navigate("drop")}}
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
        </View>
        <LinearGradient
          colors={[
            darkTheme ? "black" : "white",
            darkTheme ? "black" : "white",
            darkTheme ? "#022d36" : "white",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientContainer}
        >
          <ScrollView contentContainerStyle={{ padding: 10 }}>
            <View
              style={{
                height: 1000,
                width: "100%",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <View
                style={[
                  styles.userInfoArea,
                  {
                    padding: 5,
                    borderRadius: 20,
                    borderWidth: 0,
                    elevation: 5,
                    shadowColor: darkTheme ? "white" : "black",
                    borderColor: darkTheme ? "white" : "black",
                    backgroundColor: darkTheme ? "#022d36" : "white",
                  },
                ]}
              >
                <View
                  style={[
                    styles.picContainer,
                    {
                      borderRadius: 20,
                      borderWidth: 1,
                      height: 90,
                      borderColor: darkTheme ? "white" : "black",
                    },
                  ]}
                >
                  <View style={styles.userPicCircle}>
                    <Image
                      style={styles.userPic}
                      source={{
                        uri: "https://i.postimg.cc/66P9tyfV/IMG-20241018-082659.jpg",
                      }}
                    />
                  </View>
                </View>

                <View
                  style={[
                    styles.userInfo,
                    {
                      borderWidth: 0,
                      borderColor: darkTheme ? "white" : "black",
                    },
                  ]}
                >
                  <View style={styles.infoWritten1}>
                    <Text style={styles.userName}>Name:</Text>
                    <Text style={styles.userNameValue}>Ezeh Mark</Text>
                  </View>
                  <View style={styles.infoWritten2}>
                    <Text style={styles.rank}>Ranking:</Text>
                    <Text style={styles.rankValue}>Level 1 ⭐</Text>
                  </View>

                  <View style={styles.infoWritten3}>
                    <Text style={styles.userName}>Referral ID:</Text>
                    <Text style={styles.userNameValue}>#A1014GG</Text>
                  </View>
                </View>
              </View>

              <LinearGradient
                colors={[
                  darkTheme ? "#022d37" : "rgba(0,0,0,0.2)",
                  "rgba(0,0,0,1)",
                  "#8cd5cd",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.itemsZone}
              >
                <Text style={styles.item1}>User verification</Text>
                <Text style={styles.item1}>Engage customer support </Text>
                <Text style={styles.item3}>Follow us on ↓</Text>

                <TouchableOpacity style={styles.socialIcons}>
                  <View style={styles.icon1}>
                    <Image
                      style={styles.iconImg}
                      source={{
                        uri: "https://i.postimg.cc/Pr5HZ3gT/Picsart-24-11-07-07-24-41-438.png",
                      }}
                    />
                  </View>
                  <View style={styles.icon1}>
                    <Image
                      style={styles.iconImg}
                      source={{
                        uri: "https://i.postimg.cc/QC7PD7P4/Picsart-24-11-07-07-18-09-134.png",
                      }}
                    />
                  </View>
                  <View style={styles.icon1}>
                    <Image
                      style={styles.iconImg}
                      source={{
                        uri: "https://i.postimg.cc/tJ15GH19/2021-Facebook-icon-svg.png",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menuCircle: {
    top: 6,
    left: 10,
    height: 30,
    width: 35,
    overflow: "hidden",
    zIndex: 11,
  },
  menuIcon: {
    height: 24,
    width: 24,
    left: 8,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
  gradientContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  userInfoArea: {
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 1,
    padding: 5,
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
  },
  infoCircle: {
    position: "absolute",
    top: 0,
    right: 20,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
    zIndex: 6,
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  userPicCircle: {
    height: 76,
    position: "absolute",
    width: 76,
    borderRadius: 38,
    backgroundColor: "blue",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#8cd5cd",
  },
  userPic: {
    resizeMode: "contain",
    height: 150,
    width: 100,
    bottom: 55,
    right: 17,
  },
  userInfo: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
    gap: 5,
    padding: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  infoWritten1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#adafa4",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  userName: {
    color: "#ccc",
    fontWeight: "normal",
    fontSize: 12,
  },
  userNameValue: {
    color: "#8cd5cd",
    fontWeight: "bormal",
    fontSize: 12,
  },
  infoWritten2: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#adafa4",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  infoWritten3: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#adafa4",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  rank: {
    color: "#ccc",
    fontWeight: "normal",
    fontSize: 12,
  },
  rankValue: {
    color: "#8cd5cd",
    fontWeight: "normal",
    fontSize: 12,
  },
  moveable: {
    height: 400,
    width: "96%",
    position: "absolute",
    top: 400,
    left: "2%",
    backgroundColor: "blue",
  },
  itemsZone: {
    height: 400,
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "column",
    paddingBottom: 100,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    alignItems: "center",
    alignSelf: "center",
  },
  item1: {
    height: 50,
    width: "95%",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#8cd5cd",
    borderRadius: 15,
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
  },
  item3: {
    height: 50,
    width: "95%",
    borderColor: "#ccc",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    color: "red",
  },
  socialIcons: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: 60,
    width: "80%",
    alignSelf: "center",
  },
  icon1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { height: 2, width: 1 },
    elevation: 4,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  iconImg: {
    resizeMode: "cover",
    height: 48,
    width: 48,
  },
});

export default Profile;
