import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg6DRU6G5kROHMLJm9EB2OMY6u27RqbJY",
  authDomain: "vibsensedup.firebaseapp.com",
  databaseURL: "https://vibsensedup.firebaseio.com",
  projectId: "vibsensedup",
  storageBucket: "vibsensedup.appspot.com",
  messagingSenderId: "300699406095",
  appId: "1:300699406095:web:0f4d6ab3a99503e94bf87a",
  measurementId: "G-SCCMBVSJY7"
};

firebase.initializeApp(firebaseConfig);

export default firebase