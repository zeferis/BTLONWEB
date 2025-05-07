// Giỏ hàng (lưu trữ trong localStorage)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm mở modal bảo hiểm
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

// Hàm tính giá bảo hiểm
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

// Hàm thêm vào giỏ hàng
function addToCart() {
  var price = document.getElementById("priceDisplay").getAttribute("data-price");
  var insuranceType = document.getElementById("insuranceType").value;
  var destination = document.getElementById("destinationSelect").value;
  var duration = document.getElementById("durationSelect").value;
  var ageGroup = document.getElementById("ageGroupSelect").value;

  // Thêm sản phẩm vào giỏ hàng
  var item = {
    type: insuranceType,
    price: price,
    destination: destination,
    duration: duration,
    ageGroup: ageGroup
  };

  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Cập nhật giỏ hàng trên giao diện
  updateCartCount();

  alert("Sản phẩm đã được thêm vào giỏ hàng!");
  $('#insuranceModal').modal('hide'); // Đóng modal
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
  var cartCount = cart.length;
  document.getElementById('cartCount').textContent = cartCount;
}

// Khi trang được tải, cập nhật số lượng sản phẩm trong giỏ hàng
window.onload = function () {
  updateCartCount();
};

// Hàm mở giỏ hàng
function openCart() {
  // Kiểm tra nếu giỏ hàng rỗng
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn hiện tại không có sản phẩm.");
    return;
  }

  // Hiển thị danh sách giỏ hàng
  var cartDetails = '';
  cart.forEach(function (item, index) {
    cartDetails += `<div>
                      <h5>${item.type}</h5>
                      <p>Điểm đến: ${item.destination}</p>
                      <p>Thời gian: ${item.duration}</p>
                      <p>Nhóm tuổi: ${item.ageGroup}</p>
                      <p>Giá: ${parseInt(item.price).toLocaleString()} đồng</p>
                      <hr>
                    </div>`;
  });

  // Hiển thị tổng tiền giỏ hàng
  var totalPrice = cart.reduce((total, item) => total + parseInt(item.price), 0);
  cartDetails += `<div><strong>Tổng giá trị: ${totalPrice.toLocaleString()} đồng</strong></div>`;

  document.getElementById('cartDetails').innerHTML = cartDetails;
  $('#cartModal').modal('show');
}

// Hàm xóa sản phẩm trong giỏ hàng
function removeFromCart(index) {
  // Xóa sản phẩm khỏi giỏ hàng
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Cập nhật lại giỏ hàng
  updateCartCount();

  // Cập nhật giỏ hàng trong modal
  openCart();
}
