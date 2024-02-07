let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// Show cart
cart.forEach((item, index) => {
    document.querySelector('tbody').innerHTML +=
        `
    <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td><img src="image/${item.image}"</td>
        <td>${parseFloat(item.sale).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
        <td>
        <button class="sub" data-id="${item.id}">-</button>
        <span>${item.qty}</span>
        <button class="plus" data-id="${item.id}">+</button>
        </td>
        <td>${parseFloat(item.qty * item.sale).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>

        <td>
            <button class="delPro" data-id="${item.id}">Xóa</button>
        </td>
    </tr>
    `

});
// Tổng tiền
let sum = 0;
cart.forEach(item => {
    const sale = parseFloat(item.sale);
    const qty = parseFloat(item.qty);

    if (!isNaN(sale) && !isNaN(qty)) {
        sum += sale * qty;
    }
});

// Đổi tiền Việt Nam và cập nhật vào HTML
const formattedSum = sum.toLocaleString("vi-VN") + "đ";
document.getElementById('sumMoney').innerHTML = formattedSum;


// Xóa sản phẩm trong cart
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delPro')) {
        const id = e.target.getAttribute('data-id')
        console.log(id);
        // xoa sung lenh splice
        const index = cart.findIndex(item => item.id == id)
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();

    }
})
// Tăng số lượng
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus')) {
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const index = cart.findIndex(item => item.id == id)
        cart[index].qty += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();
    }
})
// Giảm số lượng
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('sub')) {
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const index = cart.findIndex(item => item.id == id);
        if (cart[index].qty > 1) {
            cart[index].qty -= 1;
        } else {
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();
    }
})
// Lấy avatar
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
if (user) {
    document.getElementById('avatar').src = user.photoURL;
}

// xử lý nút thanh toán 
document.getElementById("checkoutButton").addEventListener("click", function () {
    // Xử lý logic thanh toán nếu cần

    // Chuyển hướng đến trang thanh toán
    window.location.href = "pay.html";
});




