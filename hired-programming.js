// tests indicated no issue with time complexity so simplest solution was chosen
function solution(s) {
    let highestTotal = 0; 
    let tempArr = [];
    for (let letter of s){
        const i = tempArr.indexOf(letter);
        if (i > -1) { 
            tempArr = tempArr.slice(i + 1);
        }
        tempArr.push(letter);    
        if (tempArr.length > highestTotal) { 
            highestTotal = tempArr.length; 
        }
    }
    return highestTotal;
}

console.log(solution("nndfddf"));