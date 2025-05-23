// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5Uw4nrLUi6-TfynGqdkADafVJPuenLM",
  authDomain: "nvu-live.firebaseapp.com",
  projectId: "nvu-live",
  storageBucket: "nvu-live.appspot.com",
  messagingSenderId: "85674592536",
  appId: "1:85674592536:web:cfa826e7629be68e7e766d",
  measurementId: "G-8F9KHEZS6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase app, analytics, db and storage if you need to use them elsewhere
export { app, analytics, db, storage }; 