// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
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



const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const email = signUpForm.email.value
    const password = signUpForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred)=>{
            console.log("User created: ", cred.user)
            signUpForm.reset()
        })
        .catch((err)=>{
            console.log(err)
        })
});