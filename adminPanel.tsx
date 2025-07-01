import Ripple from "react-native-material-ripple";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Image, Text, View, Switch, Pressable } from "react-native";
import useStore from "./zustand";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import BottomTab from "./bottomTab.tsx";
import SearchBar from "./searchBar";

const AdminPanel = ({ savedChats }) => {
  const dark = useStore((state) => state.dark);
  const toggleDark = useStore((state) => state.toggleDark);
  const toggleAds = useStore((state) => state.toggleAds);

  const handleNav = useStore((state) => state.handleNav);
  const ads = useStore((st) => st.ads);

  const setId = useStore((s) => s.setId);

  useFocusEffect(
    useCallback(() => {
      setId(1);
    }, []),
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#131314" : "white" },
      ]}
    >
      <View
        style={[
          styles.contents,
          { backgroundColor: dark ? "#131314" : "white" },
        ]}
      >
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: "rgba(75,148,144,0.4)",
            fontSize: 15,
            color: "rgba(75,148,144,1)",
            fontWeight: "bold",
          }}
        >
          Welcome to your admin panel
        </Text>
        <View
          style={{
            width: "95%",
            marginTop: 30,
            paddingBottom: 50,
            borderRadius: 15,
            backgroundColor: dark ? "#2d2d2e" : "#edf3f7",
            justifyContent: "space-between",
            gap: 0,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: dark ? "#ccc" : "#4b9490",
              marginBottom: 20,
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            Settings
          </Text>

          <Ripple
            onPress={toggleDark}
            style={[
              styles.box1,
              { backgroundColor: dark ? "#292e33" : "#d3e3ee" },
            ]}
          >
            <Text
              style={{
                color: dark ? "#ccc" : "rgba(0,0,0,0.4)",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Change UI
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch value={dark} onValueChange={toggleDark} />
              <Text atyle={{ fontSize: 10 }}>{dark ? "💤" : "⛅"}</Text>
            </View>
          </Ripple>
          <Ripple
            onPress={toggleAds}
            style={[
              styles.box1,
              { backgroundColor: dark ? "#292e33" : "#d3e3ee" },
            ]}
          >
            <Text
              style={{
                color: dark ? "#ccc" : "rgba(0,0,0,0.4)",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Toggle Ads
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              backgroundColor={dark ? "gray" : "#ccc"}
              <Switch value={ads} onValueChange={toggleAds} />
              <Text
                style={{
                  fontSize: 12,
                  color: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                }}
              >
                {dark ? "On" : "Off"}
              </Text>
            </View>
          </Ripple>

          <Ripple
            onPress={toggleAds}
            style={[
              styles.box1,
              { backgroundColor: dark ? "#292e33" : "#d3e3ee" },
            ]}
          >
            <Text
              style={{
                color: dark ? "#ccc" : "rgba(0,0,0,0.4)",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Toggle Ads
            </Text>
            <Switch value={ads} onValueChange={toggleAds} />
          </Ripple>
          <SearchBar />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          zIndex: 27,
          justifyContent: "center",
          bottom: 0,
          flexDirection: "column",
          flex: 1,
        }}
      >
        <BottomTab dark={dark} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  contents: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  box1: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default AdminPanel;
