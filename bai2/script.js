class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Tạo một đối tượng hình dạng
const myShape = new Shape(10, 20);

// Hiển thị giá trị ban đầu
console.log(`Vị trí ban đầu: x = ${myShape.x}, y = ${myShape.y}`);

// Di chuyển đối tượng đến vị trí mới
myShape.move(30, 40);

// Hiển thị giá trị sau khi di chuyển
console.log(`Vị trí mới: x = ${myShape.x}, y = ${myShape.y}`);
