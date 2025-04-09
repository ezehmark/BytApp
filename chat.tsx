import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  onFocus,
  onBlur,
  TextInput,
  ScrollView,
} from "react-native";
import { io } from "socket.io-client";
import { BlurView } from "expo-blur";
import axios from "axios";

const Chat = ({
  loading,
  setLoading,
  notifyMsg,
  loadingTxt,
  setLoadingTxt,
  setNotifyMsg,
  dropDownChanger,
}) => {
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState(0);
  const [inChats, setInChats] = useState([]);
  const [chats, setChats] = useState([]);
  const [finalMsg, setFinalMsg] = useState("");
  const updateMsg = (text) => {
    setMsg(text);
  };

  const socket = io("https://mybackend-oftz.onrender.com", {
    transports: ["websocket"],
  });

  const sendChat = () => {
    if (msg !== "") {
      setLoading(true);
      setLoadingTxt("Chatting...");
      socket.emit("send-chats", msg, (response) => {
        console.log(response);
        setNotifyMsg(response.info);
        dropDownChanger();
        setLoading(false);
      });
      setMsg("");
    }
  };

  const receiveChat = () => {
    socket.on("receive-chats", (messages) => {
      setChats((prev) => [...prev, messages]);
    });
  };

  useEffect(() => {
    socket.on("connect", () => console.log("connected"));

    socket.on("receive-chats", (messages) => {
      setChats((prev) => [...prev, messages]);
    });
    return () =>
      socket.off("receive-chats", (messages) => {
        setChats((prev) => [...prev, messages]);
      });
  }, []);

  const flatListRef = useRef(null);
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chats]);
  const [focused, seFocused] = useState(false);
  const [push, setPush] = useState("Send");
  const sendToBackend = async () => {
    if (msg !== "") {
      setLoadingTxt("Sending...");
      setLoading(true);
      setChats((prev) => [...prev, msg]);

      await axios
        .post("https://mybackend-oftz.onrender.com/chats", { myChats: msg })
        .then((response) => {
          setNotifyMsg(response.data.msg);
          dropDownChanger();
        })
        .catch((err) => {
          console.error(err);
          setNotifyMsg(err.response.data.errMsg);
          dropDownChamger();
        })
        .finally(() => {
          setLoading(false);
          setLoadingTxt("");
          setMsg("");
        });
    }
  };

  return (
    <React.Fragment>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.outer}>
          <Text
            style={{
              position: "absolute",
              color: "#ccc",
              left: 8,
              top: 10,
              fontSize: 27,
              fontWeight: "bold",
            }}
          >
            Chatance
          </Text>
          <View style={styles.pushArea}>
            <TouchableOpacity
              onPress={() => {
                sendChat();
              }}
              style={{
                height: 45,
                width: 45,
                borderRadius: 22.5,
                backgroundColor: "#feb819",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black",
                }}
              >
                {push}
              </Text>
            </TouchableOpacity>
            <BlurView
              style={{
                width: focused ? "80%" : "80%",
                height: "100%",
                borderRadius: 20,
                backgroundColor: "#ccc",
              }}
            >
              <TextInput
                onChangeText={(text) => {
                  updateMsg(text);
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={msg}
                multiline={true}
                returnKeyType="Enter"
                placeholder={"Chat here"}
                style={{
                  width: focused ? "110%" : "100%",
                  height: "100%",
                  textAlign: "left",
                  color: "#ccc",
                  justifyContent: "flex-start",
                  padding: 10,
                  outlineWidth: 0,
                  caratColor: "red",
                }}
              />
            </BlurView>
          </View>

          <View style={styles.listContainer}>
            <FlatList
              ref={flatListRef}
              showsVerticalScrollIndicator={true}
              horizontal={false}
              data={chats}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                const isWritten = index == num;
                return (
                  <>
                    <Text style={styles.msgBox}>{item}</Text>
                  </>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  pushArea: {
    position: "absolute",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 5,
    height: 50,
    alignItems: "center",
    width: "100%",
    bottom: 50,
    zIndex: 100,
    padding: 5,
  },
  outer: {
    padding: 5,
    backgroundColor: "#2e4a5f",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    height: "100%",
    width: "60%",
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    backgroundColor: "transparent",
    position: "absolute",
    right: 0,
    top: 0,
    padding: 20,
    paddingBottom: 80,
  },
  msgBox: {
    color: "#feb819",
    shadowColor: "#feb819",
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    textAlign: "left",
    zIndex: 120,
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
});

export default Chat;
