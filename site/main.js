var pro_hotdeal = data.filter(function (item) {
    return item.hotdeal == 1;
})
console.log(pro_hotdeal);
var pro_tulanh = data.filter(function (item) {
    return item.category == "tủ lạnh";
}).slice(0, 5)
console.log(pro_tulanh);
var pro_tivi = data.filter(function (item) {
    return item.category == "Tivi";
}).slice(0, 5)
console.log(pro_tivi);
const cate_hotdeal = document.querySelector("#hotdeal");
const cate_tulanh = document.querySelector("#tulanh");
const cate_tivi = document.querySelector("#tivi");
pro_hotdeal.forEach(function (item) {
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
        </div>
    `
})
pro_tulanh.forEach(function (item) {
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
        </div>
    `
})
pro_tivi.forEach(function (item) {
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
        </div>
    `
})
