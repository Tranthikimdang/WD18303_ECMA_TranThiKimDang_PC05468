fetch('http://localhost:3000/data')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);

            const tbody = document.querySelector('tbody');
            tbody.innerHTML = "";

            data.forEach(function (element, index) {
                tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td><img src="../site/image/${element.image}" width="120px"></td>
                    <td>${element.price}</td>
                    <td>${element.sale}</td>
                    <td>${element.category}</td>
                    <td>${element.hotdeal}</td>
                    <td>${element.star}</td>
                    <td>${element.description}</td>
                    <td>
                        <button onclick="openEditPage(${element.id})">Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>`;
            });

        });

    });
