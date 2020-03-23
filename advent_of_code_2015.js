// Day 3 - pt. 1
/*
const strToTest = '>^v<';
function housesVisited(strToTrim) {
    const str = strToTrim.trim();
    let x = 0;
    let y = 0;
    let posiArr = []
    // console.log('strToTest:', strToTest);
    // const moves = str.split('');
    // console.log('moves:', moves);
    for (let move of str) {
        if (move === '^') {
            x += 1;
            // console.log('up');
        } else if (move === '>') {
            y += 1;
            // console.log('right');
        } else if (move === '<') {
            y -= 1;
            // console.log('left');
        } else if (move === 'v') {
            x -= 1;
            // console.log('down');
        }
        let newPosi = `${x}:${y}`;
        // console.log(newPosi);
        posiArr.push(newPosi);
        console.log('posiArr:', posiArr);
    }
    const uniqueHouses = [...new Set(posiArr)];
    // console.log('uniqueHouses:', uniqueHouses);
    console.log('uniqueHouses.length:', uniqueHouses.length);
    return uniqueHouses.length;
}
housesVisited(strToTest);

// abbreviated input
const moves2 = 'v>v<vvv<<vv^v<v>vv>v<<<^^^^^<<^<vv>^>v^>^>^>^>^><vvvv<^>^<<^><<<^vvvv>^>^><^v^><^<>^^>^vvv^<vv>>^>^^<>><>^>vvv>>^vv>^<><>^<v^>^>^><vv^vv^>><<^><<v>><>^<^>>vvv>v>>>v<<^<><^<v<>v>^^v^^^<^v^^>>><^>^>v<>^<>>^>^^v^><v<v>>><>v<v^v>^v<>>^><v>^<>v^>^<>^v^^^v^^>>vv<<^^><^<vvv>^>^^<^>>^^^^^v^<v>vv<>>v^v<^v^^<><^<^vv^><>><><>v>vvv^vv^^<<><<vvv><<^v^><v<>vvv^<^>vvvv^>^>>^v^<v^vv<^^v<>v>vv^<>><v<<<^v^<<><v<^<^<><^^^>^>>v>^>v^<>v><^<^<v^>^^vv<^^<>v^v^vv<>>>>v^v<>><^^v>vv^^>v^v>v<vv>>v>><v^v^v>vv>^^>^v><<vv';

// housesVisited(moves2);

// Day 3 - pt. 2
const strToTest = '>^v<';
function housesVisited(strToTrim) {
    const str = strToTrim.trim().split('');
    let santaArr = [];
    let roboArr = [];
    str.forEach(function (value, i) {
        if ((i+2)%2==0) {
            santaArr.push(str[i]);
        }
        else {
            roboArr.push(str[i]);
        } 
    });
    console.log('santaArr:', santaArr);
    console.log('roboArr:', roboArr);

    let santaX = 0;
    let santaY = 0;
    let roboX = 0;
    let roboY = 0;
    let posiArr = ['0:0'];
    // console.log('strToTest:', strToTest);
    // const moves = str.split('');
    // console.log('moves:', moves);
    function moveCounter(person, arr, x, y) {
        for (let move of arr) {
            if (move === '^') {
                x += 1;
                // console.log('up');
            } else if (move === '>') {
                y += 1;
                // console.log('right');
            } else if (move === '<') {
                y -= 1;
                // console.log('left');
            } else if (move === 'v') {
                x -= 1;
                // console.log('down');
            }
            let newPosi = `${x}:${y}`;
            // console.log(newPosi);
            posiArr.push(newPosi);
            // console.log(`${person} posiArr: ${posiArr}`);
        }
    }
    moveCounter('santa', santaArr, santaX, santaY);
    moveCounter('robot', roboArr, roboX, roboY);
    const uniqueHouses = [...new Set(posiArr)];
    // console.log('uniqueHouses:', uniqueHouses);
    console.log('uniqueHouses.length:', uniqueHouses.length);
    return uniqueHouses.length;
}
// housesVisited(strToTest);
// housesVisited(moves2);


// Day 4 - pt. 1&2 - MD5 hashes

// var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

// const regExp = /^0{6}.*/;
// const hashCheck = (input) => {
//     let result = "";
//     let i = 1;
//     do {
//         i += 1;
//         result = MD5(input + i);
//         // console.log('result:', result);
//     } while (!result.match(regExp));
//     console.log(`${input}${i}: ${result}`);
//     results.push(i)
//     // return i;
// }
// const prefixes = ['abcdef', 'pqrstuv', 'bgvyzdsv'];
// const results = []

