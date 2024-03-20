import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBKNxGgcJAGyo0FE2yn9GBXedWA8sK4yw4",
    authDomain: "onlinestore-17c38.firebaseapp.com",
    projectId: "onlinestore-17c38",
    storageBucket: "onlinestore-17c38.appspot.com",
    messagingSenderId: "685953840582",
    appId: "1:685953840582:web:c0619860986d0e97116ec7",
    measurementId: "G-H4BTHB6XJE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitData = document.getElementById("submit");
const forgotEmail = document.getElementById("email");

submitData.addEventListener("click", () => {
    const email = forgotEmail.value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            forgotEmail.value = "";
            Swal.fire("Congratulation!", "Your Password reset link has been sent to your email!", "success");
            // Redirect to login page after 4 seconds
            setTimeout(() => {
                window.location.href = "login.html";
            }, 4000);
        })
        .catch((error) => {
            console.error("Error sending password reset email:", error);
            const errorMessage = error.message;
            Swal.fire("Oops!", errorMessage, "error");
        });
});
