num1 = Number(3);
num2 = Number(4);
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(num1, num2));

fahrenheit = Number(100);
const toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit);
console.log(toCelsius(fahrenheit));

num = Number(5);
totalLen = Number(1);
const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
};

console.log(padZeros(num, totalLen));

base = Number(2);
exponent = Number(5);
const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};
console.log(power(base, exponent));

who = "Kim Dang";
const greet = (who) => {
    console.log(`Hello ${who}`);
};