// const prefixCheck = (arr) => {
//     for (let prefix of arr) {
//         hashCheck(prefix);
//         console.log('results: ', results)
//     }
// }
// prefixCheck(prefixes);
/*
// Day 5 - pt 1
const input = ['aaei', 'xazzegov', 'aeiouaeiouaeiou'];
const vowels = 'aeiou';
const prohibitedStrs = ['ab', 'cd', 'pq', 'xy'];

const includesProhibited = (combo) => (prohibitedStrs.includes(combo));

// return true if consecutive letters and no prohibited combos
const pairLettCheck = (str) => {
    let word = str.split('');
    // console.log(word);
    let consecutive = false;
    for (let i = 0; i < word.length-1; i++) {
        let letterOne = word[i];
        let letterTwo = word[i+1];
        let combined = word[i] + word[i+1];
        // console.log(`${letterOne} : ${letterTwo}`);
        // console.log('combined:', combined);
        // check if combo prohibited
        let prohibited = includesProhibited(combined);
        // console.log(`prohib ${i}: ${prohibited}`);
        if (prohibited) {
            return false;
        } else if (letterOne === letterTwo) {
            // console.log('consec letters');
            consecutive = true;
        }
    }
    return consecutive;
}



// console.log('prohib test: ', includesProhibited('df'))

// const checker = pairLettCheck('xazyegov');
// console.log('checker:', checker)

const naughtyOrNice = (arr) => {
    let nice = 0;
    for (let str of arr) {
        let vowelCount = 0;
        let pairsOk = pairLettCheck(str);
        console.log(str);
        console.log('pairsOk:', pairsOk);
        if (pairsOk) {
            for (let letter of str) {            
                if (vowels.includes(letter)) vowelCount += 1;
            }
            console.log('vowelCount:', vowelCount)
            if (vowelCount >= 3) {
                nice += 1
            }
        };        
    }
    console.log('nice:', nice);
    return nice;
}

// naughtyOrNice(['xazegov', 'xazeggov', 'xazecdgov']);

// abbreviated input
const strDayFive = 'rthkunfaakmwmush,qxlnvjguikqcyfzt,sleaoasjspnjctqt,lactpmehuhmzwfjl,bvggvrdgjcspkkyj,nwaceixfiasuzyoz,hsapdhrxlqoiumqw,lsitcmhlehasgejo,hksifrqlsiqkzyex,dfwuxtexmnvjyxqc,iawwfwylyrcbxwak,mamtkmvvaeeifnve,qiqtuihvsaeebjkd,skerkykytazvbupg,kgnxaylpgbdzedoo,plzkdktirhmumcuf,pexcckdvsrahvbop,jpocepxixeqjpigq,vnsvxizubavwrhtc,lqveclebkwnajppk,ikbzllevuwxscogb,xvfmkozbxzfuezjt,ukeazxczeejwoxli,tvtnlwcmhuezwney,hoamfvwwcarfuqro,wkvnmvqllphnsbnf,kiggbamoppmfhmlf,ughbudqakuskbiik,avccmveveqwhnjdx,llhqxueawluwmygt,mgkgxnkunzbvakiz,fwjbwmfxhkzmwtsq,kzmtudrtznhutukg,gtvnosbfetqiftmf,aoifrnnzufvhcwuy,cldmefgeuwlbxpof,xdqfinwotmffynqz,pajfvqhtlbhmyxai,jkacnevnrxpgxqal,esxqayxzvortsqgz,glfoarwvkzgybqlz,xdjcnevwhdfsnmma,jyjktscromovdchb,pvguwmhdvfxvapmz,iheglsjvxmkzgdbu,lwjioxdbyhqnwekv,zcoguugygkwizryj,ogvnripxxfeqpxdh,hkvajhsbfnzsygbm,cnjqeykecopwabpq,wojjtbcjinoiuhsj,kpwpvgxbyzczdzjq,wrvhylisemlewgzk,uiezkmnhilfzahtm,mucteynnuxpxzmvt,zaiwbgxefusfhmst';

const dayFiveFormatted = strDayFive.split(',');

// Day 5 - pt 2
// String conditions:
    // - contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    // - It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

const dayFiveStr = document.querySelector('pre').innerText.split('\n');

const twoPairs = (str) => {
    let word = str.split('');
    for (let i = 0; i < word.length-1; i++) {
        let firstPair = word[i]+word[i+1];
        let parentRemainder = [...word];
        parentRemainder.splice(i, 2);
        for (let i = 0; i < parentRemainder.length-1; i++) {
            let secondPair = parentRemainder[i]+parentRemainder[i+1];
            if (secondPair === firstPair) {
                // console.log(`match: ${secondPair}, ${firstPair}`);
                return true;
            } 
        }
    }
    return false;
}

const oneGap = (str) => {
    let word = str.split('');
    for (i = 0; i < word.length-2; i++) {
        if (word[i] === word[i+2]) {
            // console.log(`one gapper exists: ${word[i]}, ${word[i+1]}, ${word[i+2]}`);
            return true;
        }
    }
    return false;
}

const niceStrTwo = (arr) => {
    let pass = 0;
    let iterationCount = 0;
    for (let str of arr) {
        iterationCount += 1;
        let twoPairCheck = twoPairs(str);
        let oneGapCheck = oneGap(str);
        console.log(`iterationCount: ${iterationCount} - ${str} : twoPairCheck-${twoPairCheck} oneGapCheck-${oneGapCheck}`);
        if (twoPairCheck && oneGapCheck) {
            pass += 1;
        }
    }
    console.log('nice words:', pass);
    return pass;
}

// const dayFiveFormattedTest = niceStrTwo(dayFiveFormatted);
// const dayFiveStrTest = niceStrTwo(dayFiveStr);
*/

