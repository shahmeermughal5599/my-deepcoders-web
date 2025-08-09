import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

export { auth, provider, db };
