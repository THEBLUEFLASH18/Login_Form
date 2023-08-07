// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = process.env.API_KEY;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "gaming-tournament-18.firebaseapp.com",
    projectId: "gaming-tournament-18",
    storageBucket: "gaming-tournament-18.appspot.com",
    messagingSenderId: "394670526321",
    appId: "1:394670526321:web:8fa3d856731a7d536070d0",
    measurementId: "G-KZBYC63QZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(); // If you're using Firestore

const signIn = document.querySelector("#signIn")
signIn.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signIn['signIn-email'].value
    const password = signIn['signIn-password'].value
    signInWithEmailAndPassword(auth, email, password)
        .then(cred => {
            console.log(cred.user)
        })
});
