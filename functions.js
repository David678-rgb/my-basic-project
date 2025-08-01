let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let { largest, smallest } = findLargestAndSmallest(numbers);
console.log(`Largest: ${largest}, Smallest: ${smallest}`);

let { sum, average } = calculateSumAndAverage(numbers);
console.log(`Sum: ${sum}, Average: ${average}`);

console.log("Array Iteration:");
iterateArray(numbers);

console.log("Multiplication Table for 5:");
multiplicationTable(5);

let { evenNumbers, oddNumbers } = separateEvenAndOdd(numbers);
console.log(`Even Numbers: ${evenNumbers.join(", ")}`);
console.log(`Odd Numbers: ${oddNumbers.join(", ")}`);
function findLargestAndSmallest(arr) {
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return { largest, smallest };
}
function calculateSumAndAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;
    return { sum, average };
}
function iterateArray(arr) {
    arr.forEach((num, index) => {
        console.log(`Index: ${index}, Value: ${num}`);
    });
}
function multiplicationTable(num) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
function separateEvenAndOdd(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    return { evenNumbers, oddNumbers };
}
console.log("Functions loaded successfully.");
