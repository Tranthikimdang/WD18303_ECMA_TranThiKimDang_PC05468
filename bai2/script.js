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