// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKNxGgcJAGyo0FE2yn9GBXedWA8sK4yw4",
  authDomain: "onlinestore-17c38.firebaseapp.com",
  projectId: "onlinestore-17c38",
  storageBucket: "onlinestore-17c38.appspot.com",
  messagingSenderId: "685953840582",
  appId: "1:685953840582:web:c0619860986d0e97116ec7",
  measurementId: "G-H4BTHB6XJE"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
 
var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };
 
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      if(obj.email=="thirishak2003@gmail.com" || obj.email=="harithirishak@gmail.com"){
        window.location.replace('admin.html');
      }
      else{
        window.location.replace('customerpg.html');
      }
     
    })
    .catch(function (err) {
      alert("login error"+err);
    });
 
  console.log(obj);
}
 
 
 