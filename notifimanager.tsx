import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform, Alert } from "react-native"; // You forgot to import Alert and Platform

// Setup to show notifications in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false, // typo fixed: was "shouldSetBage"
  }),
});

// Register and get push notification token
export async function registerPushNotification() {
  let token;

  if (!Device.isDevice) {
    Alert.alert("Must use a physical device"); // use Alert.alert not just Alert
    return;
  }

  // Get existing permission
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  // Request permission if not granted
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  // If permission is still not granted, alert
  if (finalStatus !== "granted") {
    Alert.alert("Failed to get notification permissions");
    return;
  }

  // Get token
  token = (await Notifications.getExpoPushTokenAsync()).data; // typo: was getExpoPushTokeAsync
  console.log("Push token is", token);

  // Android: setup notification channel
  if (Platform.OS === "android") { // typo: was Platform.PS
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  return token;
}
