import firebase  from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsdvG8uq9dcu3yRaVPmbg6iWhSu6wjeb4",
    authDomain: "fireblogs-f158d.firebaseapp.com",
    projectId: "fireblogs-f158d",
    storageBucket: "fireblogs-f158d.appspot.com",
    messagingSenderId: "452923094166",
    appId: "1:452923094166:web:96079e861a24a952bdfeb7",
    measurementId: "G-221PZTLQ09"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();
