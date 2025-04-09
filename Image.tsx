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
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { BlurView } from "expo-blur";

export default function ImgComp({
  name,
  setLoadingTxt,
  loadingTxt,
  setName,
  myEmail,
  isEmail,
  setNav,
  navigation,
  loading,
  setLoading,
  dropDownChanger,
  setNotifyMsg,
  screenWidth,
  notifyMsg,
}: {
  loading: boolean;
  setLoading: () => void;
  dropDownChanger: () => void;
  notifyMsg: string;
  setNotifyMsg: () => void;
}) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (setNav) {
      setNav(navigation);
    }
  }, [navigation]);

  useEffect(() => {
    getImage();
  }, []);
  const [profile, setProfile] = useState("");

  const getImage = async () => {
    setLoadingTxt("Loading Photo...");
    setLoading(true);
    try {
      const response = await axios.get(
        "https://mybackend-oftz.onrender.com/api/userDetails/Mark",
      );
      setImage(response.data.uri);
      setNotifyMsg(
        `Photo of ${response.data.name} has been downloaded successfully`,
      );
      setProfile(`Hello ${response.data.name}`);
      dropDownChanger();
    } catch (err) {
      setNotifyMsg(`Error, Photos failed to fetch: ${err}`);
      dropDownChanger();
    } finally {
      setLoading(false);
      setNotifyMsg(response.data.uri);
      dropDownChanger();
    }
  };

  const [touched, setTouched] = useState([]);

  const boxTranslate = useSharedValue(0);
  const boxHeight = useSharedValue(300);
  const boxOpacity = useSharedValue(1);
  const boxMargin = useSharedValue(10);
  const boxMoveAnim = useAnimatedStyle(() => {
    return {
      translate: boxTranslate.value,
      opacity: boxOpacity.value,
      height: boxHeight.value,
      margin: boxMargin.value,
    };
  });

  const handlePicMove = () => {
    boxTranslate.value = 0;
    boxHeight.value = 300;
    boxOpacity.value = 1;
    boxMargin.value = 10;
    boxTranslate.value = withSequence(
      withTiming(500, { duration: 2000 }),
      withTiming(600, { duration: 2000 }),
    );

    boxHeight.value = withSequence(
      withTiming(300, { duration: 2000 }),
      withTiming(-40, { duration: 1000 }),
      withTiming(80, { duration: 1500 }),
      withTiming(0, { duration: 1000 }),
    );
    boxOpacity.value = withSequence(
      withTiming(1, { duration: 2000 }),
      withTiming(0.5, { duration: 1000 }),
    );

    boxMargin.value = withSequence(
      withTiming(15, { duration: 2000 }),
      withTiming(0, { duration: 1000 }),
    );
  };
  const [clickedTab, setClickedTab] = useState(null);
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.imageContainer}>
          <View style={styles.innerBox}>
            <FlatList
              numColumns={1}
              showsVerticalScrollIndicator={false}
              data={Array(4).fill(null)}
              horizontal={false}
              extraData={name}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ index }) => {
                const isTouched = touched.includes(index);
                const isTab = clickedTab == index;

                return (
                  <Animated.View style={([{ flex: 1 }], isTab && boxMoveAnim)}>
                    <TouchableOpacity
                      onPress={() => {
                        setClickedTab(index);
                        setTouched((prev) =>
                          prev.includes(index)
                            ? prev.filter((id) => id !== index)
                            : [...prev, index],
                        );
                        handlePicMove();
                      }}
                      style={[styles.imageWrapper]}
                    >
                      <Image source={{ uri: image }} style={styles.image} />
                      <BlurView
                        style={{
                          position: "absolute",
                          backgroundColor: "#feb819",
                          bottom: 20,
                          right: 20,
                          padding: 5,
                        }}
                      >
                        <Text style={{ color: "black" }}>{profile}</Text>
                      </BlurView>
                      <Text>{name}</Text>
                    </TouchableOpacity>
                  </Animated.View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e4a5f",
    justifyContent: "center",

    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    alignSelf: "center",
    height: "100%",
    width: "100%",
    padding: 20,
    overflow: "hidden",
    backgroundColor: "#4e5e54",
  },
  innerBox: {
    backgroundColor: "transparent",
    display: "flex",
    padding: 20,
    alignItems: "center",
  },
  imageWrapper: {
    height: 250,
    width: 200,
    borderRadius: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  imageText: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    right: 10,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",

    borderRadius: 10,
    padding: 5,
  },
});
