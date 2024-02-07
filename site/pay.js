import { payService } from '../model/model.js'

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
let sum = 0;
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if (user) {
        document.getElementById('avatar').src = user.photoURL;
    }
    cart.forEach(item => {
        const sale = parseFloat(item.sale);
        const qty = parseFloat(item.qty);

        if (!isNaN(sale) && !isNaN(qty)) {
            sum += sale * qty;
        }
    });
    console.log(cart);

    document.querySelector("#total-pay strong").innerText = sum.toLocaleString("vi-VN") + "đ";
    let btnSubmit = document.getElementById("submitBtn");
    btnSubmit.onclick = validateForm
})

const validateForm = async () => {
    console.log('abcd');
    let customerName = document.getElementById("fullName").value;
    let customerPhoneNumber = document.getElementById("phoneNumber").value;
    let customerAddress = document.getElementById("address").value;
    let promoCode = document.getElementById("promoCode").value;


    if (fullName === "" || phoneNumber === "" || address === "") {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        // Submit the form or perform other actions
        document.getElementById("errorMessage").style.display = "none";
        const prdInfo = cart.reduce((result, c) => { return { ...result, [c.id]: c.qty } }, {})
        console.log(cart);
        await payService.addData({ customerName, customerPhoneNumber, customerAddress, promoCode, sum, prdInfo })
        alert("Form submitted successfully!");
        document.getElementById("fullName").value = '';
        document.getElementById("phoneNumber").value = '';
        document.getElementById("address").value = '';
        document.getElementById("promoCode").value = '';
    }

}

