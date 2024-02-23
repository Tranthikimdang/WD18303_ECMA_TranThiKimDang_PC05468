const API_URL = "https://lab8-38c1e-default-rtdb.asia-southeast1.firebasedatabase.app/";

// Hàm để lấy danh sách người dùng
let getUsers = async () => {
    let response = await fetch(API_URL + "users.json");
    return await response.json();
};

// Hàm để tạo người dùng mới và hiển thị trên màn hình
function createUserAndDisplay(form) {
    let data = new FormData(form);
    let object = {
        displayName: data.get("displayName"),
        address: data.get("address"),
        phoneNumber: data.get("phoneNumber"),
        photoURL: data.get("photoURL"),
    };

    fetch(API_URL + "users.json", {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(newUser => {
            console.log("Người dùng đã được tạo:", newUser);
            // Hiển thị thông tin người dùng mới trực tiếp sau khi tạo
            displayUser(newUser);
            // Load lại trang
            location.reload();
        })
        .catch(error => {
            console.error("Lỗi khi tạo người dùng:", error);
        });
}

// Thêm người dùng
function displayUser(user) {
    let tbody = document.getElementById('idDanhsachtBody');

    let html = `
        <tr class="">
            <td scope="row">${user.displayName}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td><img src="${user.photoURL}" alt="User Photo" style="width: 50px; height: 50px;"></td>
            <td><button class="btn btn-primary" onclick="userEdit('${user.id}')">Sửa</button></td>
            <td><button class="btn btn-danger" onclick="userDelete('${user.id}')">Xóa</button></td>
        </tr>
    `;


    tbody.innerHTML += html;
}

// Sửa người dùng
let userEdit = (idUser) => {
    let getOneUser = async (idUser) => {
        let response = await fetch(API_URL + "users/" + idUser + ".json");
        return await response.json();
    };

    getOneUser(idUser).then((user) => {
        console.log(user);

        // Điền dữ liệu vào form sửa
        document.querySelector('input[name="displayName"]').value = user.displayName;
        document.querySelector('input[name="address"]').value = user.address;
        document.querySelector('input[name="phoneNumber"]').value = user.phoneNumber;
        document.querySelector('input[name="photoURL"]').value = user.photoURL;

        // Thêm sự kiện lắng nghe cho form sửa người dùng
        document.getElementById('editUserForm').addEventListener('submit', async function (event) {
            event.preventDefault();

            // Gọi hàm updateUser để cập nhật người dùng
            await updateUser(idUser, {
                displayName: document.querySelector('input[name="displayName"]').value,
                address: document.querySelector('input[name="address"]').value,
                phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
                photoURL: document.querySelector('input[name="photoURL"]').value,
            });


            // // Load lại trang
            location.reload();
        });
    });
}

// Cập nhật thông tin người dùng
async function updateUser(idUser, updatedUserData) {
    await fetch(API_URL + "users/" + idUser + ".json", {
        method: "PATCH", // Sử dụng PATCH để cập nhật dữ liệu mà không ghi đè
        body: JSON.stringify(updatedUserData),
    });
}

// Xóa người dùng

function userDelete(idUser) {
    if (confirm("Bạn có chắc muốn xóa người dùng này?")) {
        fetch(API_URL + "users/" + idUser + ".json", {
            method: "DELETE"
        })
            .then(() => {
                // Xóa người dùng khỏi DOM
                deleteDOM(idUser);
                // Load lại trang
                location.reload();
            })
            .catch(error => {
                console.error("Lỗi khi xóa người dùng:", error);
            });
    }
}

// Hàm để xóa người dùng khỏi DOM
function deleteDOM(idUser) {
    let userRow = document.querySelector(`tr[data-user-id="${idUser}"]`);
    if (userRow) {
        userRow.remove();
    }
}

// Sự kiện người dùng form thêm mới người dùng
document.getElementById('formUser').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gọi hàm createUserAndDisplay
    createUserAndDisplay(this);

    // Xóa trắng các trường form
    this.reset();
});

// Load danh sách người dùng và hiển thị trên màn hình
getUsers()
    .then((users) => {
        console.log(users);
        let html = '';
        let tbody = document.getElementById('idDanhsachtBody');

        Object.entries(users).forEach(([key, user]) => {
            html += `
                <tr class="">
                    <td scope="row">${user.displayName}</td>
                    <td>${user.address}</td>
                    <td>${user.phoneNumber}</td>
                    <td><img src="${user.photoURL}" alt="User Photo" style="width: 50px; height: 50px;"></td>
                    <td><button class="btn btn-primary" onclick="userEdit('${key}')">Sửa</butoton></td>
                    <td><button class="btn btn-danger" onclick="userDelete('${key}')">Xóa</button></td>
                </tr>
            `;
        });

        tbody.innerHTML = html;
    })
    .catch((error) => {
        console.error("Lỗi khi lấy danh sách người dùng:", error);
    });
// Thêm function để xem trước hình ảnh
function previewImage(input) {
    const preview = document.getElementById('photoPreview');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}
// Thêm sự kiện lắng nghe cho form chỉnh sửa để xem trước hình ảnh đã có
document.getElementById('editUserForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Gọi hàm updateUser để cập nhật người dùng
    await updateUser(idUser, {
        displayName: document.querySelector('input[name="displayName"]').value,
        address: document.querySelector('input[name="address"]').value,
        phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
        photoURL: document.querySelector('input[name="photoURL"]').value,
    });

    // Load lại trang
    location.reload();

    const preview = document.getElementById('photoPreview');
    preview.src = document.querySelector('input[name="photoURL"]').value;
    preview.style.display = 'block';

});