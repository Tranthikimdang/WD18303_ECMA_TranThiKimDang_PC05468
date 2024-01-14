let object = {
    fullname: "Dang",
    age: 25,
    city: "Can Tho",
    playGame: function () {
        console.log(this);
        console.log(this.fullname + " is playing game. ");
    },

    cooking: () => {
        console.log(this.fullname);
        console.log(this);
        console.log("Cooking something");
    }


}
object.name = "Dang";
object.cooking();



object.playGame() //Dang is playing game. 

function helloWord(button) {
    console.log(button.getAttribute('attribute-name'));
}

// function BigObject(name) {
//     this.name = name;
// }

function multiply(a, b = 1) {
    console.log('a: ', a);
    console.log('b ', b);
    return a * b;
}

console.log(multiply(2));


//const increment = (number, value) => number + value;
function increment(number, value = 7) {
    console.log('number:', value);
    return number + value;
}
console.log(increment(7));

