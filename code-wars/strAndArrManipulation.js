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

// Regex validate PIN code
function validatePIN(pin) {
    const regex = /^([0-9]{4}|[0-9]{6})$/gi;
    const validated = (pin.match(regex) !== null) ? true : false;
    return validated;
}
// validatePIN('1234');

// best practice
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

// Categorize New Member
function openOrSenior(data){
    return data.map((arr) => (arr[0] > 54 && arr[1] > 7) ? 'Senior' : 'Open');
    // return output;
}
console.log(openOrSenior([[18, 20],[55, 8],[61, 12]]));

// best pratice
// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }