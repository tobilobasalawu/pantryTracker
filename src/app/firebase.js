import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvvNEg2aEaJNBJ8AK7nxyyaWqzo5Sz96Q",
  authDomain: "pantry-tracker-f1c92.firebaseapp.com",
  databaseURL: "https://pantry-tracker-f1c92-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pantry-tracker-f1c92",
  storageBucket: "pantry-tracker-f1c92.appspot.com",
  messagingSenderId: "15691154236",
  appId: "1:15691154236:web:b0226ea75cfc62547bd439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }