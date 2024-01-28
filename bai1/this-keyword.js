const student = {
    // Thuộc tính - Property
    name: 'Trần Thị Kim Đang',
    age: 20,
    majors: 'Web Design',

    // Phương phức - Method
    goschools() {
        console.log('This');
    },
    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this);

        }
    }
}
student.objChild.methodChild()
// Giải thích: từ khóa this trong Javascript đề cập đến đối tượng mà nó thuộc về.

function Car(name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function () {
        console.log('Running...', this);
    }
}

// const tesla = new Car(teslas540, red, 20000)

// console.log(tesla.run());


const button = document.querySelector('button')

button.onclick = function () {
    console.dir(this.innerHTML);
}
// Giải thích: trong một phương thức, 'this' tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu. )
'use strict'
function myFunc() {
    console.log(this);
}
window.myFunc()
// Giải thích: đứng ngoài phương thức, this tham chiếu tới đối tượng global

function Car(name, color) {
    this.name = name
    this.color = color

    // // phương thức - method
    // this.run = function () {
    //     console.log(this);
    // }
    // Tạo phương thức prototype
    // Car.prototype.run = function () {
    //     console.log(this);
    // }
}
///////
// 'use strict' nếu nằm trong thì là undefind
Car.prototype.run = function () {
    function test() {
        console.log(this);
    }
    // this nằm trong function trong funtion đối tượng gloal
    test()
}

const porche = new Car('Porsche', 'yellow')
const tesla = new Car('Tesla50', 'red')
console.log(porche.name);
console.log(tesla.name);

console.log(porche.run());
console.log(tesla.run());
// trả về trước dấu chấm

// Chú ý: this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// Chú ý: this trong một hàm là undefind khi ở strict mode
// Chú ý: các phương thức bind(),call(), apply() có thể tham chiếu thí tới đối tượng khác

