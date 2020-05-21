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

commonItem(arr1, arr2);
const commIt = commonItem2(arr1, arr2);
console.log('commonItem2:', commIt);