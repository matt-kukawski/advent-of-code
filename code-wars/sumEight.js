const arr1 = [1,2,3,9];
const arr2 = [1,4,2,4,5];

const sum8 = (arr) => {
    const sortedArr = arr.sort();
    let start = 0;
    let end = arr.length-1;

    const sumMe = (a, z) => {
        return parseInt(a) + parseInt(z);
    }

    let currSum;
    
    while (currSum !== 8) {
        currSum = sumMe(sortedArr[start], sortedArr[end]);
        console.log('currSum:', currSum);
        if (sortedArr[start] > sortedArr[end]) {
            console.log('no pair equals 8');
            break;
        } else if (currSum ===8) {
            console.log('pair exists that equals 8');
            break;
        } else if (currSum > 8) {
            end -= 1;
            console.log('sortedArr[end]:', sortedArr[end]);
        } else if (currSum < 8) {
            start += 1;
            console.log('sortedArr[start]:', sortedArr[start]);
        }
    }
}
// sum8(arr1);
// sum8(arr2);

// ALT solution
    // function hasPairWithSum(arr, sum){
    //     const mySet = new Set();
    //     const len = arr.length;
    //     for (let i = 0; i < len; i++){
    //       if (mySet.has(arr[i])) {
    //         return true;
    //       }
    //       mySet.add(sum - arr[i]);
    //     }
    //     return false;
    //   }
    
    //   hasPairWithSum([6,4,3,2,1,7], 9)