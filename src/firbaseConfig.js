// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCQMLS5pt06YdzmKH8wCBPWiOSwfLU-c",
  authDomain: "todo-94614.firebaseapp.com",
  projectId: "todo-94614",
  storageBucket: "todo-94614.appspot.com",
  messagingSenderId: "619629093104",
  appId: "1:619629093104:web:5244bec4decf808337e235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);