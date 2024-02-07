import { payService, productService } from "../model/model.js";
const tbody = document.querySelector('tbody');
const showPro = async () => {

    const listOrder = await payService.fetchData()
    listOrder.forEach(async (item, index) => {

        const row = document.createElement("tr");
        row.appendChild(createCell(index + 1, ""));
        row.appendChild(createCell(item.customerName, ""));
        row.appendChild(createCell(item.customerPhoneNumber, ""));
        row.appendChild(createCell(item.customerAddress, ""));
        row.appendChild(createCell(item.sum.toLocaleString("vi-VN") + 'đ', ""));

        const detailCell = document.createElement("td");
        const detailSpan = document.createElement("span");
        detailSpan.textContent = "Xem chi tiết";
        detailSpan.addEventListener("click", () => handleShowPrd(item.prdInfo));
        detailCell.appendChild(detailSpan);
        row.appendChild(detailCell);
        row.appendChild(detailCell);
        tbody.appendChild(row);
    })

}
showPro()
const handleShowPrd = async (prds) => {
    console.log(prds);
    const addModal = document.querySelector('#addModal');
    const closeAdd = document.querySelector('.close');
    addModal.style.display = "block";
    closeAdd.onclick = function () {
        addModal.style.display = "none";
    }
    const contentModal = document.querySelector('.modal-content tbody')
    contentModal.innerHTML = ''
    for (let key in prds) {
        const prd = await productService.fetchData(`http://localhost:3000/products?id=${key}`)
        if (prd.length > 0) {

            contentModal.innerHTML += `
            <tr>
            <th class="text-truncate">${prd[0]?.name}</th>
            <th class="text-truncate"><img src="../site/image/${prd[0]?.image}" width="auto" height="100"></th>
            <th class="text-truncate">${Number(prd[0]?.sale).toLocaleString("vi-VN")}đ</th>
            <th class="text-truncate">${prds[key]}</th>
            <th class="text-truncate">${(Number(prd[0]?.sale) * Number(prds[key])).toLocaleString("vi-VN")}đ</th>
            </tr>
            `
        }
    }
}

// sự kiện nút đăng xuất 
document.getElementById('logoutButton').addEventListener('click', function () {
    // Xử lý đăng xuất ở đây (ví dụ: xóa token, thông tin đăng nhập, ...)

    // Chuyển hướng đến trang đăng nhập
    window.location.href = '../authentication/login.html';
});

const createCell = (content, className) => {
    const cell = document.createElement("td");
    cell.className = className;
    cell.textContent = content;
    return cell;
};

