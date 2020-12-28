import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyANczGVg4zNZv5L9rM4Q04gojhLIsGt51w",
  authDomain: "crud-react-redux-a2e3f.firebaseapp.com",
  projectId: "crud-react-redux-a2e3f",
  storageBucket: "crud-react-redux-a2e3f.appspot.com",
  messagingSenderId: "836789721349",
  appId: "1:836789721349:web:a00e612cd50c1be0777f6c",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
