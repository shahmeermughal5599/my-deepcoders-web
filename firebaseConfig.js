// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY6cx34HQtpXb46FozhwjHJEdiHPMCQbM",
  authDomain: "deepcoders-f4008.firebaseapp.com",
  projectId: "deepcoders-f4008",
  storageBucket: "deepcoders-f4008.appspot.com",
  messagingSenderId: "184958065287",
  appId: "1:184958065287:web:2a8d29f9edb83e4e2c3622",
  measurementId: "G-QVWGFSZFQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
