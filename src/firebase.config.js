import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRTUYZw2H3es57TBQfUbs9AuczAAi_eSM",
    authDomain: "restaurantapp-8bdac.firebaseapp.com",
    databaseURL: "https://restaurantapp-8bdac-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-8bdac",
    storageBucket: "restaurantapp-8bdac.appspot.com",
    messagingSenderId: "865937976781",
    appId: "1:865937976781:web:b3b6fc8f4c0bfeaaed2884"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };