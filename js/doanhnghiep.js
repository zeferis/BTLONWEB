function openBusinessModal(type) {
  // Reset form fields and price display
  document.getElementById("businessType").value = type;
  document.getElementById("employeeCount").value = '';
  document.getElementById("assetValue").value = '';
  document.getElementById("businessDuration").value = '1';
  document.getElementById("businessPrice").innerHTML = '';
  document.getElementById("buyBusinessBtn").style.display = "none";

  // Show the modal
  new bootstrap.Modal(document.getElementById("businessInsuranceModal")).show();
}

function calculateBusinessInsurance() {
  const type = document.getElementById("businessType").value;
  const employees = parseInt(document.getElementById("employeeCount").value);
  const asset = parseInt(document.getElementById("assetValue").value);
  const duration = parseInt(document.getElementById("businessDuration").value);

  if (!employees || !asset) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  let base = 0;
  if (type === "Văn phòng") base = 3000000;
  else if (type === "Nhà máy") base = 7000000;
  else if (type === "Cửa hàng") base = 5000000;

  let price = base + (employees * 100000) + (asset * 0.005);
  price *= duration;

  document.getElementById("businessPrice").innerHTML = `Giá bảo hiểm: ${Math.round(price).toLocaleString()} đồng (${duration} năm)`;
  document.getElementById("businessPrice").setAttribute("data-price", price);
  document.getElementById("buyBusinessBtn").style.display = "inline-block";
}

function confirmBusinessPurchase() {
  const type = document.getElementById("businessType").value;
  const price = document.getElementById("businessPrice").getAttribute("data-price");
  const duration = document.getElementById("businessDuration").value;
  if (confirm(`Bạn có chắc chắn muốn mua bảo hiểm ${type} trong ${duration} năm với giá ${Number(price).toLocaleString()} đồng?`)) {
    alert("Cảm ơn bạn đã mua bảo hiểm doanh nghiệp!");
    bootstrap.Modal.getInstance(document.getElementById("businessInsuranceModal")).hide();
  }
}
