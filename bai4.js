const convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        // Chuyển từ Celsius sang Fahrenheit: (C * 9/5) + 32
        return (temperature * 9 / 5) + 32;
    } else if (unit === "F") {
        // Chuyển từ Fahrenheit sang Celsius: (F - 32) * 5/9
        return (temperature - 32) * 5 / 9;
    } else {
        // Đơn vị không hợp lệ
        return "Đơn vị nhiệt độ không hợp lệ.";
    }
};

// Ví dụ sử dụng
console.log(convertTemperature(20, "C")); // Chuyển từ Celsius sang Fahrenheit, kết quả: 68
console.log(convertTemperature(68, "F")); // Chuyển từ Fahrenheit sang Celsius, kết quả: 20
