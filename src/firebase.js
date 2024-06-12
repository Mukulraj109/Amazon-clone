import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-8dfRrVSHSW89eosa8MZci3c3zgWr87c",
  authDomain: "clone-1a9de.firebaseapp.com",
  projectId: "clone-1a9de",
  storageBucket: "clone-1a9de.appspot.com",
  messagingSenderId: "782274956163",
  appId: "1:782274956163:web:46e85e384217bda3b084b6",
  measurementId: "G-CXNR98WJZ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };