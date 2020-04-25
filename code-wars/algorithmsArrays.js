// Snail sort
// calculate the dimensions of the matrix (0x0 === [[]])... always a square
// represent as x,y coords?
// x1, y1 to arr[0].length
// splice items from array?

snail = function(array) {
    const finalArr = []
    const xAxis = () => {
        for (let item of array[0]) {
            finalArr.push(item);
        }
        console.log(finalArr);
    }

    const farYAxis = () => {
        for (let i = 1; i < array.length; i++) {
            const arr = array[i];
            console.log(arr[arr.length-1]);
            finalArr.push(arr[arr.length-1]);
        }
        console.log(finalArr);
    }

    const bottomYAxis = () => {
        const arr = array[array.length-1];
        console.log(arr);
        for (let i = arr.length-2; i >= 0; i--) {
            finalArr.push(arr[i]);
        }
        console.log(finalArr);
        console.log('array:', array);
    }

    xAxis();
    farYAxis();
    bottomYAxis();
}

snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);