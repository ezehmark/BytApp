import React from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import useStore from "./zustand";

const SearchBar = ({
  profileImage,
  placeholder = "Search...",
  onChangeText,
  value,
  height,
  onPress,
  picSize,
}) => {
  const dark = useStore((s) => s.dark);
  const chats = useStore((c) => c.chats);
  const query=useStore(q=>q.query);
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.searchBar,
          {
            borderWidth: 1.5,
            backgroundColor: dark ? "#131314" : "white",
            borderColor: dark ? "#eee" : "#4b9490",
            height: height ?? 50,
          },
        ]}
      >
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: "#ccc",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <Text
            style={{
              fontSize: 14,
              fontWeigh20t: "bold",
              color: "white",
              alignSelf: "center",
              position: "absolute",
            }}
          >
            {chats.length > 0 && chats[0].name?.charAt(0)}
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onChangeText={onChangeText}
          value={query}
          autoFocus={true}
        />
        <Pressable onPress={onPress}>
          <Text
            style={{
              fontSize: 10,
              padding: 4,
              backgroundColor: "#eee",
              borderRadius: 4,
              elevation: 4,
              marginRight: 100,
            }}
          >
            ❌
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 2,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 50,
    width: 160, // 40 (icon) + 100 (input) + padding
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 5,
    backgroundColor: "black",
  },
  input: {
    width: 100,
    fontSize: 14,
    color: "black",
  },
});

export default SearchBar;
