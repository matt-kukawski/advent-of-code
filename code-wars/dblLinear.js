// u(0) = 1
// y = 2 * x + 1
// z = 3 * x + 1

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// MAKE FASTER
function dblLinear(n) {
    // repeat until hash table has n number of entries
    const nObj = {};
    let count = 0;
    let keyArr = [];
    function helper(x) {
        if (n === count) return;
        const y = 2*x+1;
        const z = 3*x+1;
        if (!nObj[x]) nObj[x] = true;
        if (!nObj[y]) nObj[y] = true;
        if (!nObj[z]) nObj[z] = true;
        count++;
        keyArr = Object.keys(nObj);
        // console.log('keyArr:', keyArr);
        // console.log(count);
        return helper(keyArr[count]);  
    }
    helper(count+1);
    returnVal = keyArr[n];
    // console.log(nObj);
    // create array of hash table keys
    return parseInt(returnVal)

}
console.log('dblLinear(10):', dblLinear(100));