// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5PiPTdCoDzvjVjpzo7d93XXrbMPqI7ko",
  authDomain: "news-master-bf3d0.firebaseapp.com",
  projectId: "news-master-bf3d0",
  storageBucket: "news-master-bf3d0.appspot.com",
  messagingSenderId: "883782568491",
  appId: "1:883782568491:web:e0cf34d44b80a0b137b86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app