// DAY 6
const allInstructions = 'on 887,9,959,629:on 454,398,844,448:off 539,243,559,965:off 370,819,676,868:off 145,40,370,997:off 301,3,808,453:on 351,678,951,908:toggle 720,196,897,994:toggle 831,394,904,860:toggle 753,664,970,926:off 150,300,213,740:on 141,242,932,871:toggle 294,259,474,326:toggle 678,333,752,957:toggle 393,804,510,976:off 6,964,411,976:off 33,572,978,590:on 579,693,650,978:on 150,20,652,719:off 782,143,808,802:off 240,377,761,468:off 899,828,958,967:on 613,565,952,659:on 295,36,964,978:toggle 846,296,969,528:off 211,254,529,491:off 231,594,406,794:off 169,791,758,942:on 955,440,980,477:toggle 944,498,995,928:on 519,391,605,718:toggle 521,303,617,366:off 524,349,694,791:toggle 391,87,499,792:toggle 562,527,668,935:off 68,358,857,453:toggle 815,811,889,828:off 666,61,768,87:on 27,501,921,952:on 953,102,983,471:on 277,552,451,723:off 64,253,655,960:on 47,485,734,977:off 59,119,699,734:toggle 407,898,493,955:toggle 912,966,949,991:on 479,990,895,990:toggle 390,589,869,766:toggle 593,903,926,943:toggle 358,439,870,528:off 649,410,652,875:on 629,834,712,895:toggle 254,555,770,901:toggle 641,832,947,850:on 268,448,743,777:off 512,123,625,874:off 498,262,930,811:off 835,158,886,242:toggle 546,310,607,773:on 501,505,896,909:off 666,796,817,924:toggle 987,789,993,809:toggle 745,8,860,693:toggle 181,983,731,988:on 826,174,924,883:on 239,228,843,993:on 205,613,891,667:toggle 867,873,984,896:on 628,251,677,681:toggle 276,956,631,964:on 78,358,974,713:on 521,360,773,597:off 963,52,979,502:on 117,151,934,622:toggle 237,91,528,164:on 944,269,975,453:toggle 979,460,988,964:off 440,254,681,507:toggle 347,100,896,785:off 329,592,369,985:on 931,960,979,985:toggle 703,3,776,36:toggle 798,120,908,550:off 186,605,914,709:off 921,725,979,956:toggle 167,34,735,249:on 726,781,987,936:toggle 720,336,847,756:on 171,630,656,769:off 417,276,751,500:toggle 559,485,584,534:on 568,629,690,873:toggle 248,712,277,988:toggle 345,594,812,723:off 800,108,834,618:off 967,439,986,869:on 842,209,955,529:on 132,653,357,696:on 817,38,973,662:off 569,816,721,861:on 568,429,945,724:on 77,458,844,685:off 138,78,498,851:on 136,21,252,986:off 2,460,863,472:on 172,81,839,332:on 123,216,703,384:off 879,644,944,887:toggle 227,491,504,793:toggle 580,418,741,479:toggle 65,276,414,299:toggle 482,486,838,931:off 557,768,950,927:off 615,617,955,864:on 859,886,923,919:on 391,330,499,971:toggle 521,835,613,847:on 822,787,989,847:on 192,142,357,846:off 564,945,985,945:off 479,361,703,799:toggle 56,481,489,978:off 632,991,774,998:toggle 723,526,945,792:on 344,149,441,640:toggle 568,927,624,952:on 621,784,970,788:toggle 665,783,795,981:toggle 386,610,817,730:toggle 440,399,734,417:toggle 939,201,978,803:off 395,883,554,929:on 340,309,637,561:off 875,147,946,481:off 945,837,957,922:off 429,982,691,991:toggle 227,137,439,822:toggle 4,848,7,932:off 545,146,756,943:on 763,863,937,994:on 232,94,404,502:off 742,254,930,512:on 91,931,101,942:toggle 585,106,651,425:on 506,700,567,960:off 548,44,718,352:off 194,827,673,859:off 6,645,509,764:off 13,230,821,361:on 734,629,919,631:toggle 788,552,957,972:toggle 244,747,849,773:off 162,553,276,887:off 569,577,587,604:off 799,482,854,956:on 744,535,909,802:toggle 330,641,396,986:off 927,458,966,564:toggle 984,486,986,913:toggle 519,682,632,708:on 984,977,989,986:toggle 766,423,934,495:on 17,509,947,718:on 413,783,631,903:on 482,370,493,688:on 433,859,628,938:off 769,549,945,810:on 178,853,539,941:off 203,251,692,433:off 525,638,955,794:on 169,70,764,939:toggle 59,352,896,404:toggle 143,245,707,320:off 103,35,160,949:toggle 496,24,669,507:off 581,847,847,903:on 689,153,733,562:on 821,487,839,699:on 837,627,978,723:toggle 96,748,973,753:toggle 99,818,609,995:on 731,193,756,509:off 622,55,813,365:on 456,490,576,548:on 48,421,163,674:off 853,861,924,964:off 59,963,556,987:on 458,710,688,847:toggle 12,484,878,562:off 241,964,799,983:off 434,299,845,772:toggle 896,725,956,847:on 740,289,784,345:off 395,840,822,845:on 955,224,996,953:off 710,186,957,722:off 485,949,869,985:on 848,209,975,376:toggle 221,241,906,384:on 588,49,927,496:on 273,332,735,725:on 505,962,895,962:toggle 820,112,923,143:on 919,792,978,982:toggle 489,461,910,737:off 202,642,638,940:off 708,953,970,960:toggle 437,291,546,381:on 409,358,837,479:off 756,279,870,943:off 154,657,375,703:off 524,622,995,779:toggle 514,221,651,850:toggle 808,464,886,646:toggle 483,537,739,840:toggle 654,769,831,825:off 326,37,631,69:off 590,570,926,656:off 881,913,911,998:on 996,102,998,616:off 677,503,828,563:on 860,251,877,441:off 964,100,982,377:toggle 888,403,961,597:off 632,240,938,968:toggle 731,176,932,413:on 5,498,203,835:on 819,352,929,855:toggle 393,813,832,816:toggle 725,689,967,888:on 968,950,969,983:off 152,628,582,896:off 165,844,459,935:off 882,741,974,786:off 283,179,731,899:toggle 197,366,682,445:on 106,309,120,813:toggle 950,387,967,782:off 274,603,383,759:off 155,665,284,787:toggle 551,871,860,962:off 30,826,598,892:toggle 76,552,977,888:on 938,180,994,997:toggle 62,381,993,656:toggle 625,861,921,941:on 685,311,872,521:on 124,934,530,962:on 606,379,961,867:off 792,735,946,783:on 417,480,860,598:toggle 178,91,481,887:off 23,935,833,962:toggle 317,14,793,425:on 986,89,999,613:off 359,201,560,554:off 729,494,942,626:on 204,143,876,610:toggle 474,97,636,542:off 902,924,976,973:off 389,442,824,638:off 622,863,798,863:on 840,622,978,920:toggle 567,374,925,439:off 643,319,935,662:toggle 185,42,294,810:on 47,124,598,880:toggle 828,303,979,770:off 174,272,280,311:off 540,50,880,212:on 141,994,221,998:on 476,695,483,901:on 960,216,972,502:toggle 752,335,957,733:off 419,713,537,998:toggle 772,846,994,888:on 881,159,902,312:off 537,651,641,816:toggle 561,947,638,965:on 368,458,437,612:on 290,149,705,919:on 711,918,974,945:toggle 916,242,926,786:toggle 522,272,773,314:on 432,897,440,954:off 132,169,775,380:toggle 52,205,693,747:toggle 926,309,976,669:off 838,342,938,444:on 144,431,260,951:toggle 780,318,975,495:off 185,412,796,541:on 879,548,892,860:on 294,132,460,338:on 823,500,899,529:off 225,603,483,920:toggle 717,493,930,875:toggle 534,948,599,968:on 522,730,968,950:off 102,229,674,529';

