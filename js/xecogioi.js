// Function to open the insurance modal and set insurance type
function openInsuranceModal(insuranceType) {
  document.getElementById("insuranceForm").reset();
  document.getElementById("insuranceType").value = insuranceType;
  document.getElementById("priceDisplay").innerHTML = "";
  document.getElementById("purchaseButton").style.display = 'none';
  $('#insuranceModal').modal('show');
}

// Function to calculate the price based on selected vehicle details
function calculatePrice() {
  var brand = document.getElementById("brandSelect").value;
  var model = document.getElementById("modelSelect").value;
  var year = document.getElementById("yearSelect").value;
  var insuranceType = document.getElementById("insuranceType").value;

  if (!brand || !model || !year) {
    document.getElementById("priceDisplay").innerHTML = "";
    document.getElementById("purchaseButton").style.display = 'none';
    return;
  }

  var price = 5000000;
  if (insuranceType === "Bảo hiểm Ô tô Bắt buộc" || insuranceType === "Bảo hiểm Xe máy Bắt buộc") {
    price = 4000000;
  }

  document.getElementById("priceDisplay").innerHTML = "Giá bảo hiểm: " + price.toLocaleString() + " đồng";
  document.getElementById("purchaseButton").style.display = 'inline';
  document.getElementById("priceDisplay").setAttribute("data-price", price);
}

// Function to confirm the purchase of the insurance and save to localStorage
function confirmPurchase() {
  var brand = document.getElementById("brandSelect").value;
  var model = document.getElementById("modelSelect").value;
  var year = document.getElementById("yearSelect").value;
  var insuranceType = document.getElementById("insuranceType").value;
  var price = parseInt(document.getElementById("priceDisplay").getAttribute("data-price"));

  var confirmation = confirm("Bạn chắc chắn muốn mua bảo hiểm " + insuranceType + " với giá " + price.toLocaleString() + " đồng?");
  if (confirmation) {
    alert("Cảm ơn bạn đã mua bảo hiểm " + insuranceType + "!");

    // Lưu vào localStorage
    var purchase = {
      brand: brand,
      model: model,
      year: year,
      insuranceType: insuranceType,
      price: price,
      date: new Date().toLocaleString()
    };

    var purchases = JSON.parse(localStorage.getItem("vehiclePurchases")) || [];
    purchases.push(purchase);
    localStorage.setItem("vehiclePurchases", JSON.stringify(purchases));

    // Reset UI
    $('#insuranceModal').modal('hide');
    document.getElementById("insuranceForm").reset();
    document.getElementById("priceDisplay").innerHTML = "";
    document.getElementById("purchaseButton").style.display = 'none';
  }
}

// Specific actions for each insurance type
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
