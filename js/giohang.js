// Function to load cart items from LocalStorage and display them
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("vehiclePurchases")) || [];
    const cartTableBody = document.getElementById("cartTableBody");
    const totalPriceElement = document.getElementById("totalPrice");

    // Clear the table before adding new items
    cartTableBody.innerHTML = "";

    // Calculate total price
    let totalPrice = 0;

    cartItems.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${item.brand}</td>
        <td>${item.model}</td>
        <td>${item.year}</td>
        <td>${item.insuranceType}</td>
        <td>${item.price.toLocaleString()} đồng</td>
        <td><button class="btn btn-danger" onclick="removeItem('${item.date}')">Xóa</button></td>
      `;

        cartTableBody.appendChild(row);
        totalPrice += item.price;
    });

    totalPriceElement.innerHTML = "Tổng giá: " + totalPrice.toLocaleString() + " đồng";
}

// Function to remove item from cart
function removeItem(date) {
    let cartItems = JSON.parse(localStorage.getItem("vehiclePurchases")) || [];
    cartItems = cartItems.filter(item => item.date !== date);
    localStorage.setItem("vehiclePurchases", JSON.stringify(cartItems));
    loadCart();
}

// Function to handle checkout process
function checkout() {
    const cartItems = JSON.parse(localStorage.getItem("vehiclePurchases")) || [];
    if (cartItems.length === 0) {
        alert("Giỏ hàng của bạn trống!");
        return;
    }

    alert("Cảm ơn bạn đã thanh toán!"); // Here you can add a more detailed checkout process
    localStorage.removeItem("vehiclePurchases"); // Clear the cart after checkout
    loadCart(); // Reload the cart after checkout
}

// Load the cart items when the page loads
window.onload = function () {
    loadCart();
};
