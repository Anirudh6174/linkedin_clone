import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMiDpUYPSIGsntT24ml44Z9tq3MhOXCOY",

  authDomain: "linkedin-clone-e7e49.firebaseapp.com",

  projectId: "linkedin-clone-e7e49",

  storageBucket: "linkedin-clone-e7e49.appspot.com",

  messagingSenderId: "153149890251",

  appId: "1:153149890251:web:67c661403a2f1dcef0454e",

  measurementId: "G-9YV18QT3TJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
