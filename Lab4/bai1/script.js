let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);

// kết quả trả về là 1