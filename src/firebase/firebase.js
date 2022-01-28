import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAWyXsWODhlZWlYPc5pE5XxTf_04oeyFpE",
  authDomain: "green-b3fdd.firebaseapp.com",
  projectId: "green-b3fdd",
  storageBucket: "green-b3fdd.appspot.com",
  messagingSenderId: "867134789739",
  appId: "1:867134789739:web:1c591b794dac5c3151f92e",
  measurementId: "G-THHJSEC3ML",
};
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