const splitInstructions = allInstructions.split('\:');
// console.log('splitInstructions:', splitInstructions);
const onArray = [];
// let gridToCheck = [];

const calculateGrid = function(xStart,yStart,xEnd,yEnd) {
    const calculatedGrid = [];
    for (let x=xStart; x <= xEnd; x++) {
        for (let y=yStart; y <=yEnd; y++) {
            let coords = `${x}:${y}`;
            calculatedGrid.push(coords);
            // console.log('gridToCheck:', gridToCheck);
        }
    }
    return calculatedGrid;
}

const turnOnLight = function(coords) {
    if (!onArray.includes(coords)) {
        onArray.push(coords);
    }
}

const turnOffLight = function(coords) {
    const index = onArray.indexOf(coords);
    if (index > -1) {
        onArray.splice(index, 1);
    }
}

const compareArrays = function(arr,func) {
    for (i=0; i < arr.length; i++) {
        func(arr[i]);
    }
}

const toggleLight = function(arr) {
    const index = onArray.indexOf(arr);
    if (index > -1) {
        // console.log('onArray:', onArray);
        // console.log('toggle splice: ',onArray[index]);
        onArray.splice(index, 1);
    } else {
        onArray.push(arr);
    }
}

// interpreting instructions
const convertInstructions = function(str) {
    const action = str.substr(0,str.indexOf(' '));
    // console.log('action:', action);
    const grid = str.substr(str.indexOf(' ')+1).split(',');
    const xStart = parseInt(grid[0]);
    const yStart = parseInt(grid[1]);
    const xEnd = parseInt(grid[2]);
    const yEnd = parseInt(grid[3]);
    const newGrid = calculateGrid(xStart,yStart,xEnd,yEnd);
    if (action === 'on') {
        newGrid.forEach((coord) => {
            turnOnLight(coord);
            // console.log('onArray:', onArray);
        });
    } else if (action === 'off') {
        newGrid.forEach((coord) => {
            turnOffLight(coord);
            // console.log('onArray:', onArray);
        });
    } else if (action === 'toggle') {
        // console.log('toggle gridToCheck:', newGrid)
        newGrid.forEach((coord) => {
            toggleLight(coord);
            // console.log('onArray:', onArray);
        });
    }
    // console.log('onArray after convertInstructions:', onArray);
    // return returnVal;
}

const processInstructions = function(instructions) {
    console.log('instructions.length:', instructions.length);
    let instructionCount = 0;
    instructions.forEach((instruction) => {
        onArray.sort();
        convertInstructions(instruction);
        instructionCount += 1;
        console.log('instructionCount:', instructionCount);
    });
    console.log('final onArray length:', onArray.length);
}

processInstructions(splitInstructions);
// convertInstructions('on 499,499,500,500');
// console.log('gridToCheck:', gridToCheck);

// convertInstructions('off 499,499,499,499');
// convertInstructions('toggle 500,500,500,500');
// convertInstructions('toggle 500,500,500,500');
// convertInstructions('toggle 500,500,500,500');
// convertInstructions('on 0,0,0,0');
