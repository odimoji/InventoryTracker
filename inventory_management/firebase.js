// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdFKIWIVNqv-tmZ7yoof_Brxdc2QPkanw",
  authDomain: "inventory-management-b5f6c.firebaseapp.com",
  projectId: "inventory-management-b5f6c",
  storageBucket: "inventory-management-b5f6c.appspot.com",
  messagingSenderId: "971585495914",
  appId: "1:971585495914:web:c8e9112ebf4d4e780f3b13",
  measurementId: "G-4KJKT83NBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };

