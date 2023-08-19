import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALBzB90XrQ-d_QA6hH_fCQi-7QMzAo-OA",
  authDomain: "smit-personal-blogging-app.firebaseapp.com",
  projectId: "smit-personal-blogging-app",
  storageBucket: "smit-personal-blogging-app.appspot.com",
  messagingSenderId: "726175458386",
  appId: "1:726175458386:web:34619d152789782a6aab8b",
  measurementId: "G-N0YF465XZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
let regbtn = document.getElementById("register-btn")


regbtn && regbtn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");





  createUserWithEmailAndPassword(auth, email.value, password.value)
        

    .then((userCredential) => {
      //     // Signed in 
      const user = userCredential.user;
      alert('User ---->', user)
      //     // ...
      // window.location.assign('Login.html')
      alert("successfully Register")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error--->', errorMessage)
      //     // ..
      alert("Invalid Entry")
    });
  

})
let logbtn = document.getElementById("logbtn")


logbtn && logbtn.addEventListener("click", function () {
  let lemail = document.getElementById("logemail");
  let lpassword = document.getElementById("logpassword");


  signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert("Log in")
  
        window.location.assign("Dashboard.html")

        })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid Entry")
    });

})


