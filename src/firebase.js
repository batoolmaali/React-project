
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcA6n0ePpUBXu8zbhD4nErV9wRzLyy-Sc",
    authDomain: "new-project-688a9.firebaseapp.com",
    projectId: "new-project-688a9",
    storageBucket: "new-project-688a9.appspot.com",
    messagingSenderId: "1065269595346",
    appId: "1:1065269595346:web:295020afde125468e5b10b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;