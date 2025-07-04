import messaging from '@react-native-firebase/messaging';
import { Platform, PermissionsAndroid } from 'react-native';
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase.ts"

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('FCM Authorization status:', authStatus);
    getFcmToken(); // Fetch FCM token
  }
};

const getFcmToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    // Send this token to your backend server if needed
    await Doc(setDoc(db,"cs_app_users",{token:token}));
  } catch (error) {
    console.log('Error getting FCM token:', error);
  }
};
