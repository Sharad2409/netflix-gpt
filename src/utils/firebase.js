// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKKcHdom6iTpG9zJ_QQxidOThhAYx2gdE",
  authDomain: "netflixgpt-fa5e5.firebaseapp.com",
  projectId: "netflixgpt-fa5e5",
  storageBucket: "netflixgpt-fa5e5.appspot.com",
  messagingSenderId: "451382619862",
  appId: "1:451382619862:web:bd79fb8f280cc7171de377",
  measurementId: "G-MYQ7ZPKEXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);