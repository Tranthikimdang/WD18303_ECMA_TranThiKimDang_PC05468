const tbody = document.querySelector('tbody');
function showPro() {
    tbody.innerHTML = ""
    data.forEach(function (item, index) {
        tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="../site/image/${item.image}" width="120px"></td>
            <td>${item.price}</td>
            <td>${item.sale}</td>
            <td>${item.category}</td>
            <td>${item.hotdeal}</td>
            <td>${item.star}</td>
            <td>${item.description}</td>
            <td>
                <button onclick="openEditPage(${item.id})">Sửa</button>
                <button onclick="deletePro(${item.id})">Xóa</button>
            </td>
        </tr>
        `
    })
}
showPro()
const addModal = document.querySelector('#addModal'); // id thì #
const closeAdd = document.querySelector('.close'); //class thì dấu .
document.querySelector('#openAddPage').onclick = function () {
    addModal.style.display = "block";
}
closeAdd.onclick = function () {
    addModal.style.display = "none";
}
var hotdeal = 0;
document.querySelector('#hotdeal').onchange = function () {
    if (this.checked) {
        hotdeal = 1;
    } else {
        hotdeal = 0;
    }
}
document.querySelector('#addPro').onclick = function () {
    const name = document.querySelector('#name').value;
    const image = document.querySelector('#image').value.split('\\').pop();
    const price = document.querySelector('#price').value;
    const sale = document.querySelector('#sale').value;
    const category = document.querySelector('#category').value;
    const description = document.querySelector('#description').value;
    console.log(name + image + price + sale + category + description);
    const pro = {
        'id': data[data.length - 1].id + 1,
        'name': name,
        'image': image,
        'price': price,
        'sale': sale,
        'category': category,
        'hotdeal': hotdeal,
        'star': 5,
        'description': description
    }
    data.push(pro);
    addModal.style.display = "none";
    showPro()
}
// sửa sản phẩm
const editModal = document.querySelector('#editModal');

function openEditPage(id) {
    const pro = data.find(item => item.id == id)
    editModal.style.display = 'block';
    editModal.innerHTML +=
        `
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="form">
            <label for="">Tên sản phẩm</label>
            <br>
            <input value="${pro.name}" type="text" id="editName">
            <br>
            <label for="">Hình ảnh</label>
            <br>
            <img src="../site/image/${pro.image}" width="200">
            <br>
            <input type="file" id="editImage">
            <br>
            <label for="">Giá</label>
            <br>
            <input value="${pro.price}" type="text" id="editPrice">
            <br>
            <label for="">Giá khuyến mãi</label>
            <br>
            <input value="${pro.sale}" type="text" id="editSale">
            <br>
            <label for="">Danh mục</label>
            <br>
            <select id="editCategory">
                <option ${pro.category == "Tivi" ? "selected" : ""} value="Tivi">Tivi</option>
                <option ${pro.category == "tủ lạnh" ? "selected" : ""} value="tủ lạnh">Tủ lạnh</option>
            </select>
            <br>
            <label for="">Hotdeal</label>
            <br>
            <input ${pro.hotdeal == "1" ? "checked" : ""} type="checkbox" id="editHotdeal">
            <br>
            <label for="">Mô tả</label>
            <br>
            <input value="${pro.description}" type="text" id="editDescription">
            <br>
            <button onclick="editPro(${id})" id="editPro">Sửa</button>
        </div>
    </div>
    `
}
function editPro(id) {
    const editName = document.querySelector('#editName').value
    var editImage = document.querySelector('#editImage').value.split("\\").pop()
    if (editImage == "") {
        editImage = data.find(item => id == id).image
    }
    const editPrice = document.querySelector('#editPrice').value
    const editSale = document.querySelector('#editSale').value
    const editCategory = document.querySelector('#editCategory').value
    var editHotdeal = document.querySelector('#editHotdeal').checked
    const editDescription = document.querySelector('#editDescription').value

    console.log(editName + editImage + editPrice + editSale + editCategory + editHotdeal + editDescription);
    const pro = {
        'id': id,
        'name': editName,
        'image': editImage,
        'price': editPrice,
        'sale': editSale,
        'category': editCategory,
        'hotdeal': editHotdeal == true ? 1 : 0,
        'star': 5,
        'description': editDescription
    }
    data = data.map(item => item.id == id ? pro : item)
    editModal.style.display = 'none';
    showPro();
}
// Xóa sản phẩm 
function deletePro(id) {
    data = data.filter(item => item.id != id)
    showPro();
}