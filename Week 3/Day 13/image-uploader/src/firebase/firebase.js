// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZhJMgNcbm45Iz-kUt-sg3SZsh2F75JiY",
    authDomain: "movie-list-cfbab.firebaseapp.com",
    projectId: "movie-list-cfbab",
    storageBucket: "movie-list-cfbab.appspot.com",
    messagingSenderId: "611071660336",
    appId: "1:611071660336:web:54c66c0044cea0533ff8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}