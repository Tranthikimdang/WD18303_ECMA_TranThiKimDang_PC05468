fetch('http://localhost:3000/data?hotdeal=1')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data.slice(0, 5); // Cắt bỏ 4 phần tử đầu tiên
            let hotdeal = document.getElementById('hotdeal');
            console.log(hotdeal);
            array.forEach(element => {
                console.log(element);
                hotdeal.innerHTML += `
                    <div class="sanpham border-blue">
                        <span class="label-tragop">Trả góp 1%</span>
                        <img src="image/${element.image}" alt="" />
                        <span class="label-sale"><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span>
                        <br />
                        <span>${element.name}</span>
                        <br />
                        <p class="gia">${element.price}đ <del> ${element.sale}đ</del></p>
                        <p class="online-gia-re">Online giá rẻ</p>
                        <p class="sao">${element.star}<i class="fa-solid fa-star"></i></p>
                    </div>
                `;
            });
        });
    })
    .catch(function (err) {
        console.log(err);
    });


fetch('http://localhost:3000/data?category=tủ lạnh')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data.slice(0, 5); // Cắt bỏ 4 phần tử đầu tiên
            let tulanh = document.getElementById('tulanh');
            console.log(tulanh);
            array.forEach(element => {
                console.log(element);
                tulanh.innerHTML += `
                    <div class="sanpham border-red">
                        <span class="label-tragop">Trả góp 1%</span>
                        <img src="image/${element.image}" alt="" />
                        <span class="label-sale"><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span>
                        <br />
                        <span>${element.name}</span>
                        <br />
                        <p class="gia">${element.price}đ <del> ${element.sale}đ</del></p>
                        <p class="online-gia-re">Online giá rẻ</p>
                        <p class="sao">${element.star}<i class="fa-solid fa-star"></i></p>
                    </div>
                `;
            });
        });
    })
    .catch(function (err) {
        console.log(err);
    });

fetch('http://localhost:3000/data?category=Tivi')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data.slice(0, 5); // Cắt bỏ 4 phần tử đầu tiên
            let tivi = document.getElementById('tivi');
            console.log(tivi);
            array.forEach(element => {
                console.log(element);
                tivi.innerHTML += `
                    <div class="sanpham border-green">
                        <span class="label-tragop">Trả góp 1%</span>
                        <img src="image/${element.image}" alt="" />
                        <span class="label-sale"><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span>
                        <br />
                        <span>${element.name}</span>
                        <br />
                        <p class="gia">${element.price}đ <del> ${element.sale}đ</del></p>
                        <p class="online-gia-re">Online giá rẻ</p>
                        <p class="sao">${element.star}<i class="fa-solid fa-star"></i></p>
                    </div>
                `;
            });
        });
    })
    .catch(function (err) {
        console.log(err);
    });