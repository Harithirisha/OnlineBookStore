let cart = [];
document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
    document.getElementById("makePaymentBtn").addEventListener("click", makePayment);
});

function displayCartItems() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = "";
    let totalPrice = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart data from localStorage
    cart.forEach((item, index) => {
        const productItemDiv = document.createElement("div");
        productItemDiv.classList.add("productItem");
        productItemDiv.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsDiv.appendChild(productItemDiv);
        totalPrice += item.price;
    });
    document.getElementById("total").textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
     cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart data from localStorage
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart data in localStorage
    displayCartItems(); // Update cart display
}
function makePayment() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    // const customerID = document.getElementById("customerID").value; // Get customer ID from input
    const totalprice = calculateTotalPrice();
    const items = cart.map(item => ({ [item.name]: item.price })); // Convert cart items to required format

    const requestBody = {
        confirmationStatus: true,
        // customerID: customerID,
        items: items,
        orderDate: new Date().toISOString(),
        orderPlaced: true,
        totalprice: totalprice
    };

    fetch('https://firestore.googleapis.com/v1/projects/onlinestore-17c38/databases/(default)/documents/Sales/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sales details stored successfully:', data);
        // Reset cart after successful payment
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        document.getElementById("paymentStatus").textContent = `Payment successful using ${paymentMethod}`;
    })
    .catch(error => {
        console.error('Error storing sales details:', error);
        document.getElementById("paymentStatus").textContent = 'Error making payment';
    });
}function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
}