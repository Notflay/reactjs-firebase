importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDVO4lqmtyhH1kRTcEq_NzwjV2_HN4blFY",
  authDomain: "fir-shoping-3ab6a.firebaseapp.com",
  projectId: "fir-shoping-3ab6a",
  storageBucket: "fir-shoping-3ab6a.appspot.com",
  messagingSenderId: "696803573496",
  appId: "1:696803573496:web:4529467cf7af66fe89450d",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Titulo de la notificacion";
  const notificationOptions = {
    body: "Este es el body",
    icon: "https://www.gstatic.com/devrel-devsite/prod/vb06f043a05fab8044a3ccc5b2a77caba73848fbe764e2f874782b493081fa838/firebase/images/touchicon-180.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
