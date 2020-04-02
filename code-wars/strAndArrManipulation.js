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
// console.log(openOrSenior([[18, 20],[55, 8],[61, 12]]));

// best pratice
// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// Valid Parentheses

// function validParentheses(parens){
//     const splitParens = parens.split('');
//     // console.log(splitParens);
//     const valid = true;

//     const parenLoop = (arr) => {
//         if (arr.length > 1) {
//             for (i = 0; i < arr.length-1; i++) {
//                 if (arr[i] === '(' && arr[i+1] === ')') {
//                     splitParens.splice(i, 2);
//                     // console.log(splitParens);
//                 } else {
//                     valid = false;
//                 }
//             }         
//         } else if (arr.length === 1) {
//             valid = false;
//         }
//     }
//     while (valid === true && !splitParens.length === 0) {
//         parenLoop(splitParens);
//     }
//     console.log(valid);
//     return valid;
// }
// validParentheses("(())((()())()))((");

function validParentheses(parens){
    let valid = true;
    const splitParens = parens.split('');
    const splitParensMod = splitParens.length % 2;
    if (splitParensMod !== 0) {
        valid = false;
    } 
    else 
    {
        const parenLoop = (arr) => {
            // console.log('parenLoop...');
            if (arr.length > 1) {
                for (i = 0; i < arr.length-1; i++) {
                    if (arr[i] === '(' && arr[i+1] === ')') {
                        splitParens.splice(i, 2);
                        return;
                    }
                }
                valid = false;
                return;         
            }
        }

        while (valid === true && splitParens.length !== 0) {
            parenLoop(splitParens);
        }
    }
    return valid;
}
// console.log('result: ',validParentheses("(())((()())())"));

// best practice
// function validParentheses(string){
//     var tokenizer = /[()]/g, // ignores characters in between; parentheses are
//         count = 0,           // pretty useless if they're not grouping *something*
//         token;
//     while(token = tokenizer.exec(string), token !== null){
//        if(token == "(") {
//           count++;
//        } else if(token == ")") {
//           count--;
//           if(count < 0) {
//              return false;
//           }
//        }
//     }
//     return count == 0;
//  }