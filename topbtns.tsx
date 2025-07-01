import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import useStore from "./zustand";
import SearchBar from "./searchBar"; // make sure this is a valid import

const TopBtns = () => {
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");

  const dark = useStore((state) => state.dark);
  const chats = useStore((state) => state.chats);
  const navigation = useNavigation();

  const searchChats = (text) => {
    // You should implement your actual search logic here
    setQuery(text);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#131314" : "white" },
      ]}
    >
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#00d4d4" />
      </TouchableOpacity>

      <View style={styles.row}>
        {/* Chat name */}
        <Text style={styles.name}>
          {chats.length > 0 ? chats[0].name : "Chat"}
        </Text>

        {/* Chat icon (initial) */}
        {!searching && chats.length > 0 && (
          <View style={styles.circle}>
            <Text style={styles.circleText}>
              {chats[0].name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}

        {/* Search bar or search icon */}
        {searching ? (
          <SearchBar
            value={query}
            height={40}
            picSize={30}
            handleClose={() => setSearching(false)}
            onChangeText={(txt) => searchChats(txt)}
          />
        ) : (
          <Pressable onPress={() => setSearching(true)}>
            <AntDesign name="search1" size={20} color="#333" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  name: {
    color: "#00d4d4",
    fontSize: 16,
    fontWeight: "bold",
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#00d4d4",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default TopBtns;
