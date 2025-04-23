// Đăng ký người dùng
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const phone = document.getElementById("registerPhone").value;
  const product = document.getElementById("registerProduct").value;
  const password = document.getElementById("registerPassword").value;

  // Kiểm tra định dạng email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ!");
    return;
  }

  // Kiểm tra số điện thoại
  const phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng số điện thoại.");
    return;
  }

  // Kiểm tra xem người dùng đã chọn sản phẩm chưa
  if (!product) {
    alert("Vui lòng chọn loại sản phẩm bảo hiểm.");
    return;
  }

  // Kiểm tra xem email đã tồn tại chưa
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.email === email)) {
    alert("Email đã tồn tại!");
    return;
  }

  // Lưu thông tin người dùng vào localStorage
  users.push({ name, email, phone, product, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công!");
  bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
});

// Đăng nhập người dùng
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Kiểm tra thông tin đăng nhập
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Lưu thông tin đăng nhập
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    document.getElementById("userEmail").innerText = "Xin chào, " + user.name;
    document.getElementById("navLogin").classList.add("d-none");
    document.getElementById("navRegister").classList.add("d-none");
    document.getElementById("navUser").classList.remove("d-none");
    document.getElementById("navLogout").classList.remove("d-none");
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  } else {
    alert("Sai email hoặc mật khẩu!");
  }
});

// Đăng xuất
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("navLogin").classList.remove("d-none");
  document.getElementById("navRegister").classList.remove("d-none");
  document.getElementById("navUser").classList.add("d-none");
  document.getElementById("navLogout").classList.add("d-none");
  alert("Đăng xuất thành công!");
}

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
