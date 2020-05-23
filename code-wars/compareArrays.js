const arr1 = ['a','b','c','d','e'];
const arr2 = ['z','x','y','c'];

function commonItem(arr1, arr2) {
    const myObj = {};
    for (let key of arr1) {
        // check whether key already exists
        if(!myObj[key]) {
            myObj[key] = true;
        }
    }
    // console.log('myObj:', myObj);

    for (let val of arr2) {
        if (myObj[val] !== undefined) {
            console.log(`${val} exists in both arrays`);
            return true;
        }
    }
    return false;
}

// ALT solution
function commonItem2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

// commonItem(arr1, arr2);
const commIt = commonItem2(arr1, arr2);
// console.log('commonItem2:', commIt);

// Find first recurring:
const testArr = [2,5,1,2,3,5,1,2,4];

// faster than nested loop over array (O(n) v. O(n^2)) but greater memory use (O(n) v. O(1))
// nested loop will also grab first repeat match, not necessarily first repetition i.e. [2,5,5,2] --> arr/nested loop will return '2' when answer should be '5'
function firstRecurring(arr) {
    const arrObj = {}; // O(n)
    for (let item of arr) {
        if(!arrObj[item]) {
            arrObj[item] = true; // use 'true' to avoid falsy '0' issues
            // console.log(arrObj);
        } else if (arrObj[item]) {
            return item;
        }
    }
    return undefined;
}
// console.log(firstRecurring(testArr));
console.log(firstRecurring([1,2,3,4,5,6,7,8,9]));