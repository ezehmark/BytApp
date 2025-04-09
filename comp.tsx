import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withRepeat,
  Easing,
  runOnJS,
  cancelAnimation,
} from "react-native-reanimated";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Alert,
  Platform,
  Image,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import NetInfo from "@react-native-community/netinfo";
const MyApp: React.FC = ({
  name,
  setName,
  myEmail,
  isEmail,
  loadingTxt,
  setLoadingTxt,
  loading,
  setNav,
  navigation,
  setLoading,
  dropDownChanger,
  setNotifyMsg,
  notifyMsg,
}) => {
  const [userDetails, setUserDetails] = useState("");
  const [visible, setVisible] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const [isUserDetails, setIsUserDetails] = useState(false);
  const userDetailsChecker = () => {
    if (userDetails && userDetails.length > 0) {
      setIsUserDetails(true);
    }
  };

  const conicHTML = `<!DOCTYPE html>                                   <html lang="en">                                                      <head>                                                                    <meta charset="UTF-8">
    <title>Page title</title>                                             <style>
    .conicBox{position:absolute;height:100%;align-self:center;width:100%;background:conic-gradient(transparent 0% 5%, rgba(255,255,255,0.5) 5% 10%, white 10% 30%, transparent 30% 100%);animation:rotateBox 2s linear infinite}                                                        @keyframes rotateBox{                                    
	    from{transform:rotate(0turn)}                                           to{transform:rotate(1turn)}
}
    </style>
</head>                                                               <body>                                                                    <div class="conicBox"></div>                                                                    </body>                                                       </html>`;
  useEffect(() => {
    if (setNav) {
      setNav(navigation);
    }
  }, [navigation]);

  const checkHealth = async () => {
    try {
      const response = await axios.get("/health");

      if (response.status === 200) {
        dropDownChanger();
        setNotifyMsg("Backend is Deployed and Awake!");
      } else {
        setBackendActive(false);
      }
    } catch (error) {
      dropDownChanger();
      setNotifyMsg(`There is a backend failure: ${error.message}`);
    } finally {
      setBackendActive(false);
      console.log("Backend Checks Done ✅");
    }
  };
  useEffect(() => {
    Alert.alert("App produced by Mark");
    checkHealth();
  }, []);
  const [connected, setConnected] = useState(false);

  const handleConnection = () => {
    NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });
  };
  useEffect(() => {
    handleConnection();
    setInterval(() => {
      handleConnection();
    }, 1000);
  }, []);

  const [uploaded, setUploaded] = useState(false);
  const [input, setInput] = useState("");
  const emailRef = useRef();
  const [progress, setProgress] = useState(0);

  const [borderCheck, setBorderCheck] = useState(false);

  const [people, setPeople] = useState([]);

  const myPeople = people.map((peopleItem, index) => ({
    id: index.toString(),
    ...peopleItem,
  }));

  const [focused, setFocused] = useState(false);

  const myRight = useSharedValue(-100);
  const myWidth = useSharedValue(100);
  const appearAnim = useAnimatedStyle(() => {
    return { right: `${myRight.value}%`, width: myWidth.value };
  });
  const myLeft = useSharedValue(-100);

  const appearAnim1 = useAnimatedStyle(() => {
    return { left: `${myLeft.value}%`, width: myWidth.value };
  });

  const hasAnimated = useRef(false);
  useEffect(() => {
    if (!hasAnimated.current) {
      setTimeout(() => {
        myLeft.value = withSequence(
          withTiming(26, { duration: 1200, easing: Easing.inOut(Easing.ease) }),
          withTiming(0, { duration: 400, easing: Easing.inOut(Easing.ease) }),
          withTiming(10, { duration: 800, easing: Easing.in(Easing.ease) }),
        );

        myRight.value = withSequence(
          withTiming(26, { duration: 1200, easing: Easing.inOut(Easing.ease) }),
          withTiming(0, { duration: 400, easing: Easing.inOut(Easing.ease) }),
          withTiming(10, { duration: 800, easing: Easing.in(Easing.ease) }),
        );

        myWidth.value = withSequence(
          withTiming(100, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(80, { duration: 200, easing: Easing.inOut(Easing.ease) }),
          withTiming(110, { duration: 1150, easing: Easing.in(Easing.ease) }),
        );

        hasAnimated.current = true;
      }, 1000);
    }
  }, [hasAnimated]);

  useEffect(() => {
    if (userDetails && userDetails.length > 1) {
      setIsUserDetails(true);
    } else {
      setIsUserDetails(false);
    }
  }, [userDetails]);

  const handleFetch = async () => {
    setLoading(true);
    setLoadingTxt("Fetching Info");
    setFetch(true);

    await axios
      .get(`https://mybackend-oftz.onrender.com/api/userDetails/${name}?`)
      .then((response) => {
        setUserDetails(
          `${response.data.name} is now loaded from the best backend. He is ${response.data.age} years old.`,
        );
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setUserDetails(error.response.data.message);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          setFetch(false);
        }, 2000);
        setVisible(true);
      });
  };

  const [selected, setSelected] = useState<string[]>([]);
  const isDragging = useSharedValue(false);

  const scrollDistance = useSharedValue(0);
  const ListAnim = useAnimatedStyle(() => {
    return { transform: [{ translateX: scrollDistance.value }] };
  });

  const triggerScroll = () => {
    scrollDistance.value = withRepeat(
      withTiming(-2500, { duration: 15000, easing: Easing.linear }),
      1,
      false,
    );
  };
  useEffect(() => {
    if (myPeople.length > 0 || selected) {
      setTimeout(() => {
        runOnJS(triggerScroll)();
      }, 4000);
    }
  }, [myPeople, selected]);

  const handlePost = async () => {
    setLoading(true);
    setLoadingTxt("Processing...");
    setUpload(true);

    await axios
      .post(
        "https://mybackend-oftz.onrender.com/api/userDetails",
        {
          newPeople: [
            { name: "mummy", age: "60" },
            { name: "David", age: "45" },
            { name: "Joshua", age: "25" },
          ],
        },
        { headers: { "Content-Type": "application/json" } },
      )
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          setUpload(false);
        }, 2000);
        setVisible(true);
        userDetailsChecker();
        setUploaded(true);
      });
  };
  const email = [
    "ezehmaker@gmail.com",
    "simplebiggly@gmail.com",
    "powerdonew@gmail.com",
    "younggreat303@gmail.com",
    "ezehmark001@gmail.com",
  ];

  const [mailing, setMailing] = useState(false);

  const handleIsEmail = (txt) => {
    if (txt.length >= 8 && txt.includes("@gmail.com")) {
      setMyEmail(txt);
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };
  const sendMail = async () => {
    setLoading(true);
    setLoadingTxt("Sending Email");
    setMailing(true);

    await Promise.all(
      email.map(
        async (user) =>
          await axios
            .post("https://mybackend-oftz.onrender.com/send-mail", {
              recipient: isEmail ? myEmail : user,
              subject: "Web and App Technology Simplified",
              message: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Web and App Technology Simplified</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
      <tr>
        <td align="center">
          <table role="presentation" width="350px" cellspacing="0" cellpadding="0" border="0" style="background-color: white; border: 2px solid #222021; border-radius: 20px; padding: 15px; text-align: center;">
            <!-- Logo -->
            <tr>
              <td style="background-color: #222021; color: white; font-size: 20px; padding: 10px; border-radius: 0px 20px 0px 20px;">
                <b style="color:#f7b21d">Bytance</b><b style="color:#d50204">Tech</b>
              </td>
            </tr>

            <!-- Greeting -->
            <tr>
              <td style="color:#4fe300; font-size: 25px; padding-top: 10px;">
                Dear ${isEmail ? myEmail.split("@")[0] : user.split("@")[0]},
              </td>
            </tr>

            <!-- Main Message -->
            <tr>
              <td style="color:#1e324b; font-size: 16px; padding: 15px; line-height: 1.5; text-align: left;">
                The time to get it done is here – not just that, but by <b style="color:#00ff00;">professional</b> hands in web and app development. 
                Our robust team of developers fast-track the build process to deliver apps that are 
                <b style="color:#00ff00">scalable, performant, and accessible</b> across devices. 
                All these at affordable prices.<br><br>
                Click the button below to get it done today!
              </td>
            </tr>

            <!-- Button -->
            <tr>
              <td align="center" style="padding: 20px 0;">
                <a href="https://wa.me/2349036202766" style="background-color: #4fe300; color: black; text-decoration: none; font-size: 16px; padding: 10px 20px; border-radius: 20px; display: inline-block;">
                  Get It Done
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="color: gray; font-size: 10px; padding-top: 10px;">
                This email was sent from <b>BytanceTech</b> &copy;2025
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
            })

            .then((response) => {
              setUserDetails(response.data.message);
              if (response.status === 200) {
                setNotifyMsg(response.data.msg);
                dropDownChanger();
              } else {
                setNotifyMsg("Email failed to send");
                dropDownChanger();
              }
            })
            .catch((error) => setUserDetails(error.response.data.message))
            .finally(() => {
              setLoading(false);
              setMailing(false);
            }),
      ),
    );
  };
  const [focused2, setFocused2] = useState(false);

  const [isfetch, setFetch] = useState(false);
  const [upload, setUpload] = useState(false);

  const [typing, setTyping] = useState("User typing.");
  let typingTime = useRef(null);
  let dotsInterval = useRef(null);
  const typeSetter = () => {
    setBorderCheck(true);
    let dots = ["User typing.", "User typing..", "User typing..."];
    let index = 0;
    if (typingTime.current) {
      clearTimeout(typingTime.current);
    }

    dotsInterval.current = setInterval(() => {
      setTyping(dots[index]);
      index = (index + 1) % dots.length;
    }, 800);

    typingTime.current = setTimeout(() => {
      clearInterval(dotsInterval);
      setBorderCheck(false);
    }, 2500);
  };
  const [clicked, setClicked] = useState(false);
  const [selectName, setSelectName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (clicked && !isClicked) {
      setTimeout(() => {
        setNotifyMsg(`You added ${selectName} for search`);
        dropDownChanger();
      }, 500);
    }
    if (isClicked) {
      setNotifyMsg(`You removed ${selectName} from search`);
      dropDownChanger();
    }
  }, [clicked, isClicked]);
  return (
    <LinearGradient
      colors={[
        "#2e4a5f",
        "#2e4a5f",
        "#00d4d4",
        "#00d4d4",
        "#2e4a5f",
        "#2e4a5f",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.outer}
    >
      <Image
        source={{
          uri: "https://i.postimg.cc/JnmDLCRg/Picsart-25-04-03-18-19-38-027.png",
        }}
        style={{
          height: 30,
          width: 100,
          position: "absolute",
          top: 5,
          left: 20,
        }}
      />

      <View style={{ height: "100%", width: "100%", paddingBottom: 20 }}>
        <View
          style={{
            position: "absolute",
            top: 8,
            right: 20,
            backgroundColor: "#2e4a5f",
            borderRadius: 4,

            flex: 1,
            justifyContent: "space-between",
            padding: 4,
            alignItems: "center",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Text style={{ fontSize: 10, color: connected ? "#00ff00" : "#ccc" }}>
            {connected ? "Active Data" : "Offline"}
          </Text>
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 7.5,
              backgroundColor: connected ? "#00ff00" : "#ccc",
            }}
          />
        </View>
        <Text
          style={{
            top: 5,
            borderRadius: 12,
            padding: 4,
            paddingLeft: 10,
            borderColor: "#00ff00",
            borderWidth: 0,
            backgroundColor: "#feb819",
            opacity: borderCheck ? 1 : 0,
            position: "absolute",
            right: "10%",
            color: "#2e4a5f",
            width: 95,
            textAlign: "left",
            fontSize: 12,
          }}
        >
          {typing}
        </Text>

        <ScrollView
          style={{
            height: "95%",
            alignSelf: "center",
            width: "95%",
            position: "absolute",
          }}
        >
          <View
            style={[
              {
                borderWidth: 0.5,
                borderTopWidth: 1,
                borderColor: "#00d4d4",
                overflow: "hidden",
                borderTopColor: focused || focused2 ? "#00ff00" : "#00d4d4",
              },
              styles.container,
            ]}
          >
            <TouchableOpacity
              disabled={mailing}
              onPress={() => {
                sendMail();
                handleConnection();
              }}
              style={{
                position: "absolute",
                bottom: 86,
                backgroundColor: "black",
                borderRadius: 5,
                padding: 10,
                zIndex: 70,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "red" }}>
                {mailing ? "Sending..." : "Send Mail"}
              </Text>
            </TouchableOpacity>
            <Animated.View
              style={[
                {
                  backgroundColor: "#00d4d4",
                  left: "10%",
                  top: 306,
                  color: "#2e4a5f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  padding: 10,
                  width: 110,
                  fontSize: 14,
                  zIndex: 55,
                  borderRadius: 10,
                },
                appearAnim1,
              ]}
            >
              <TouchableOpacity
                onPress={handleFetch}
                disabled={loading}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Text style={{ textWrap: "nowrap", color: "black" }}>
                  {isfetch ? "Fetching..." : "Seach Now"}
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <View
              style={[{ opacity: isUserDetails ? 1 : 0 }, styles.userDetails]}
            >
              <Text
                style={{
                  color: "black",
                  margin: 10,
                  opacity: 1,
                }}
              >
                {userDetails}
              </Text>
            </View>
            <Animated.View style={[styles.uploadBtn, appearAnim]}>
              <TouchableOpacity
                onPress={() => {
                  handlePost();
                  triggerScroll();
                }}
                disabled={loading}
                style={{
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Text style={{ color: "#ccc", fontSize: 14, padding: 10 }}>
                  {upload ? "Uploading.." : "Upload"}
                </Text>
              </TouchableOpacity>
            </Animated.View>
            {visible && (
              <>
                <LinearGradient
                  colors={[
                    "rgba(46,74,95,1)",
                    "rgba(46,74,95,1)",
                    "rgba(46,74,95,0.8)",
                    "transparent",
                    "transparent",
                    "transparent",
                    "transparent",
                    "transparent",
                    "rgba(46,74,95,0.8)",
                    "rgba(46,74,95,1)",
                    "rgba(46,74,95,1)",
                  ]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{
                    bottom: 300,
                    borderRadius: 0,
                    zIndex: 150,
                    position: "absolute",
                    height: 50,
                    width: "100%",
                  }}
                  pointerEvents={"none"}
                ></LinearGradient>

                <Animated.View
                  style={[
                    {
                      pointerEvents: "box-none",
                      bottom: 300,
                      height: 50,
                      width: "100%",
                      borderRadius: 20,
                      zIndex: 100,
                      position: "absolute",
                    },
                  ]}
                >
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={myPeople}
                    extraData={selected}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                      const isSelected = selected.includes(item.id);
                      const pressSearch = () => {
                        setIsClicked(isSelected);
                        setClicked((prev) => !prev);
                        setTimeout(() => {
                          setClicked(false);
                        }, 500);

                        setName(item.name);
                        setSelectName(item.name);
                      };

                      return (
                        <View
                          style={{
                            height: 40,
                            width: 100,
                            shadowOffset: { width: 0, height: 2 },
                            margin: 5,
                            marginBottom: isSelected ? 5 : 0,
                            shadowColor: "rgba(0,0,0,0.3)",
                            elevation: 4,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              pressSearch(item.name);
                              setSelected((prev) =>
                                prev.includes(item.id)
                                  ? prev.filter((id) => id !== item.id)
                                  : [...prev, item.id],
                              );
                            }}
                            style={{
                              height: 40,
                              width: 100,
                              borderRadius: isSelected ? 5 : 15,

                              justifyContent: "center",
                              backgroundColor: isSelected
                                ? "#feb819"
                                : "#00cdde",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{ color: isSelected ? "black" : "black" }}
                            >
                              {item.name}
                            </Text>
                            <Text
                              style={{
                                color: isSelected ? "white" : "black",
                                fontSize: 10,
                              }}
                            >
                              {`Age: ${item.age}`}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                </Animated.View>
              </>
            )}

            <View
              style={{
                height: 80,
                zIndex: 50,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                backgroundCdolor: "transparent",
                borderRadius: 10,
                overflow: "hidden",
                borderWidth: 0,
                position: "absolute",
                bottom: 130,
              }}
            >
              {Platform.OS === "web" ? (
                (loading || !connected) && (
                  <iframe
                    srcDoc={conicHTML}
                    style={{
                      zIndex: 51,
                      height: "115%",
                      width: "115%",
                      position: "absolute",
                      flex: 1,
                      alignSelf: "center",
                    }}
                  />
                )
              ) : (
                <WebView
                  source={conicHTML}
                  originWhitelist={["*"]}
                  style={{
                    zIndex: 49,
                    position: "absolute",
                    flex: 1,
                    alignSelf: "center",
                  }}
                />
              )}

              <Text
                style={{
                  position: "absolute",
                  padding: 8,
                  height: "98%",
                  zIndex: 2,
                  borderRadius: 10,
                  fontSize: 12,
                  width: "99%",
                  zIndex: 52,
                  backgroundColor: "#2e4a5f",
                  borderWidth: 0,
                  alignSelf: "center",
                  borderColor: "#00d4d4",
                  textAlign: "center",
                  color: "#00d4d4",
                  shadowColor: "rgba(0,0,0,0.3)",
                  shadowOffset: { height: 0, width: 0 },
                  shadowRadius: 2,
                }}
              >
                This app enables you to fetch saved users from Mark's backend
                database. You can also press "Upload" to send new users to the
                DB. Happy using ✔️{" "}
              </Text>
            </View>
            <Text
              style={{
                position: "absolute",
                bottom: 45,
                padding: 8,
                borderRadius: 5,
                fontSize: 12,
                width: "80%",
                zIndex: 50,
                borderWidth: 0,
                borderColor: "#ecc37e",
                textAlign: "center",
                color: "#ecc37e",
              }}
            >
              Clicking the button "Send Mail" will send email message to
              specific recipients ✔️
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  borderColor: focused ? "#00ff00" : "#feb819",
                  backgroundColor: focused ? "rgba(215,230,249,0)" : "#2e4a5f",
                  borderWidth: focused ? 1.5 : 1,
                  color: focused ? "#feb819" : "#ecc37e",
                  textAlignVertical: "top",
                  outlineWidth: 0,
                },
              ]}
              returnKeyType="Enter"
              onFocus={() => {
                setFocused(true);
                handleConnection();
              }}
              onBlur={() => setFocused(false)}
              placeholder={focused ? "Start typing..." : "Type Name"}
              multiline={true}
              numberOfLines={3}
              value={name}
              onSubmitEditing={() => emailRef.current.focus()}
              onChangeText={(text) => {
                typeSetter();
                setName(text);
              }}
            />
            <TextInput
              style={[
                styles.input2,
                {
                  backgroundColor: focused2 ? "transparent" : "#2e4a5f",
                  color: focused2 ? "#feb819" : "#ecc37e",
                  borderColor: focused2 ? "#00ff00" : "#feb819",
                  borderWidrh: focused2 ? 1.5 : 1,
                },
              ]}
              placeholder={focused2 ? "eg. you@gmail.com" : "Enter email"}
              onChangeText={(txt) => {
                typeSetter();
                handleIsEmail(txt);
              }}
              onFocus={() => setFocused2(true)}
              onBlur={() => setFocused2(false)}
              multiline={true}
              returnKeyType="Done"
              ref={emailRef}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  input: {
    position: "absolute",
    top: 35,
    width: "90%",
    height: 40,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#cfccc5",
    borderWidth: 1,
    borderColor: "black",
  },

  input2: {
    position: "absolute",
    top: 70,
    width: "90%",
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    backgroundColor: "#2e4a5f",
    borderWidth: 1,
    outlineWidth: 0,
    borderColor: "#ecc37e",
  },
  outer: {
    flex: 1,
    backgroundColor: "#ecc37e",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 560,
    width: "95%",
    backgroundColor: "#2e4a5f",
    textWrap: "noWrap",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 20,
    top: 40,
    elevation: 0,
    shadowRadius: 5,

    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0,0,0,0.2)",
  },
  userDetails: {
    top: 150,
    position: "absolute",
    width: "85%",
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "black",
    textAlign: "center",
    color: "green",
    alignItems: "center",

    justifyContent: "center",
    backgroundColor: "#00ff00",
  },
  feedback: {
    top: 5,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#2e4a5f",
    color: "red",
    position: "absolute",
  },
  uploadBtn: {
    backgroundColor: "#ea0707",
    right: "10%",
    position: "absolute",
    alignSelf: "center",
    top: 306,
    fontWeight: "bold",
    width: 110,
    height: 40,
    zIndex: 60,

    padding: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyApp;
