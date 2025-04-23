
// Kiểm tra đăng nhập khi tải trang
window.onload = function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    document.getElementById("userEmail").innerText = "Xin chào, " + loggedInUser.name;
    document.getElementById("navLogin").classList.add("d-none");
    document.getElementById("navRegister").classList.add("d-none");
    document.getElementById("navUser").classList.remove("d-none");
    document.getElementById("navLogout").classList.remove("d-none");
  }
}

// Đăng xuất
window.logoutUser = function () {
  localStorage.removeItem("loggedInUser");
  document.getElementById("navLogin").classList.remove("d-none");
  document.getElementById("navRegister").classList.remove("d-none");
  document.getElementById("navUser").classList.add("d-none");
  document.getElementById("navLogout").classList.add("d-none");
  alert("Đăng xuất thành công!");
}
