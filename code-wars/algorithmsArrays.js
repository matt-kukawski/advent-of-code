// Snail sort

snail = function(array) {
    const finalArr = [];
    let cycleCount = 0;
    const xAxis = () => {
        const arr = array[cycleCount];
        for (let i = cycleCount; i < arr.length-cycleCount; i++) {
            finalArr.push(arr[i]);
        }
        // console.log(`xAxis ${cycleCount} - finalArr : ${finalArr}`);
    }

    const farYAxis = () => {
        for (let i = cycleCount+1; i < array.length-cycleCount; i++) {
            const arr = array[i];
            console.log(arr[arr.length-(cycleCount+1)]);
            finalArr.push(arr[arr.length-(cycleCount+1)]);
        }
        // console.log(`farYAxis ${cycleCount} - finalArr : ${finalArr}`);
    }

    const bottomYAxis = () => {
        const arr = array[array.length-(cycleCount+1)];
        for (let i = arr.length-(cycleCount+2); i >= (0+cycleCount); i--) {
            finalArr.push(arr[i]);
        }
        // console.log(`bottomYAxis ${cycleCount} - finalArr : ${finalArr}`);
    }

    const nearYAxis = () => {
        for (let i = array.length-(cycleCount+2); i >= (1+cycleCount); i--) {
            const arr = array[i];
            finalArr.push(arr[cycleCount]);
        }
        // console.log(`nearYAxis ${cycleCount} - finalArr : ${finalArr}`);
    }

    const cycles = () => {
        const len = array.length*array[0].length;
        let cycle = 0;
        console.log(len);
        while (finalArr.length < len) {
            xAxis();
            farYAxis();
            bottomYAxis();
            nearYAxis();
            cycleCount += 1;
            // console.log('cycle:', cycle);
            // cycle += 1;
        }
    }

    cycles();
    // console.log(`return value - ${finalArr}`);
    return finalArr;
}

// snail([ ['1a', '1b', '1c', '1d'], 
//         ['2a', '2b', '2c', '2d'], 
//         ['3a', '3b', '3c', '3d'], 
//         ['4a', '4b', '4c', '4d']]);

// snail([[]]);

// snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

    // Alternative solutions:
        // snail = function(array) {
        //     var result;
        //     while (array.length) {
        //       // Steal the first row.
        //       result = (result ? result.concat(array.shift()) : array.shift());
        //       // Steal the right items.
        //       for (var i = 0; i < array.length; i++)
        //         result.push(array[i].pop());
        //       // Steal the bottom row.
        //       result = result.concat((array.pop() || []).reverse());
        //       // Steal the left items.
        //       for (var i = array.length - 1; i >= 0; i--)
        //         result.push(array[i].shift());
        //     }
        //     return result;
        //   }