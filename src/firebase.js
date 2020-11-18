import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1fdXqNk4cPjA3gI6Wp-eAx_87sww0jQ8",
  authDomain: "challenge-7dcc8.firebaseapp.com",
  databaseURL: "https://challenge-7dcc8.firebaseio.com",
  projectId: "challenge-7dcc8",
  storageBucket: "challenge-7dcc8.appspot.com",
  messagingSenderId: "732143499559",
  appId: "1:732143499559:web:4ea976519d70e1a012d102",
  measurementId: "G-LQJP635W32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
