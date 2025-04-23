function openGroupModal(type) {
  document.getElementById("groupType").value = type;
  document.getElementById("groupMembers").value = '';
  document.getElementById("groupDuration").value = '1';
  document.getElementById("groupPrice").innerHTML = '';
  document.getElementById("buyGroupBtn").style.display = "none";
  new bootstrap.Modal(document.getElementById("groupInsuranceModal")).show();
}

function calculateGroupInsurance() {
  const type = document.getElementById("groupType").value;
  const members = parseInt(document.getElementById("groupMembers").value);
  const duration = parseInt(document.getElementById("groupDuration").value);

  if (!members || members < 1) {
    alert("Vui lòng nhập số lượng thành viên hợp lệ.");
    return;
  }

  let base = 1000000;
  if (type === "Nhóm Công ty") base = 2000000;
  else if (type === "Nhóm Câu lạc bộ") base = 1500000;

  let price = base + (members * 80000);
  price *= duration;

  document.getElementById("groupPrice").innerHTML = `Giá bảo hiểm: ${Math.round(price).toLocaleString()} đồng (${duration} năm)`;
  document.getElementById("groupPrice").setAttribute("data-price", price);
  document.getElementById("buyGroupBtn").style.display = "inline-block";
}

function confirmGroupPurchase() {
  const type = document.getElementById("groupType").value;
  const price = document.getElementById("groupPrice").getAttribute("data-price");
  const duration = document.getElementById("groupDuration").value;
  if (confirm(`Bạn có muốn mua bảo hiểm ${type} trong ${duration} năm với giá ${Number(price).toLocaleString()} đồng?`)) {
    alert("Cảm ơn bạn đã chọn Bảo hiểm Nhóm!");
    bootstrap.Modal.getInstance(document.getElementById("groupInsuranceModal")).hide();
  }
}
