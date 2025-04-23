function openDynamicModal(type) {
  // Reset form fields and price display
  document.getElementById("dynamicType").value = type;
  document.getElementById("activityType").value = 'Thể thao';
  document.getElementById("dynamicDuration").value = '1';
  document.getElementById("dynamicPrice").innerHTML = '';
  document.getElementById("buyDynamicBtn").style.display = "none";

  // Show the modal
  new bootstrap.Modal(document.getElementById("dynamicInsuranceModal")).show();
}

function calculateDynamicInsurance() {
  const activity = document.getElementById("activityType").value;
  const months = parseInt(document.getElementById("dynamicDuration").value);

  let basePrice = 500000;
  if (activity === "Leo núi") basePrice = 800000;
  else if (activity === "Du lịch bụi") basePrice = 600000;

  const total = basePrice * months;

  document.getElementById("dynamicPrice").innerHTML = `Giá bảo hiểm: ${total.toLocaleString()} đồng cho ${months} tháng`;
  document.getElementById("dynamicPrice").setAttribute("data-price", total);
  document.getElementById("buyDynamicBtn").style.display = "inline-block";
}

function confirmDynamicPurchase() {
  const type = document.getElementById("dynamicType").value;
  const price = document.getElementById("dynamicPrice").getAttribute("data-price");
  const months = document.getElementById("dynamicDuration").value;

  if (confirm(`Bạn có muốn mua bảo hiểm ${type} trong ${months} tháng với giá ${Number(price).toLocaleString()} đồng?`)) {
    alert("Cảm ơn bạn đã chọn Bảo hiểm Năng động!");
    bootstrap.Modal.getInstance(document.getElementById("dynamicInsuranceModal")).hide();
  }
}
