import { productService } from "../model/model.js";

const cate_hotdeal = document.getElementById('hotdeal');
const cate_tivi = document.getElementById('tivi');
const cate_tulanh = document.getElementById('tulanh');
productService.fetchData('http://localhost:3000/products?hotdeal=1&_sort=sale').then(data => {
    data.forEach(function (item) {
        cate_hotdeal.innerHTML += `
            <div class="sanpham border-blue">
              <span class="label-tragop">Trả góp 1%</span>
              <img src="image/${item.image}" alt="" />
              <span class="label-sale"><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span>
              <br />
              <span>${item.name}</span>
              <br />
              <p class="gia">${item.price}đ <del> ${item.sale}đ</del></p>
              <p class="online-gia-re">Online giá rẻ</p>
              <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
              <div class="div_btn_buy">
                <a href="../site/cart.html" style="text-decoration: none;">
                    <button data-id="${item.id}" class="btn_buy">Mua ngay</button>
                </a>
              </div>

            </div>
        `

    })

})

productService.fetchData('http://localhost:3000/products?category=Tivi&_limit=5').then(data => {
    data.forEach(function (item) {
        cate_tivi.innerHTML += `
        <div class="sanpham border-green">
          <span class="label-tragop">Trả góp 1%</span>
          <img src="image/${item.image}" alt="" />
          <span class="label-sale"><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span>
          <br />
          <span>${item.name}</span>
          <br />
          <p class="gia">${item.price}đ <del> ${item.sale}đ</del></p>
          <p class="online-gia-re">Online giá rẻ</p>
          <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
          <div class="div_btn_buy">
            <a href="../site/cart.html" style="text-decoration: none;">
                <button data-id="${item.id}" class="btn_buy">Mua ngay</button>
            </a>
          </div>
        </div>
    `
    })
})
productService.fetchData('http://localhost:3000/products?category=tủ%20lạnh&_limit=5').then(data => {
    data.forEach(function (item) {
        cate_tulanh.innerHTML += `
        <div class="sanpham border-red">
          <span class="label-tragop">Trả góp 1%</span>
          <img src="image/${item.image}" alt="" />
          <span class="label-sale"><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span>
          <br />
          <span>${item.name}</span>
          <br />
          <p class="gia">${item.price}đ <del> ${item.sale}đ</del></p>
          <p class="online-gia-re">Online giá rẻ</p>
          <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
          <div class="div_btn_buy">
            <a href="../site/cart.html" style="text-decoration: none;">
                <button data-id="${item.id}" class="btn_buy">Mua ngay</button>
            </a>
          </div>
        </div>
    `
    })
})

// Thêm vào giỏ hàng

document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn_buy')) {
        const id = e.target.getAttribute('data-id')
        console.log(id);
        const product = await productService.getDataById(id)
        console.log(product);
        // Kiểm tra có cart trong storage hay không? nếu có lấy nó, còn không thì mảng rỗng.
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        const index = cart.findIndex(item => item.id == product.id);
        if (index == -1) {
            product.qty = 1;
            cart.push(product);
        } else {
            cart[index].qty += 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem('cart')));
    }
})
// Lấy avatar
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
if (user) {
    document.getElementById('avatar').src = user.photoURL;
}
// show danh mục
const cate_category = document.getElementById('category');
const categoryList = document.getElementById('categoryList');

productService.fetchData('http://localhost:3000/category').then(data => {
    data.forEach(function (item) {
        categoryList.innerHTML += `<li>${item.categoryName}</li>`;
    });

    // Append the "Tất cả danh mục" link after loading categories
    cate_category.innerHTML += `
        <a href="#">Tivi</a>
        <a href="#">Tủ lạnh</a>
        <a href="#">Máy giặt</a>
        <a href="#">Máy nước nóng</a>
        <a href="#">Nồi cơm điện</a>
        <a href="#">Nồi chiên</a>
        <a href="#">Máy lọc nước</a>
        <a href="#">Điện thoại</a>
        <a href="#">Laptop</a>
        <a href="#">Đồ gia dụng</a>
    `;
});
