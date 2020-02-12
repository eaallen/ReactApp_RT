import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCnl504m7sH0jxlihgzwih2jKbto_pY9-I",
  authDomain: "rat-tunnels.firebaseapp.com",
  databaseURL: "https://rat-tunnels.firebaseio.com",
  storageBucket: "rat-tunnels.appspot.com",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;