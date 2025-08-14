
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findLargestAndSmallest(arr) {
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return { largest, smallest };
}

function separateEvenAndOdd(arr) {
    let even = arr.filter(num => num % 2 === 0);
    let odd = arr.filter(num => num % 2 !== 0);
    return { even, odd };
}

function calculateSumAndAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;
    return { sum, average };
}

function iterateArray(arr) {
    arr.forEach(num => console.log(num));
}

function multiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= 12; i++) {
        table.push(`${n} x ${i} = ${n * i}`);
    }
    return table;
}

console.log(findLargestAndSmallest(numbers));
console.log(separateEvenAndOdd(numbers));
console.log(calculateSumAndAverage(numbers));
iterateArray(numbers);
console.log(multiplicationTable(5));
