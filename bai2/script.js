
// biến var thành let 
let name = "Tran Thi Kim Dang";
let birthday = "05/02/2004";

// arrow function
let sayHello1 = () => {
    console.log(`I'm ${name}, ${birthday}`);
}


// tính thời gian tồn tại của bản thân
let startDate = new Date('2024-01-05'); // Ngày bắt đầu: 05 tháng 01 năm 2024
let endDate = new Date('2004-02-05'); // Ngày kết thúc: 05 tháng 02 năm 2004

let timeDiff = Math.abs(startDate - endDate);

let years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
let months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
let days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));


let sayHello2 = () => {
    console.log("Thời gian tồn tại của tôi đến hiện tại là: " + years + " năm, " + months + " tháng, " + days + " ngày.");
}
sayHello1();
sayHello2();









const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;

    console.log(a);
    console.log(b);
    console.log(arr);

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

