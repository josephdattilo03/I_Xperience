// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3EeTVAiofYuQHtoDpxxTDvJdRqlJtYaE",
    authDomain: "recipe-book-3827f.firebaseapp.com",
    projectId: "recipe-book-3827f",
    storageBucket: "recipe-book-3827f.appspot.com",
    messagingSenderId: "465159841909",
    appId: "1:465159841909:web:bfb6e5a1e71653c261303c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export{db, auth}