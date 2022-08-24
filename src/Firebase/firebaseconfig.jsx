// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export  const firebaseConfig = {
  apiKey: "AIzaSyDDQ1SOOOqITdz6pAeQ75U2_xWXfs3l0dY",
  authDomain: "fb-clone-8f504.firebaseapp.com",
  projectId: "fb-clone-8f504",
  storageBucket: "fb-clone-8f504.appspot.com",
  messagingSenderId: "963207828533",
  appId: "1:963207828533:web:d5f2ab9eb3d20b57330d7c",
  measurementId: "G-PXCDELG80E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);