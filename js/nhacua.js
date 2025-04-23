// Function to open modal and set house type, reset fields
function openHouseModal(type) {
  document.getElementById("houseType").value = type;
  document.getElementById("houseValue").value = ''; // Reset house value input
  document.getElementById("housePrice").innerHTML = ''; // Reset price display
  document.getElementById("buyBtn").style.display = 'none'; // Hide 'Mua' button

  $('#houseInsuranceModal').modal('show');
}

// Function to calculate the house insurance price
function calculateHouseInsurance() {
  let houseType = document.getElementById("houseType").value;
  let value = document.getElementById("houseValue").value;

  // Check if house value is provided
  if (!value) {
    alert("Vui lòng nhập giá trị tài sản nhà!");
    return;
  }

  let price = 0;
  // Calculate price based on house type
  if (houseType === "Chung cư") {
    price = 3000000;
  } else if (houseType === "Nhà phố") {
    price = 5000000;
  }

  // Display the calculated price
  document.getElementById("housePrice").innerHTML = `Giá bảo hiểm: ${price.toLocaleString()} đồng`;
  document.getElementById("buyBtn").style.display = "inline-block"; // Show 'Mua' button
  document.getElementById("housePrice").setAttribute("data-price", price); // Store price for later use
}

// Function to confirm house insurance purchase and reset
function confirmHousePurchase() {
  let price = document.getElementById("housePrice").getAttribute("data-price");
  let type = document.getElementById("houseType").value;

  // Confirmation before purchase
  if (confirm(`Xác nhận mua bảo hiểm ${type} với giá ${Number(price).toLocaleString()} đồng?`)) {
    alert("Cảm ơn bạn đã mua bảo hiểm nhà cửa!");
    $('#houseInsuranceModal').modal('hide'); // Close the modal

    // Reset the fields and values
    document.getElementById("houseType").value = ''; // Reset house type
    document.getElementById("houseValue").value = ''; // Reset house value input
    document.getElementById("housePrice").innerHTML = ''; // Reset price display
    document.getElementById("buyBtn").style.display = 'none'; // Hide 'Mua' button
  }
}
