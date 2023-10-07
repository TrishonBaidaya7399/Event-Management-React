// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD15-W1pzqSZlioBzyframIX-nQAn__3_Q",
  authDomain: "tvents-planner.firebaseapp.com",
  projectId: "tvents-planner",
  storageBucket: "tvents-planner.appspot.com",
  messagingSenderId: "310622506895",
  appId: "1:310622506895:web:9bc8f09f24a88aa51f05fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;