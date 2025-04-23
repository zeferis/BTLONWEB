// Function to open the insurance modal and set insurance type
function openInsuranceModal(insuranceType) {
  // Reset form fields
  document.getElementById("insuranceForm").reset();

  // Set the insurance type
  document.getElementById("insuranceType").value = insuranceType;

  // Hide the price display and button initially
  document.getElementById("priceDisplay").innerHTML = "";
  document.getElementById("purchaseButton").style.display = 'none';

  // Show the modal
  $('#insuranceModal').modal('show');
}

// Function to calculate the price based on selected travel details
function calculatePrice() {
  var destination = document.getElementById("destinationSelect").value;
  var duration = document.getElementById("durationSelect").value;
  var ageGroup = document.getElementById("ageGroupSelect").value;
  var insuranceType = document.getElementById("insuranceType").value;

  // Reset the price if any input is missing
  if (!destination || !duration || !ageGroup) {
    document.getElementById("priceDisplay").innerHTML = "";
    document.getElementById("purchaseButton").style.display = 'none'; // Hide 'Mua' button
    return;
  }

  var price = 3000000; // Default price for basic travel insurance
  if (insuranceType === "Bảo hiểm Du Lịch Quốc Tế") {
    price = 5000000; // Price for international travel insurance
  }

  // Display the price and show the purchase button
  document.getElementById("priceDisplay").innerHTML = "Giá bảo hiểm: " + price.toLocaleString() + " đồng";
  document.getElementById("purchaseButton").style.display = 'inline'; // Show 'Mua' button
  document.getElementById("priceDisplay").setAttribute("data-price", price); // Store price for later use
}

// Function to confirm the purchase of the insurance
function confirmPurchase() {
  var price = document.getElementById("priceDisplay").getAttribute("data-price");
  var insuranceType = document.getElementById("insuranceType").value;
  var confirmation = confirm("Bạn chắc chắn muốn mua bảo hiểm " + insuranceType + " với giá " + price.toLocaleString() + " đồng?");
  if (confirmation) {
    alert("Cảm ơn bạn đã mua bảo hiểm " + insuranceType + "!");
    $('#insuranceModal').modal('hide'); // Close the modal
  }
}

// Specific actions for each image (insurance type)
function handleTravelInsurance() {
  openInsuranceModal("Bảo hiểm Du Lịch Quốc Tế");
}
