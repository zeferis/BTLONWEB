// Function to open modal and calculate price for health insurance
function openHealthInsuranceModal(insuranceType) {
  $('#healthInsuranceModal').modal('show'); // Show modal
  document.getElementById("insuranceType").value = insuranceType; // Set insurance type

  // Reset form fields and hide the price display and button
  document.getElementById("ageGroupSelect").value = ""; // Reset age group
  document.getElementById("priceDisplay").innerHTML = "";
  document.getElementById("purchaseButton").style.display = 'none'; // Hide 'Mua' button
}

// Function to calculate the price for health insurance
function calculateHealthInsurancePrice() {
  var ageGroup = document.getElementById("ageGroupSelect").value;
  var insuranceType = document.getElementById("insuranceType").value;

  // If age group is not selected, reset price display and hide button
  if (!ageGroup) {
    document.getElementById("priceDisplay").innerHTML = "";
    document.getElementById("purchaseButton").style.display = 'none'; // Hide 'Mua' button
    return;
  }

  var price = 2000000; // Default price for basic health insurance
  if (insuranceType === "Bảo hiểm Sức Khỏe Toàn Diện") {
    price = 4000000; // Price for comprehensive health insurance
  }

  // Display the price and show the purchase button
  document.getElementById("priceDisplay").innerHTML = "Giá bảo hiểm: " + price.toLocaleString() + " đồng";
  document.getElementById("purchaseButton").style.display = 'inline'; // Show 'Mua' button
  document.getElementById("priceDisplay").setAttribute("data-price", price); // Store price for later use
}

// Function to confirm the purchase
function confirmPurchase() {
  var price = document.getElementById("priceDisplay").getAttribute("data-price");
  var insuranceType = document.getElementById("insuranceType").value;
  var confirmation = confirm("Bạn chắc chắn muốn mua bảo hiểm " + insuranceType + " với giá " + price.toLocaleString() + " đồng?");
  if (confirmation) {
    alert("Cảm ơn bạn đã mua bảo hiểm " + insuranceType + "!");
    $('#healthInsuranceModal').modal('hide'); // Close the modal
  }
}
