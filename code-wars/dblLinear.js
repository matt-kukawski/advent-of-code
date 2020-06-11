// u(0) = 1
// y = 2 * x + 1
// z = 3 * x + 1

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

function dblLinear(n) {
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
    return parseInt(returnVal);
}

// ALT
    // function dblLinear(n) {
    //     let finalArr = [1], x = 0, y = 0, count = 0
    //     while (count < n) {
    //         let nextX = 2 * finalArr[x] + 1, nextY = 3 * finalArr[y] + 1
    //         if (nextX <= nextY) {
    //             finalArr.push(nextX)
    //             x++
    //             if (nextX == nextY)
    //                 y++
    //         } else {
    //             finalArr.push(nextY)
    //             y++
    //         }
    //         count++;
    //     }
    //     return finalArr[n]
    // }