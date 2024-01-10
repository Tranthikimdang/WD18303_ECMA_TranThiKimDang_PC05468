

fetch('https://catfact.ninja/facts')
    .then(function (response) {
        let elemets;

        response.json().then(function (jsonData) {
            console.log(jsonData.data);

            elements = jsonData.data.map(function (item) {
                return `<li>${item.fact}</li>`;
            });
            document.writeln("<ol>" + elements.join("") + "</ol>");
        });
    })
    .catch(function (err) {
        console.log(err);
    });

const array1 = ["jan", "feb", "mar", "apr", "may"];
let array2 = [...array1, "JUN", "JUL", "SEP"];

console.log("Array1: ");
console.log(array1);
console.log("Array2: ");
console.log(array2);

