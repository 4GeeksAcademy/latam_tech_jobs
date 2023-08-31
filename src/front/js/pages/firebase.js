// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBshTzDiYYIMu01S56QXbLR8e3IMAh-yWw",
  authDomain: "latam-tech-jobs.firebaseapp.com",
  projectId: "latam-tech-jobs",
  storageBucket: "latam-tech-jobs.appspot.com",
  messagingSenderId: "541333662211",
  appId: "1:541333662211:web:d2630ab9ccb429b723bc36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);