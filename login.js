// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4ZcpC1dFu31INK637buxdc1trjStJIA",
  authDomain: "gaming-tournament-18.firebaseapp.com",
  projectId: "gaming-tournament-18",
  storageBucket: "gaming-tournament-18.appspot.com",
  messagingSenderId: "394670526321",
  appId: "1:394670526321:web:b6e60d71fd1e8ec46070d0",
  measurementId: "G-4MR4WVTG3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);