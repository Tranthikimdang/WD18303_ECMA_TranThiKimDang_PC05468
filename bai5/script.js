function generateTableHeader(headerTitles) {
    // tu viet ham kiem tra 
    let html = ``;

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
    });

    return `<thead><tr>${html}</tr></thead>`;
}
// sử dụng được vòng lặp foreach phải sử dụng mảng
// goi ra
// mang
// text
// let array = [
//     "ID",
//     "Họ và tên",
//     "Ảnh đại diện",
//     "Ngày tạo"
// ];
// console.log(generateTableHeader(array));
// text

function genrateTableRowStudent(object) {
    // bat loi -> tu xu ly
    return `<tr>
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td><img src="${object.avatar}" height="100px" width="100px"</td>
        <td>${object.createAt}</td>
    </tr>`;
}
//text
// let obj = {
//     id: 1,
//     name: "Nguyen Van A",
//     avatar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
//     createAt: "2024/01/09"
// };
// document.write(genrateTableRowStudent(obj));
//text
function genrateTable(headers, data) {
    let headerRow = generateTableHeader(headers);

    let html = '';

    data.forEach(element => {
        html += genrateTableRowStudent(element)
    })
    return `<table>${headerRow} <tbody>${html}</tbody> </table>`;
}
let list = [
    {
        id: 1,
        name: "Nguyen Van A",
        avatar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/09"
    },
    {
        id: 2,
        name: "Nguyen Van B",
        avatar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/09"
    },
    {
        id: 3,
        name: "Nguyen Van C",
        avatar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/09"
    }
];

let header = [
    "ID",
    "Name",
    "Avatar",
    "CreateAt"
]
document.write(genrateTable(header, list));





