import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD4BKhEtGcWUa5luYYepkmBflWWVUonRiM",
    authDomain: "whatscommerce-f453a.firebaseapp.com",
    projectId: "whatscommerce-f453a",
    storageBucket: "whatscommerce-f453a.appspot.com",
    messagingSenderId: "995757047320",
    appId: "1:995757047320:web:93e476bb02fdeb4ee30d6d"
  };
  // Initialize Firebase
  export const firebaseapp = firebase.initializeApp(firebaseConfig);