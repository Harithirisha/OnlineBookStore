// script.js
document.getElementById("proceed-btn").addEventListener("click", function() {
    var paymentMode = document.querySelector('input[name="payment"]:checked').value;
  
    if (paymentMode === "cod") {
        showConfirmation();
        setTimeout(function() {
            window.history.back();
        }, 2000); // 2 seconds delay before redirecting
    } else if (paymentMode === "card") {
        var cardDetails = prompt("Please enter your credit card details:");
        if (cardDetails) {
            alert("Thank you for providing your credit card details.");
        } else {
            alert("Credit card details not provided.");
        }
    } else if (paymentMode === "upi") {
        var upiId = prompt("Please enter your UPI ID:");
        if (upiId) {
            alert("Thank you for providing your UPI ID.");
        } else {
            alert("UPI ID not provided.");
        }
    }
});
  
function showConfirmation() {
    var confirmationPopup = document.getElementById("confirmation-popup");
    confirmationPopup.style.display = "block";
}

