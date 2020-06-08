
const solution = (numbers) => {
    if (typeof numbers[0] !== 'number') {
        return 0;
    }
    let highest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[0] === 'number' && numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    return highest;
};

// console.log(solution([7,2,6,'a',3]))
// console.log(solution([]))
// console.log(solution(['a']))

const solution2 = (arr) => {
    if (arr.length < 1) { return ''};
    arr = arr.filter((x) => { return x > 0 });
    // console.log('filtereed arr: ',arr);
     let rootLeft = arr[1];
     let rootRight = arr[2];
     for (let i=3; i < arr.length; i++) {
         if (i % 2 === 1) {
            rootLeft += arr[i];
         } else {
            rootRight += arr[i];
         }
     }
    //  console.log('rootLeft:', rootLeft);
    //  console.log('rootRight:', rootRight);
     if (rootLeft > rootRight) {
         return 'Left';
     } else if (rootRight > rootLeft) {
         return 'Right';
     } else {
         return '';
     }
};

// console.log(solution2([3,6,2,'a',9,-1,10]))
// console.log(solution2([3,6,2,9,-1,15]))
// console.log(solution2(''))

console.log(solution2([1, 10, 5, 1, 0, 6]));
