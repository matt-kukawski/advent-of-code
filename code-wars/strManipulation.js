// vowel count
function getCount(str) {
    var vowelsCount = 0;    
    const vowels = 'aeiou';
    for (let letter of str) {
        if (vowels.includes(letter)) vowelsCount += 1;
    }   
    return vowelsCount;
}
// getCount('bananas');

// best practice
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }

// x's and o's
function XO(str) {
    let xCount = 0;
    let oCount = 0;
    const strToCheck = str.toLowerCase();
    for (let letter of strToCheck) {
        if (letter === 'x') xCount++;
        if (letter === 'o') oCount++;
    }
    return xCount === oCount;
}

// XO("ooxx") // true
// XO("xooxx") // false

// solution w/ regex
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }