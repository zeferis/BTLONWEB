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

// Function to calculate the price based on selected vehicle details
function calculatePrice() {
  var brand = document.getElementById("brandSelect").value;
  var model = document.getElementById("modelSelect").value;
  var year = document.getElementById("yearSelect").value;
  var insuranceType = document.getElementById("insuranceType").value;

  // Reset the price if any input is missing
  if (!brand || !model || !year) {
    document.getElementById("priceDisplay").innerHTML = "";
    document.getElementById("purchaseButton").style.display = 'none'; // Hide 'Mua' button
    return;
  }

  var price = 5000000; // Default price
  if (insuranceType === "Bảo hiểm Ô tô Bắt buộc" || insuranceType === "Bảo hiểm Bắt buộc Xe máy") {
    price = 4000000; // Price for compulsory insurance
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
function handleCarCompulsoryInsurance() {
  openInsuranceModal("Bảo hiểm Ô tô Bắt buộc");
}

function handleMotorcycleCompulsoryInsurance() {
  openInsuranceModal("Bảo hiểm Xe máy Bắt buộc");
}

function handleCarVoluntaryInsurance() {
  openInsuranceModal("Bảo hiểm Ô tô Tự nguyện");
}

function handleMotorcycleVoluntaryInsurance() {
  openInsuranceModal("Bảo hiểm Xe máy Tự nguyện");
}
