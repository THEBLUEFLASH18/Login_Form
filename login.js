// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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



const signIn = document.querySelector("#signIn")
signIn.addEventListener('submit', (e)=>{
  e.preventDefault()

  const email = signIn['signIn-email'].value
  const password = signIn['signIn-password'].value
  auth.signInWithEmailAndPassword(email, password)
    .then(cred =>{
      console.log(cred.user)
    })
})