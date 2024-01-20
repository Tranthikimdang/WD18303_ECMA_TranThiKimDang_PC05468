const axios = require('axios');

//1 
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}
//2
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
        urls.map(function (url) {
            return axios.get(url);
        })
    );
    return results;
}
// Giải thích điểm khác nhau giữa đoạn code 1 và 2

// Đoạn code 1:

//   - đoạn code gọi từng url, đợi promise trả về response rồi mới thêm vào mảng results => lặp lại cho đến khi hết mảng urls

//   - phần tử trong result trả về bằng với phần tử trong mảng urls



// + Đoạn code 2:  - đoạn code gọi tất cả url cùng 1 lúc

//   - Chỉ hoàn thành khi tất cả các promise hoàn thành, hoặc 1 trong các promise xảy ra reject

//   - phần tử trong result trả về bằng với phần tử trong mảng urls hoặc 0