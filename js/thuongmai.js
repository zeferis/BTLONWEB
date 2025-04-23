function openCommercialModal(type) {
  document.getElementById("commercialModalTitle").textContent = `Bảo hiểm ${type}`;
  document.getElementById("comBrand").value = "";
  document.getElementById("comModel").value = "";
  document.getElementById("comYear").value = "";
  document.getElementById("comDuration").value = "";
  document.getElementById("comPriceBox").classList.add("d-none");
  document.getElementById("buyButtonBox").classList.add("d-none");
  $('#commercialModal').modal('show');
}

function tinhGiaCommercial() {
  const brand = document.getElementById("comBrand").value;
  const model = document.getElementById("comModel").value;
  const year = document.getElementById("comYear").value;
  const duration = document.getElementById("comDuration").value;

  if (brand && model && year && duration) {
    const gia = "5.000.000 đ";
    document.getElementById("comPrice").textContent = gia;
    document.getElementById("comPriceBox").classList.remove("d-none");
    document.getElementById("buyButtonBox").classList.remove("d-none");
  } else {
    alert("Vui lòng chọn đầy đủ thông tin để tính giá bảo hiểm.");
  }
}

function confirmCommercialBuy() {
  const brand = document.getElementById("comBrand").value;
  const model = document.getElementById("comModel").value;
  const year = document.getElementById("comYear").value;
  const duration = document.getElementById("comDuration").value;

  alert(`Đã mua bảo hiểm:\nHãng: ${brand}\nHiệu: ${model}\nNăm: ${year}\nThời hạn: ${duration}\nGiá: 5.000.000 đ`);
  alert("Cảm ơn bạn đã chọn Bảo hiểm Thương mại!");

  $('#commercialModal').modal('hide');

  document.getElementById("comBrand").value = "";
  document.getElementById("comModel").value = "";
  document.getElementById("comYear").value = "";
  document.getElementById("comDuration").value = "";
  document.getElementById("comPriceBox").classList.add("d-none");
  document.getElementById("buyButtonBox").classList.add("d-none");
}
