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

// SUDOKU algorithmn
// todo: create arrays of squares to check

function doneOrNot(board){
    const nums = [1,2,3,4,5,6,7,8,9];
    const failureMsg = 'Try again';
    const rowCheck = (collection) => {
        console.log('collection:', collection);
        for (let row of collection) {
            for (let item of nums) {              
                const result = row.includes(item);
                console.log(`'item: ${item}, included: ${result}`);
                // if (!result) return failureMsg;
            }
        }
    }

    const columnChecker = () => {
        // const columnArr = new Array(9).fill([]);
        
        // console.log('columnArr[0]:', columnArr[0]);
        const columnCreator = () => {
            const columnArr = [[],[],[],[],[],[],[],[],[]];
            for (let row of board) {
                for (let i=0; i <= row.length-1; i++) {
                    const arr = columnArr[i];
                    // console.log('arr:', arr);
                    const val = row[i];
                    // console.log('val:', val);
                    arr.push(val);
                };
            }
            console.log('columnArr:', columnArr);
            return columnArr;
        }
        const columns = columnCreator();
        rowCheck(columns);
        // console.log('columnArr:', columnArr);
    }
    // rowCheck(board);
    // columnChecker();
}

/*
doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]);
*/
doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]);