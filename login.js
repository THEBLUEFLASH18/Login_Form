// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(process.env.API_KEY);
const analytics = getAnalytics(app);

const auth = getAuth(app);

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