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

// Split Strings
function solution(str){
    const splitStr = str.split('');
    let arrToReturn = [];
    if ((splitStr.length % 2) !== 0) {
        splitStr.push('_');
        // console.log(splitStr);
    }
    for (let i=0; i < splitStr.length; i += 2) {
        const pair = splitStr[i] + splitStr[i+1];
        arrToReturn.push(pair);
    }
    // console.log(arrToReturn);
    return arrToReturn;
 }

//  solution('abcdef')

    // Best practice
    // function solution(str) {
        // return (str.length % 2 ? str + '_' : str).match(/../g);
    // }

// Stop gninnipS My sdroW!
// reverse letters where 5 or more letters
function spinWords(str){
   const wordsArr = str.split(' ');
   const newArr = [];
   for (let word of wordsArr) {
       if (word.length > 4) {
        const revWord = word.split('').reverse().join('');
        newArr.push(revWord);
       } else {
        newArr.push(word);
       }  
   }
   console.log('new Arr: ', newArr.join(' '));
   return newArr.join(' ');
}
// spinWords("Welcome")

    // Best practice
    // function spinWords(words){
    //     return words.split(' ').map((word) => {
    //         return (word.length > 4) ? word.split('').reverse().join('') : word;
    //     }).join(' ');
    // }


// Roman numeral converter
function solution(number){
    let count = number.toString();

    const singles = ['I', 'IV', 'V', 'IX'];
    const tens = ['X', 'XL', 'L', 'XC'];
    const hundreds = ['C', 'CD', 'D', 'CM'];
    const thousands = ['M'];
    const digitFuncs = [singles , tens, hundreds, thousands];

    const digitConverter = (digit, units) => {
        let num = parseInt(digit);
        let romanStr = '';
        if (units === thousands) {
            romanStr += units[0].repeat(num);
        } else {
            if (num > 0 && num < 4) {
                romanStr += units[0].repeat(num);
            } else if (num === 4) {
                romanStr += units[1];
            } else if (num >= 5 && num < 9) {
                romanStr += units[2];
                romanStr += units[0].repeat(num-5);
            } else if (num === 9) {
                romanStr += units[3];
            }
        }
        // console.log(romanStr);
        return romanStr;
    }

    const romanConstructor = (length) => {
        // console.log('initial length:', length);
        const romanArr = [];
        let lengthCount = length;
        let funcCount = 0;
        while (lengthCount > 0) {
            const toConvert = parseInt(count[lengthCount-1]);
            romanArr.push(digitConverter(toConvert, digitFuncs[funcCount]));
            lengthCount -= 1;
            funcCount += 1;
        };
        // console.log('romanArr:', romanArr.reverse().join(''));
        return romanArr.reverse().join('');
    }

    // console.log('romanConstructor: ',romanConstructor(count.length));
    return romanConstructor(count.length);
}

// solution(1666);

    // Alternatives:

    // function solution(number){
    //     // convert the number to a roman numeral
    //   var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
      
    //   var ans = '';
    //   while(number>0){
    //       for(a in roman){ 
    //           if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
                  
    //       }
    //   }
    //   return ans;
    // }

    // using reduce
    // function solution(number){
    //     return [
    //       { threshold: 1000, char: 'M'},
    //       { threshold: 900,  char: 'CM'},
    //       { threshold: 500,  char: 'D'},
    //       { threshold: 400,  char: 'CD'},
    //       { threshold: 100,  char: 'C'},
    //       { threshold: 90,   char: 'XC'},
    //       { threshold: 50,   char: 'L'},
    //       { threshold: 40,   char: 'XL'},
    //       { threshold: 10,   char: 'X'},
    //       { threshold: 9,    char: 'IX'},
    //       { threshold: 5,    char: 'V'},
    //       { threshold: 4,    char: 'IV'},
    //       { threshold: 1,    char: 'I'}
    //     ].reduce(function(prev, curr, idx, arr)
    //     {
    //       while(number >= curr.threshold)
    //       {
    //         prev += curr.char;
    //         number -= curr.threshold;
    //       }
          
    //       return prev;
    //     }, '');
    // }