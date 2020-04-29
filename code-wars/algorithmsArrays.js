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
    const failureMsg = 'Try again!';
    const successMsg = 'Finished!';
    let testFailed = false;

    const rowCheck = (collection) => {
        // console.log('collection:', collection);
        for (let row of collection) {
            for (let item of nums) {              
                const result = row.includes(item);
                // console.log(`'item: ${item}, included: ${result}`);
                if (!result) return testFailed = true;
            }
        }
    }

    const columnChecker = () => {
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
            // console.log('columnArr:', columnArr);
            return columnArr;
        }
        const columns = columnCreator();
        rowCheck(columns);
        // console.log('columnArr:', columnArr);
    }

    const squareArrays = () => {
        const groupOne = [board[0], board[1], board[2]];
        const groupTwo = [board[3], board[4], board[5]];
        const groupThree = [board[6], board[7 ], board[8]];

        const sqaureCreator = (group) => {
            let arrOne = [];
            let arrTwo = [];
            let arrThree = [];
            for (let arr of group) {
                // console.log('arr:', arr);
                var i,j,temparray,chunk = 3;
                for (i=0,j=arr.length; i<j; i+=chunk) {
                    temparray = arr.slice(i,i+chunk);
                    // console.log('temparray:', temparray);
                    if (i === 0) {
                        arrOne.push(...temparray);
                    } else if (i === 3) {
                        arrTwo.push(...temparray);
                    } else if (i === 6) {
                        arrThree.push(...temparray);
                    }
                }
            }
            return [arrOne, arrTwo, arrThree];
        }
        // console.log('grpOne: ', sqaureCreator(groupOne));
        const zeroToTwo = sqaureCreator(groupOne);
        const threeToFive = sqaureCreator(groupTwo);
        const sixToEight = sqaureCreator(groupThree);
        return [...zeroToTwo, ...threeToFive, ...sixToEight];
    }
    if (testFailed === false) {
        // console.log('rowCheck(board)');
        rowCheck(board);
        if (testFailed === false) {
            // console.log('columnChecker()');
            columnChecker();
            if (testFailed === false) {
                // console.log('rowCheck(squareArrays())');
                rowCheck(squareArrays());
            }
        }
        // console.log('final msg: ', testFailed ? failureMsg : successMsg);
        return testFailed ? failureMsg : successMsg;
    } 
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
/*
doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]);
*/

    // Alternative solutions:
        // function doneOrNot(rows){

        //     var columns = []
        //     ,    blocks = [];
            
        //     for (var i = 0; i < 9; i++) {
        //     columns[i] = [];
            
        //     for (var j = 0; j < 9; j++) {
        //         var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
        //         blocks[k] = blocks[k] || [];
                
        //         blocks[k].push(rows[i][j]);
        //         columns[i].push(rows[j][i]);
        //     }
        //     }
            
        //     var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
            
        //     var is_valid = rows.every(is_valid_row) 
        //     && columns.every(is_valid_row) 
        //     && blocks.every(is_valid_row);
            
        //     return is_valid ? 'Finished!' : 'Try again!';
        // }