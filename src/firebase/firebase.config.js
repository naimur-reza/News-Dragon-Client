// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbqVgJsTd2TVENejN7nCME043w7V_uqv0",
  authDomain: "the-dragon-news-0.firebaseapp.com",
  projectId: "the-dragon-news-0",
  storageBucket: "the-dragon-news-0.appspot.com",
  messagingSenderId: "829864575060",
  appId: "1:829864575060:web:84da35ee1e816b7f2fadc1",
  measurementId: "G-F9880TCWMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);