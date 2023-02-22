// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// https://firebase.google.com/docs/web/setup#available-libraries
const vapidKey =
  "BKi3Do_O-F016fQI8fErNwRNQrbpgjlSYMAc0f3eCK-P7ootou2EFHgSXAgHzbtW_m9cMmkjDc5MzslbDif3fLg";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVO4lqmtyhH1kRTcEq_NzwjV2_HN4blFY",
  authDomain: "fir-shoping-3ab6a.firebaseapp.com",
  projectId: "fir-shoping-3ab6a",
  storageBucket: "fir-shoping-3ab6a.appspot.com",
  messagingSenderId: "696803573496",
  appId: "1:696803573496:web:4529467cf7af66fe89450d",
};

/* CurrentToken =  clFprR1LqGzWHKOY0TN6iq:APA91bGYzh8jKpmNFKdBgt5I4viUNcSEMFxmqgyIO1gK8WVR_3nbZoJ-urslWQTtTZ-jInYwNMQqp3JMv-gc9iSiP74Wx94FqXIlfn8WI79YFp-UqLtvekITZIHkU1sOBvhXDfRSRArK*/
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BFwOoOHxsMUHgVl3SjgRb-bUI0GqWAt7Ul0l56ivAM9UOAI30pDQlCAV4npSZt2F4s6C9WNSmCT1ngmARCNvv2k",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      sendTokenToServer(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

const sendTokenToServer = (token) => {
  if (localStorage.getItem("tokenSentToServer")) return;
  // TODO: Implementar la logica de que el servidor se almacene el token
  console.log("Ha almacenado el token");
  localStorage.setItem("tokenSentToServer", "1");
};

export const db = getFirestore(app);
