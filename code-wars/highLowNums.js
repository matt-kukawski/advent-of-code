// function highAndLow(numbers){
//     const splitNums = numbers.split(' ');
//     for (let number of splitNums) {
//         parseInt(number);
//     }
//     const sorted = splitNums.sort((a, b) => a - b);
//     console.log(sorted);
//     return `${sorted[sorted.length-1]} ${sorted[0]}`;
// }

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

// best practice
function highAndLow(numbers){
    numbers = numbers.split(' ') //.map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
    // return Math.max(...numbers) + ' ' + Math.min(...numbers); // ES6 solution using spread operator
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));