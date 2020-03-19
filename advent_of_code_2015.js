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

const moves2 = 'v>v<vvv<<vv^v<v>vv>v<<<^^^^^<<^<vv>^>v^>^>^>^>^><vvvv<^>^<<^><<<^vvvv>^>^><^v^><^<>^^>^vvv^<vv>>^>^^<>><>^>vvv>>^vv>^<><>^<v^>^>^><vv^vv^>><<^><<v>><>^<^>>vvv>v>>>v<<^<><^<v<>v>^^v^^^<^v^^>>><^>^>v<>^<>>^>^^v^><v<v>>><>v<v^v>^v<>>^><v>^<>v^>^<>^v^^^v^^>>vv<<^^><^<vvv>^>^^<^>>^^^^^v^<v>vv<>>v^v<^v^^<><^<^vv^><>><><>v>vvv^vv^^<<><<vvv><<^v^><v<>vvv^<^>vvvv^>^>>^v^<v^vv<^^v<>v>vv^<>><v<<<^v^<<><v<^<^<><^^^>^>>v>^>v^<>v><^<^<v^>^^vv<^^<>v^v^vv<>>>>v^v<>><^^v>vv^^>v^v>v<vv>>v>><v^v^v>vv>^^>^v><<vv^v^^vv<^v><^<<v<v^>vv^^^<v^>v>v^^^>><^^<v^<^>>v><vv<v^^>^^v>>v^^^<^^v>^v>><^<^<>>v<<^^vv>^^^v<^<^<v<v^^vv>^vv^>>v^><v>><<<>^vv^<^<>v^^<<<v<^>^><><v^^>>^^^<^vv<^^^>><^^v>^^v^<v^v^>^^<v>^<^v<^<<<<^<v^>v^<^^<>^^>^><<>>^v><>><^<v><^^^>>vv>^><vv>^^^^^v^vvv><><^<^>v>v^v^>^><><^<^><>v<<vv<^>><>^v^^v>^<<<>^v^>^<<v^vv<>v^<v^^vv><<v^<>>>^<v>vv>v>>>^<^>><vv<>>>>v<v>>>^v>v><>>vvv<^^><<^>^>v<^vvvv<v><vv<><^^^v^^^>v^v<>v<^^v>>><>v<v^>>v><v^>>^^<v<<<^<v<><^^v><<v^><<<<^vv<^<>^><vv<<<<^>>>^v>^v>vv>^v<>v>v<v><^>>v>>^>^><^<v^v^>^v<><><^^>^<vvvv^^<>^^^>vv^v^v>^v^^v^^v><v^<^<>><^<v>v>>vv<<v>>vvvv<vv><>>^v^>^>>v^v^<<<vv<><v<<>>>^v<<v>^^vv^><>v>^>v><<<<<<<^>^^v^<<^^>>vvv^<><>><>^^v<<vv><^^v<^^><vv>v^>>>v^v><v^v<^>v^><>v<<>v>^^v><<<<><^v^v>>^<>^<<>^<v<<>>v<<>><^<<<<^v>^<^v>v>vv<v<v<<>^>v<^<<>v^<vvvv^>v>><<v><v<>v>v>>v^vvv^^>>>v^<^<<^^<<<><v>v^<<v<<<>v<^^<><v<v^^<v>^>v>>v<>^>^^>>^v<<>v^^^>>>^vv<^v<v>^>v>^><>v^^<>^^v^^vv^<^>^<<>><<^>^v>>><<<vvvv><<><v<^v^v<vvv^<><<^<vv><v^v^v^>v>v^<vvv^><^><^<vv><>>v^>^^^<>><v^<^^^<>v<<v<^v>>>^>>v^><<>vvv><^>>v><v><>v>>^>v><<><<>^<>^^^vv><v^>v^^>>^>^<^v<v<^^<^vvvv>v<v>^>v^>^><^<vvvv><^><><<v<>v<v^><^<v^>^v^^<<<<^><^^<^><>>^v<<^<<^vv>v>>v<^<^vv>><v<vv>v<v<v>^v<>^>v<>^v<<<v>>^^v>>><vvv>v^>^v^v>^^^v<vvvv>><^>vvv^<vv^^vv><<<>v<>v>^<vvv^<^<v<v<^vv^^>>vv^<^^v^><^^^^^v<^<v<^>>>vv^v^>^<v>^<><v^<^v>>><^v^<<v<<v<>v>^v<v^v>>^^v<<v<v<<>>>vv>>^v>>^<<<<^><<<><^^>>v<>^vvvv>v^^^>^^^>^<vvvv><^^v<v<>v<^v^v<<v^^^v^<v<^v>v^^<>^>^<^v>vv<v^vv<^<<>v><<^><><^^v<<><^^><>^v>^<><<^<^^<<>vv<>^^<<^>><<<>>vvv>^>v^^v^><<^>v>^>^<^<<>v<^>vv^v^v<>vv<<v>vv<vv><^>v^<>^vv^v^<v<^>>>>v^v><^<><<>vv^<vvv^>>vvv^>v>>><^^vv<vvvv>v<^<^>>^^>^^vv>>><^v<>^v^<<>v^^^<v>^>>^<^<v>>^v<^^^<v>^v>^>>v<vv>>^<v^<<>>^>>><v>v^<<^<v>>^<<^^<>v<^v<^<>v^v>^^v<vvvv>^vv>vvv>v^<^>><v^^vv<<<^>vvvv<>>^^<>v^<><>v<^<>v<>^>v<>vv<v^v>>v<v<^<v^^v^vv^vvv><^^>v>><>>^<^^<>>^>^<v^>>vvv^v><v>>^>^>v><><<><vv^v>v<>^v<^vv^^^<>^^<<^^^v<>><v<^<^<^<^^><v^v<^>v^>vvvv>^^v^>^<v<^^^>>^<<vv^<><><^^^^<<>^<><v>vv^<><^>^^<>v^<>>>v><>vvvvv>v>v^^>^<<vvvv<>vv>>v<<^<>^^^v^<><>>^<<<v<v<>>>><><v>v<v<>>^>^^^^vv^^<<><^^<<vv<^<>v>vv<v<><<<^<<v<<<<>v<>>^<^>^>><v>v>><^^<>><<<><<><v^^v<<><^<^v<v^><^^v<<>><<<<^>v^<v>><v^><v<vvv>v^v^<v><<>>v<><<v>^<>><>>^><>v^v>v<<>v<>v^^><<>>>v<<>>>>^>v>><v<<>>>vv>v>^<^^^<>v<v>^<^^v^vvv^>vv>^<v><vvvv>^<<>vvv<<<vv>^^<^>^>>v>v<<<<<>^^vv^>>v>^<^<v^v^>^v>>v>^v<><>^<^>v>v<<<^^^v>^<<<>vvv^v^^>^>>^>v>v<>^^><>>v>^>v<<<^^^v^<v^vv>><><^<^<><vvv<v^>>^v>vv<^v<<^vv>v^<<v>v>v>^v^>^v<<^v^vv>v<v>^<<><v^>>v<>><v<<<^v<<>vvv^<vv<vvv<<>^vv^^v><^>v^vv<<v^<<^^^<^<>^^<<>v<><<v>^><>^<><<v<v^^>vv<>^<v<^<vvv>vv>v><^^v<>><^v^v><><>><v<v>vv<>>><v^^v<>><<^>>><^^^vvv<<<vv<<^v<<<>><<vv>>>>v<<<<<vv><><v>v^^<<^vv^<vv<>>vv>^<>^v^^<>^^^vv>v^^<v<><v>v<v>>^v<v<>>^<v^^><>v^^^>v^^v<vv><^>v^v^<>v>v<v<^^>>v<^^vv^v<^^^^vv<<><<^>>^^<<v^^<<^>v^>>^^^><^^>^v^v>^<<v<vv<<<v<^^^>^>>^v<>^<^>v>^>^v^<^^^<^vv<v><^^>>v<v>^>^v^>>>>^v>^^<<^<v^v<^<<v<<^><^^<v^<><v>v^<<v^^<><<>>><vv<<><>^<>>>v<<v^^^v^^<<<vv<<^<^<^vv^<><><<^^<^^>v^>^<v<>>v^v<><<v>^^v>^<^<vvv<v>v^v>>>^^<^<v^>^vv<<<v<<>^><><^<>v>>>v<v^<>v>><^^^v^^^v<^^<vv^^^>v>v<>>^^<><>v>^<v<>^>>>><>v>^v>^vv^v<vv<<^^>><v<>^>^^<v<^>^<vvv>><>^<<>>><<<><>^^<<<v<>v^>v>v<v>^^^>^>^v<<>v>vv>><<<v>^^<v><vv<<v^^>^>>^><^>v<^<^v>><^^>v<vv^^><><>^><<><>v^>v<><^^>><>^<^^v<^<<v>><v><<<^^<<v<^vv^v<>><>>>^>v<vvv^>^<><v^><^<<^vv<^v^v^v<>v^^v>v^<^>^vv^>>><<>v^vv^<>^v^><<v^v<v>v^<><>>v^v^><>v^vvv^^^<<^<<v<<v<^vv^>>v^v>^^<v<>><>v>>v^<>^>v>^>><<>v^v><^v>v>>><v<v><^<^^>vv<v><^>^<^>^^v><><v<^^v<<><^<<v^<v<<><^^vvv^v>^>^<>>vv>v^^v^^vv<^^>><v^^vv><^v>v^<<v<^v>vvv<>>^v><<>^v<<<>^><^vv><<^^<v^>v<<v>^vv<>^v>>>><<<<^^<^v>^<^^<^<^^>>^^v>^^^^v^^^<<>^^vv<<v^^><v>><^<<><>^>v<>>v^^^>^v^^v^<v^v>v>>>>>^v>^>^^<vvv^^<v^<<<v<<>v>><^^^v<<^^<v>>^<^<^><^<<v^v><<vv<^<>>v>v>^v<><<v>^>vv^v<v>v><^<v>><>^<vv<v^^^^v<^^>><<^^>v>v>^^^<>v>^v^^>vv^vv<^^>><>^>^<>v>><>^v<<v>v>^><^^^v^<vv><<^v^>v^>vv>v^<>v><vv><^v>v<><v^v^v<^v<>^v<v^<<><<v>>^v><v>^^<>vvv^>^<<v^>><^>><^<>^v<v<v<^vvv<><<^v^<v>><<<v>^<^<v>v>^vv^v>v<^^vv<<vvv^<v>><>vv^>v<<>v<vvvv>>v>^^>>><<<^>^vv>><v>^^^>v<^vv<>v<<<v<<<<v>>>>^<^^^^>v<^^<><v>v>v<v^>vv^>v>v<^>^v^<>v>>vvv>^^><^vvv>><>>>^<<^<v<>>>v^^><v<v>>^><>v<^^v^<<v><>^<>>><^v^v>>>^vvvv^<><<<v<^>>v>^v^<v<v<<^<<v^vv^v>v<v<>>v<v^<<<><v^>><^<<^>^^><v>v<^v^<^>v>^<<v>v^<>v^<>vv^<>^>^>v^>^vv<>^^<<>>v<>^v<><v^><><<<vv>v>v^>vv^><<<<v>^v<><>^^<vv>v^^v^^^<v<^^><v^v<>><v<vv>^<>>><vv<^v<<>>^><>>v<v^v^>>>v<<>v<<<<<<<^v<<^^^v<^v<>v^^<<<^<>>v^vv<v>^<^^<^^<<^>vv><^<^^v<<<^><^v<^><>v<vv^>^v^^>>><<vv^^v><^<<^<>>^>>^<<<<v^vv<>>>v>^v>><>v>>v>><>v>><^^><v>^^vv<^^<^>vv><<^>><<><v>^vvv><^v^>vvv^>>^<><^>^<<>>v^v>v<<>^>>^>v<^^<^<<>^^v<vvvvv^^^<^<>^^v>v<>^<^^<<v>v^^vvv^^v>^vv<v^>^<>v<^v^>^<v><v<<<^v<v<v^^<vvv>vv<<vv>v^<<v<^<vv><^>^><^^<^^<<v^^<v^v<v^^^^>^>vv^<>^<>^>^^<^v><<<^>vv^vv>v^v<>^^v^<^^^vvv^><v^<v^^<v<>v^<><>v>vv<^v^>>^v<^^vv>vv>^>><<<<v^^<^><>^><>>v<>>v>^v<^vv>^^>^<^<<v^>>v^v<^^v<vv<^<><^^>^^<>^^^<vv<v<<^^>^>^vv<^>><^<vvv^<>>vv^><v>v^>^vv>^>v^^<>>^v<>>v<^>^v>vv^<vv<^^>>^<v>>>>vvv>vv>^><^v<<<>^^v>v^v<^^^v^^>^><<^^>^<v>><^^^^^<v<vv<v<^<>^^<^v<^>>vv>>^v^vv<>><>^>>>^<v>^^^^><^<<<v<>^v<><vvv^<^^>vv^>>v<vvvv><v^v><^vv<^v<><vvv<vv>v<>^v^<<>>>>v^^>^vv<<vvv<^^><v><><<>v^v<^<^>><vv>^^><^>^><<><v<^v^><^<><>vv>>>>^><<^^^<^v^>^>^^>^<^><v><^^<^^<>><><v>><<<>^>^^v<>^<<<v>>vv>^>>^>^<>>vv<^^vv<>v<>^^>^v<v^^^^v<>^<v>v^v>^^^<v>v<<<^vv^><>^<v>>^^vv>v^<<^><>>vv^^^^^>v>>v<<<>^<vvv<<><><^v<^v<^>^<>^vvv>^>v><<<vv<>v>vv<v<<v>^<^^>v^v>^<^v^<<vvv^^<>^v<<^>^<><>^^<>>^^<^v^<^<v<><<^><v<>v^^>v^v^^^<^v<<^v>^>>^^^^^><<<vv^>>v^><v^^vv><>v^^<^v<^<v^^><<v>v^^^><^^^><<<<<>^<<^<>>v<<v^v^^v<<>^<vv>>><^^^<>>>>vvv>v<>>>v^v^v<^<<^>^<<>v>>^>^^><^><<^v^^<^<>v^v>vv<>>>>>>v<<><v^<v<>>^^>v<<<>^<<v><^><<^v>vv>>>><><>v^<^v><v^<<<<^v><^>v>>^^^v<^>>^>>v<<^<<>vvv>>^v<>>^v><<<^v^v<><v>^vvv<v<v>^^^<><vv^<<>vvv<v<^^v^^><v<^v<^v^<v<^>^^^>>v>^<v^>>^<><<><vv<>vv>^v^>>^<<v<^^v>v<v<vvv>><><<><vvvvv<^v<^>^^><>^<<>^v<<>>v^vv<<>^^v^v^v><^>v>v<^<<^<^>vv>^v<<^>^>>v^<<v^>v^^v^^<v^v>>><vv><<<>^v>><><v<vv<^>v<>><^v>^^v<<<<^v^vv<<<<><><^<^<^v><<^^v^<<<<<^^><^^>vv<v<^<v>v<^><><v<>vvv^<vv>v^>^>^^^v<<^<^^>vv<v^v^v>^vv^><^v^<<>v<^^>^vv<<>^<<><^>v^<<^<>v><><>v<<^^><^^^v>>v>^vv<v^>>^v^^<><<<<<^>^v^<^<^^>^vv<^>v^^v^<>v<><v>v^v>vvv><><<><>vv<vvv^v>^^>^^^<><^>^^^>v<vvvv<>vv<v<v^^>><>v<>>v^>v^^vv^>v>>><v<<<<v<^v>><^^>^v^v<v^v^^^vvv>>>vv<^>><<<^>><^<^>^<^>^>>v^<^<>^<^^<><vvv^^<>^<>>><<v>^<^<v<<><^<<^><^^>vv<>^^><v^v<vv<^<vvv<<^>v^>>v>>>v<<^vv^<><>>>^^<^v^>>^>>><<v<<^<vv><^<>^>>^v>>><^^^<<<vv<<v<v>^vv><><<>^^^<>^<vv^<^<<v>^^><vv>><>>>^>vv>^<^<>>^<^^><v>v^><v>vv><><>>><><<^^v<<^v<v>vv<><><<^v>^v<>^<^^^v^>^<^><^v>v>^v<>><^^v^^^^^<><v<>>vvv<v^^<>v>>>>^<<><^v>vv>>^^><<><><^^^<^<^<<^v>^^^><v>>>>><<v<v>v^^^<>>v<vv<^<>v^^^v<><^>v>><<><>v<^><<>>><>v>^<>>^>v^v<<<<>^<v^vv^>vv<<><v^vv<v<v<<>>>>>vv<><>^<^v>vv^<<v<^v^^<<^<<^^v^>>><<>^<>><^>>><v<>><<>^^>><<<^^^^^v>>^<<>>vvvv<^v<v^^<^>^vv<vv<>v<<<^><>>>>vv^<^v>v<^<>^v>>^<^^v^>>><>^^<^v>>v<<>vv<vvvv<>vv>^><>v^<>^<<^vv<v^^v<vvvv><^>>^v^>^^<<<^>>^^>^<^^<^<<<v^<^^v<<vv^<<^^^vv><v<vv^>v^^v<v>^^<^v<^>>><<>vv<<^><<v^v^^^v<vv>^>vv<^>>^<v<>vv>>>^>>><<v<^<>^<<<>>^<<>><^<<^^^>>v^^>v<<<>v>v>v<v<^>^<>>>^vvv><<^^<<><v<><^<v<vvv>v>>>>vv^^v<v<^<^><v>^v<<v<vv>>v>v<<<<><<>vv<><^^^<>>v<v<vvv><v^<vv^>>><v^^<>>>^^<><^<^v^><vv>>^^v>^<<v^>v>^^>^v^<v<^<v^v><>>v^^<^v^^<<>^^>v^^>><<<<^<^^v>^^v>v<<vv^^vv>^>v^<v<v><>vv>>^<v^v^<v<^>^v>v^^>vvvvv<v><<>vv>vvvvvv>>v>>^^^<v>vv^^><<v>>v^^^^v>vv>v<^v>>>>^>^><v^>^<v<vv>v>^>><v>><<>>^vv<vv^^<^^>>>>><><<^<v<><<v>^><^vv^v>>>>>v>^>^<vv>^v^>v<^v^<^<<vv<<>v<>>^vv<<>^v^v>><><<>>v^^<<>^^<v><>v<<^^<^^>^^>^<^><>>v<>>^^<^>><<<v<>>>^v^>v>v<<^^<<^>v<v^>>v^^v^^<<>^v>v><v^>v<^^>^<vv><vv^<>v<><^<<<vv<<v>v<^<<<<^^>v^v^^><<><^^^<v>v^^>>>vvv><>vv<>>^^v^v<<^>v^^v^>vv>^<<v<^<v^>^^<<v<^^>^v^^<^^v<<>>vv<^>>^><><>v>>v<>^<v^^><<>>>';

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

*/
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

// Day 5 
const input = ['aaei', 'xazzegov', 'aeiouaeiouaeiou'];
const vowels = 'aeiou';
const prohibitedStrs = ['ab', 'cd', 'pq', 'xy']

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
const strDayFive = 'rthkunfaakmwmush,qxlnvjguikqcyfzt,sleaoasjspnjctqt,lactpmehuhmzwfjl,bvggvrdgjcspkkyj,nwaceixfiasuzyoz,hsapdhrxlqoiumqw,lsitcmhlehasgejo,hksifrqlsiqkzyex,dfwuxtexmnvjyxqc,iawwfwylyrcbxwak,mamtkmvvaeeifnve,qiqtuihvsaeebjkd,skerkykytazvbupg,kgnxaylpgbdzedoo,plzkdktirhmumcuf,pexcckdvsrahvbop,jpocepxixeqjpigq,vnsvxizubavwrhtc,lqveclebkwnajppk,ikbzllevuwxscogb,xvfmkozbxzfuezjt,ukeazxczeejwoxli,tvtnlwcmhuezwney,hoamfvwwcarfuqro,wkvnmvqllphnsbnf,kiggbamoppmfhmlf,ughbudqakuskbiik,avccmveveqwhnjdx,llhqxueawluwmygt,mgkgxnkunzbvakiz,fwjbwmfxhkzmwtsq,kzmtudrtznhutukg,gtvnosbfetqiftmf,aoifrnnzufvhcwuy,cldmefgeuwlbxpof,xdqfinwotmffynqz,pajfvqhtlbhmyxai,jkacnevnrxpgxqal,esxqayxzvortsqgz,glfoarwvkzgybqlz,xdjcnevwhdfsnmma,jyjktscromovdchb,pvguwmhdvfxvapmz,iheglsjvxmkzgdbu,lwjioxdbyhqnwekv,zcoguugygkwizryj,ogvnripxxfeqpxdh,hkvajhsbfnzsygbm,cnjqeykecopwabpq,wojjtbcjinoiuhsj,kpwpvgxbyzczdzjq,wrvhylisemlewgzk,uiezkmnhilfzahtm,mucteynnuxpxzmvt,zaiwbgxefusfhmst,apptbogpxivjwink,qryboarjtwjhjgjb,irehxupgyseaahzd,fobstqxguyubggoh,ysriumfghtxtfxwe,auchdmasvfeliptw,mztuhefcrnknyrdl,tyjmkhihbwabjtaa,yquzkdtgsljkaebw,almvdvofjtkyzbmd,emqftiuqqpdwwbrv,hrrhmqfpepvbawvw,atrkgykycvgxbpyb,dhthetnealksbdan,zzqafhgicubptiyo,qdtaieaziwhbttnw,kyskgapdgqrtrefw,edwzlpqztpydmdlr,awszjnlmvlyqsuvl,kcrtmtshtsgixvcp,jtaskgkijivbbkri,mmggfwapsetemiuj,itagrrnjbnmhgppd,uqmbezechbrpbnqq,nnyimvtascflpzsa,knqeimypkdttyudj,vgoiyvtvegwyxjjd,qubzdxsbecktzrho,zehojtvktsbbxijb,xepmjrekwcgoxyoh,bnptxnocbpbqbyeq,sfvynsywscbnymos,dsltfbpcmffbluba,kncrlzlmkikylppa,siwudrvmildgaozv,jhhefbvbvneqzvtc,lqjgztxitbuccqbp,himmwlbhjqednltt,vwognchyertnnfil,eejakhapkbodrntf,qxuijkkhhlskgrba,aankpfxxicfpllog,vuxykvljyqexfhrn,epgygflbxlbwybzq,zuxmwvetmvcszayc,xttwhfqmemgtjnkf,hftwldmivyfunfvl,bejlyxfamzliilrj,zkehazcxyyvtrxti,dsgafehmcfpycvgz,igremmqdojqdvwmb,swnjzvmhcslvkmiw,fchzbfbmtqtxmaef,xwjmyyrlznxrcytq,brwcwzpcvbwdrthl,fvrlridacsiojdmb,mhsturxdlmtxozvy,usxvqyrwywdyvjvz,gwazuslvmarfpnzm,rgkbudaqsnolbcqo,dpxvlbtavdhdedkj,nnqmjzejhodyfgyd,ozoazxkfhujgtzvy,psdgvhzdiwnuaxpl,tznkilxpogbzgijz,wnpytcseirtborhh,lhauurlfsmagfges,oqfbzixnlywkzwwy,yoehapoyjpakziom,vtjftdcsfdzbmtrn,zcshfnodiwixcwqj,wapbxpaxgjvtntkm,qfyypkyvblrtaenh,bsxhbxkovgukhcza,kitdmvpiwzdonoyy,slkbhxmehzavbdsf,dovzjouqkzkcmbkl,qpbigdcqkfnfkxvq,eaiaquhnesvtcdsv,mhbezlhqojdsuryj,dqprkkzxlghkoccx,xqepmorryeivhrhm,frwmrjpezwmjflvf,gjpfgwghodfslwlf,fzyvajisdjbhfthq,pvzxkxdscdbilrdb,mtaxmqcnagmplvnm,rlyafujuuydrqwnc,gvqvrcxwyohufehq,lmrkircgfrfusmfd,ovlpnkxcpimyaspb,xhyjremmqhdqywju,pxfczlhpzbypfarm,utjhprzhtggausyp,utzkkzlnyskjtlqh,cecbcnxpazvkedic,xwvoaggihrbhmijq,krredhmtwlfmyagw,lwfhxgbknhwudkzw,vyczyvuxzmhxmdmn,swcoaosyieqekwxx,waohmlfdftjphpqw,gaclbbfqtiqasijg,ybcyaxhluxmiiagp,xgtxadsytgaznndw,wzqhtjqpaihyxksm,fdwltsowtcsmsyhm,rpoelfbsararhfja,tswgdacgnlhzwcvz,xjgbhdlxllgeigor,ksgthvrewhesuvke,whgooqirdjwsfhgi,toztqrxzavxmjewp,hbkayxxahipxnrtl,lazimkmdnhrtflcu,ndoudnupbotwqgmr,niwuwyhnudxmnnlk,hlmihzlrpnrtwekr,wzkttdudlgbvhqnc,rfyzzgytifkqlxjx,skddrtwxcyvhmjtb,mljspkvjxbuyhari,xwkhozaoancnwaud,nookruxkdffeymdz,oiqfvpxmcplyfgoa,qoxggshmrjlzarex,lsroezewzkrwdchx,nkoonmvdydgzspcl,lygxeqztdqklabov,jempjyzupwboieye,hpdaqkhjiddzybly,cvcizjlnzdjfjlbh,vaaddsbkcgdjhbkj,pjxmtxoyrkmpnenf,ujqdvyqnkbusxlps,miyvzkzqploqaceb,gapcsbkulicvlnmo,xqpcyriqhjhaeqlj,ipumdjwlldzqhmgh,swdstecnzttmehxe,ucmqordmzgioclle,aywgqhmqlrzcxmqx,ptkgyitqanvjocjn,wcesxtmzbzqedgfl,rnetcouciqdesloe,chpnkwfdjikqxwms,onpyrjowcuzdtzfg,tydnqwaqwkskcycz,dhamguhmkjzzeduy,oecllwyrlvsyeeuf,gsukajpoewxhqzft,sgdnffdixtxidkih,pqqzjxzydcvwwkmw,wnjltltufkgnrtgm,hylaicyfrqwolnaq,ovfnugjjwyfjunkm,xknyzsebmqodvhcl,uwfmrjzjvvzoaraw,zaldjvlcnqbessds,zphvjuctrsksouvz,ceqbneqjwyshgyge,wmelhaoylbyxcson,nghuescieaujhgkj,dhjmflwwnskrdpph,exvanqpoofjgiubf,aidkmnongrzjhsvn,mdbtkyjzpthewycc,izctbwnzorqwcqwz,hrvludvulaopcbrv,mrsjyjmjmbxyqbnz,sjdqrffsybmijezd,geozfiuqmentvlci,duzieldieeomrmcg,ehkbsecgugsulotm,cymnfvxkxeatztuq,bacrjsgrnbtmtmdl,kbarcowlijtzvhfb,uwietqeuupewbjav,ypenynjeuhpshdxw,fwwqvpgzquczqgso,wjegagwkzhmxqmdi,vocvrudgxdljwhcz,nnytqwspstuwiqep,axapfrlcanzgkpjs,lklrjiszochmmepj,gxadfpwiovjzsnpi,qidsjxzgwoqdrfie,wgszciclvsdxxoej,kwewlmzxruoojlaq,ywhahockhioribnz,ucbqdveieawzucef,mdyyzmfoaxmzddfv,hsxnabxyqfzceijv,vivruyvbrtaqeebr,jxfeweptjtgvmcjc,mmypqxmpurhculwd,mpiaphksvctnryli,xqzqnuxmuzylkkun,fndmtefjxxcygtji,dnorqlldvzqprird,nutokyajmjpwjaqu,vlupfperqyqkjcaj,dgihjeokrphkpdnk,nvbdyrlheqzixuku,mhrkntnxvsmvrpka,kvhkyanlhhymwljf,fhipumtegqfgeqqw,vpfjgveycdefuabu,kzincljffncylcsf,tsezxymwmjtyegqw,wxhcdrqedkdcwxli,ueihvxviirnooomi,kfelyctfvwyovlyh,horzapuapgtvzizz,iiqkdpmfvhwwzmtj,rsaclclupiicstff,quwkkhrafypkaoum,gyrgkgmwqfkeudfe,noydhbqacwptyfmy,efwwuipzgtkwffhf,suyojcitomdxsduh,lbcxnsykojkufkml,zpglsvoutvzkgdep,usgrufyvgsbsmbpr,katrrwuhwvunjqor,btngwrpcxoyfbgbc,bxjscjdiowjrkpns,nwxvnfrnlkgqxvhf,ikhyqkvljucgdlag,xibnxsjopmxvflkl,mzplumcfivqcjqnz,jqflcxoxzlbwlxry,fcscvmfepdxrshxe,wlpffwunffklzbuc,emvrlqajjgwzfmle,rhaheurtzrfoqkyq,ifuuhpxmadaysfsx,ncyfvleyzqntpcoo,zeogmyaqccmtvokd,jqppbzebppdnpurn,xixarswxsiwjzgni,ezruwzajsoombphs,hmiqfeizyprielxf,jnaoxljnftymsfey,extgzrxzovlsixnf,yhyfmovvlrwoezsv,ffnybaolppuzpjym,pqowimdiusccaagn,jgceiosiihpjsmnu,hkoexeaopebktngx,njhzuvsygymejqav,yjkgcclgtvushcfk,gmbjxhnkkxlihups,pdlwysadiebsidjz,omrwmgzulfoaqros,ofvvgdezwvcffdcy,otytpuklhxcpxhgd,eyfaosxdauumvlux,mvdthjfstrlqlyuo,mdgdchgnlxaxspdm,bakjezmhbwqxzevd,msakswaphdwaodhg,vjcqscgdbnsxdllh,jjywaovewbuzreoj,nqvplhwacylifvwk,lpwmpixbxysmsign,flcvbpxrchcpbgcb,qjpkeuenenwawlok,bnqkflfmdmntctya,fzsgzpoqixvpsneq,icwfdisutoilejld,relchofohnkwbumi,aljalgdaqwhzhfwr,cahkvnwnbwhodpqs,dnrzeunxiattlvdm,nsmkhlrpwlunppjs,mqqsexlwfqnogwub,tfavelkqrtndpait,ooguafrnmprfxcnz,ntynkiordzxtwrqa,rkkyzlxekqqlkvym,ofxcivdnwcmgfnme,ywotqwbrqxlrnobh,nrbbiypwhrqihvev,flqsjixxtydheufs,lcfrfzypstrqctja,hyzbuzawuzjrynny,exfbywcnstebnvmq,vydzwnbmcihvqrnj,qmwqaaylinzrdmiw,lpxpztpvfggspeun,lhxmqqbracsuyrfm,zgkwsrabaseidbrw,yjlmbhbqsqgszsun,mqfzqtbxtuteabtd,izomzdmcqmfrevwd,iqijrlqurdwrkoln,fxhqzpgoxxjkkhql,oulwontmgrjeopnk,edaigfydjexvzzvj,vjhybiklxpxjqpwc,ypxfbfnpbmqmwtte,xzvcsgasztrxdzud,rpulqmobptfarboo,palacmdijxzzykrf,jmllwukplufohiby,dnswayomusiekfmy,sxbrjqtqgzzwhcfo,lylvndsgbnbqiejm,jaxxhoulxnxnaenr,nblissutfazbcpwn,zmlsjszzldvbiacr,kewojtlchfkclqwk,eqvfjasddggvfame,yibzqlvxtraxpdon,dgnbxsbmdrtyvaac,uoxrcxfimhgtxqhy,xfdxalrwcwudlviq,xmtbdklqptoswpwl,zezyopzdztdjerfl,xuzluhjsqvhytgbc,qdjtmeckispmgzki,phakupesplzmmmvc,gpuoqfffumzszybn,bhywxqkrrlwuebbw,ibvwgoyvelzenkzl,ncohvvbmiekbaksa,fzuvqzvxvdbeirrp,lshtzniokucwojjd,punrduvlnrulkium,gnfpikidnfobrrme,vxkvweekmnvkzgyl,rhydssudkcjlqgxn,cjtqvlaahohcgumo,jwzmfyinsfwecgcb,blpeseqhlzfilpuf,jvtpjkyokzcvagon,qjomincbcobjczpe,ugsyzkzgdhxtmsfz,hleaqgwzqjwajcra,coumfghptpnxvvov,hqpnbupnzwpdvgqd,cpouyodqxgviasem,lljvxeyozckifhfd,huqtnvutdyfgwtwa,yenlveuynmlmmymu,ojdyufkomxiwjmbf,spjzgvcwvzgffjkk,vxykmjhyvmhyssbp,tazdeqggfcjfvwwn,uumwcngwcytvpufx,avovuzkrevloneop,owczrtbnrvjfemkt,hzpugcanaxyvaokj,iishlodnxvjtgzyn,qosdonclrnxirham,eonqlnwevahydddg,ryqmnuikftlxuoqy,whqepbcwabzbthha,vekisvnwhgpyemxr,lrwxzoamnvpnlhap,ywepvqthnorfswjv,evqwvsoazmwyypjy,bgwoojddubppmjxf,jypkfrthzgtyeddi,tynabbhfjzkrqsju,adxstbfqheuqbcuk,gqwqiocdyqoiblrx,ybuddlyuskdlegxv,luwynbsmpgyeqsbr,ltyqgqoyljibqndo,jaedpajzphfybajh,epglnrxofptsqvmy,zjdpxkngfkstxbxh,ekegphcwanoickfu,cqvhuucvejqirvfs,uqudnnqumsqcgefo,qnzunermlnpcfflo,ovyxaniqaawzfuxx,djekxcezjowdhopq,bwtwbmdehrhpjnlk,nilsnlacerweikfa,hyrigsrmsrzcyaus,gvmdmgddduylmxic,ewzovdblhmjgjwsk,ojjfsknlonzguzlq,yjgfruvpjvlvrvvq,cyoryodwyhzwprbv,crsjclrurcquqgut,sjhfhobwtojxcmem,ibxfjudilmdeksea,uqbhdbjoeupyhbcz,uqbxigzxuxgmjgnw,jashafmtzrhswirg,dexiolovaucyooka,czjbwwnlwcoqnoiu,ojigosazigfhttjc,zfiqtgrqbmftknzn,dlzbmvmolssbqlzl,sgmchcurrutdtsmw,scdwjqsdohcdrwry,cgtdvecqwplpprxn,iiplenflfczaktwi,wmgnwfxfcjhyeiqg,giihshowtcatecvl,nqhzfincclumvkaz,kxstpzgdfvepionc,agbhxcijxjxerxyi,hmgfqevgdyvisyvs,tthakmvpowpvhtao,ottalcghygpaafbo,aplvozayycremgqg,dbjxlnaouxqtdpfz,peeyallzjsdvpalc,ndtdjyboixuyhfox,llabnbcobexfoldn,cweuvfnfyumbjvxr,ewkhhepaosalnvkk,pivyiwsiqpwhagyx,auzsnwdcerfttawt,grbfrekupciuzkrt,byfwzadtzrbndluf,lluypxjeljzquptk,pskwsnhqanemtfou,sxvrtqqjdjkfhhrm,ulsmqgmshvijyeqh,qigofesfhekoftkf,zhatniakqtqcxyqa,uuczvylgnxkenqee,mlitvtuxknihmisc,srrtrxdvcokpyfmz,osispuucklxcfkeb,vqhazlaulmnpipql,umkiueljberqhdig,knvpbkbvgoqzwprp,nbsocqikhuvsbloj,wjnpepjkzkednqbm,agbhmytsofuyqcor,gvogzhkkpxyfecko,ardafguxifeipxcn,yiajcskbgykyzzkw,sejunbydztyibnpq,dqrgfggwcnxeiygy,xnqqwilzfbhcweel,jjtifhlvmyfxajqi,gwszrpgpmbpiwhek,kydzftzgcidiohfd,efprvslgkhboujic,kecjdfwqimkzuynx,rildnxnexlvrvxts,dlnhjbqjrzpfgjlk,qluoxmzyhkbyvhub,crydevvrjfmsypbi,dosaftwumofnjvix,pwsqxrfwigeffvef,nzyfmnpwqyygjvfx,iccbckrkxlwjsjat,bmputypderxzrwab,bhuakynbwnlreixb,qmrzfyqjiwaawvvk,juvtixbkwyludftn,zapmjxmuvhuqlfol,paiwrqjhpjavuivm,tsepfbiqhhkbyriz,jpprewufiogxoygk,mmapyxbsugcsngef,pduhmgnepnpsshnh,aetndoqjvqyjrwut,fnfvlorhwpkkemhz,gedfidpwvoeazztl,beclvhospgtowaue,wsclsvthxustmczm,tjbxhnpniuikijhe,rhetyhvfcemponeg,mavonujurprbeexi,argbrpomztrdyasa,bzvtffbtygjxmkvh,maqyqkhsqgzfzvve,seeirbiynilkhfcr,wxmanwnozfrlxhwr,dieulypsobhuvswb,nxevassztkpnvxtb,jclxuynjsrezvlcy,xlolzyvgmwjsbmyf,tguzoeybelluxwxc,fkchoysvdoaasykz,cyynwbfcqpqapldf,rhifmzpddjykktuy,ndvufsyusbxcsotm,txutnzvdsorrixgg,qjoczhukbliojneu,ufhwujotncovjjsz,kclsgsdwcrxsycbr,yscwmlrdaueniiic,nxhivrovpkgsmugb,fdxqfyvwwvgeuqkv,femtamfylysohmpr,amsyzslvyxsoribh,nhmqxncwsonhgbcz,uomqsvcbpthlmcue,kxtfapcqrnjkkslj,xtieihonlfubeync,adpcjqxgydulchgj,cjynnzsmmujsxxpd,neeapmzweidordog,szoivgqyqwnyjsnk,uwgrtzaqezgphdcu,ptpgttqxocjwxohi,fhltebsizfwzpgpf,emmsazsidspkhgnh,dxcprkbcjeqxqzgn,tpxzqwxbzwigdtlt,afsmksnmzustfqyt,xyehnftstacyfpit,vcrfqumhjcmnurlw,rrznpjzcjgnugoch,gbxnzkwsjmepvgzk,jwobshgwerborffm,zmuvfkhohoznmifs,buyuwgynbtujtura,bevncenmpxfyzwtf,hqqtcrhzfsrcutjh,kbpzshllpiowepgc,alspewedcukgtvso,xvsvzzdcgjuvutrw,pmwulqraatlbuski,abuzsiinbueowpqn,oedruzahyfuchijk,avhcuhqqjuqkesoq,azqgplkzsawkvnhb,rjyoydogkzohhcvx,aezxwucqvqxuqotb,kxobnsjvzvenyhbu,nnjoiilshoavzwly,aijttlxjrqwaewgk,cvsaujkqfoixarsw,zngtoacpxcsplgal,qhkxliqtokvepcdv,aixihrtdmxkfvcqw,owbgdgdymxhhnoum,tajsagmruwzuakkd,ckrfduwmsodeuebj,alfdhuijuwyufnne,xpchlkijwuftgmnm,rwcrvgphistiihlg,xdaksnorrnkihreq,akeschycpnyyuiug,rgputhzsvngfuovz,lerknhznuxzdhvre,mqiqmyladulbkzve,csnmupielbbpyops,kwgrwgmhfzjbwxxz,npwtvbslvlxvtjsd,zxleuskblzjfmxgf,hexvporkmherrtrn,rhtdhcagicfndmbm,qhnzyuswqwoobuzz,dpvanjuofrbueoza,kjcqujmnhkjdmrrf,gholddsspmxtpybg,jihlvyqdyzkshfsi,zuviqmuqqfmtneur,kzexjowatvkohrtx,wgijnfhibsiruvnl,zevkrkmhsxmicijb,khxrcteqourjvoxa,ylpxlkcnenbxxtta,zrfsvctbojjkpvtw,nlzbudxibnmcrxbt,cqnscphbicqmyrex,ywvdohheukipshcw,riwatbvjqstubssf,idlztqqaxzjiyllu,sdpdgzemlqtizgxn,rjtbovqlgcgojyjx,fnfrfwujmjwdrbdr,osnppzzmrpxmdhtj,ljhwngclvydkwyoe,chwqkrkzrvjwarat,jmydkwpibkvmqlgs,zvhfmbxnlxtujpcz,jsnhsphowlqupqwj,fzhkkbpasthopdev,jerntjdsspdstyhf,gctwmaywbyrzwdxz,xemeaiuzlctijykr,xulrqevtbhplmgxc,yfejfizzsycecqpu,gboxrvvxyzcowtzm,lpvhcxtchwvpgaxp,wdiwucbdyxwnjdqf,qgwoqazzjlvnjrwj,prtlnkakjfqcjngn,fagvxsvjpuvqxniz,xacmxveueaakfbsm,ginvtonnfbnugkpz,qpvggsppewfzvwin,reoqnlzruyyfraxa,kolwtqhifjbbuzor,vrkcywvdhdprztww,ngdvyfmvjqhbzbxt,rooxeoilqzqjunmp,efxmdprtogtxgyqs,qrhjuqndgurcmwgu,ouitjprueefafzpl,kirdwcksqrbwbchp,fpumsmogojuywezo,lgjrgykywugzjees,xigioqcpjabpbdas,ewkhuprpqzikmeop,fgrgxsqeducigxvr,bclkursnqkzmjihl,jozidniwvnqhvsbc,oghcilcyozrmmpta,xbgmaungzcpasapi,iqowypfiayzbcvhv,opdehgwdgkocrgkf,zfzvdjeinlegcjba,vhakxvlcayuzukap,xyradgyiebpevnwe,eamhtflgedwyshkn,igteqdgchjeulfth,kwsfkigxzpbgdxod,vapnpsbdboiewpzp,wbuqhjsngxpqshen,vxxilouxuytitwgm,cpnwlkwnkeanqnet,wdmbtqvvlowftvgb,wjtmcecpyqzwpbqg,jnxmoxdhvsphcdeg,wabxfxpotoywwodn,mwbsoxzlqpqobvvh,coktshbyzjkxnwlt,rzhnggpslwzvyqrp,dgzuqbzarbutlkfx,wunajaiiwgijfvjh,uotdbcgmsvbsfqlb,kxdtlgmqbccjqldb,ngmjzjwvwbegehfr,cvpsabqfpyygwncs,wqluvqlhdhskgmzj,rbveperybfntcfxs,fbmoypqdyyvqyknz,zxpgzwnvmuvkbgov,yexcyzhyrpluxfbj,ltqaihhstpzgyiou,munhsdsfkjebdicd,plecvjctydfbanep,kjrxnnlqrpcieuwx,zbcdtcqakhobuscf,kgovoohchranhmsh,llxufffkyvuxcmfx,tgaswqyzqopfvxtw,kojcqjkdpzvbtjtv,xggdlkmkrsygzcfk,vvitpsnjtdqwyzhh,gcqjuwytlhxsecci,vbsghygcsokphnrg,vejqximdopiztjjm,hudqtwmwkviiuslp,vwswfvpcwwpxlyry,gxmfiehdxptweweq,qjmekjdcedfasopf,pqyxdxtryfnihphf,felnavctjjojdlgp,hbimufguekgdxdac,dhxhtnqgfczywxlr,pssottpdjxkejjrh,edieanguabapxyig,sciinanyqblrbzbb,irxpsorkpcpahiqi,qsxecaykkmtfisei,ivfwlvxlbnrzixff,hqxzzfulfxpmivcw,vvbpaepmhmvqykdg,cetgicjasozykgje,wuetifzdarhwmhji,gaozwhpoickokgby,eldnodziomvdfbuv,favpaqktqaqgixtv,twbcobsayaecyxvu,lzyzjihydpfjgqev,wnurwckqgufskuoh,fxogtycnnmcbgvqz,aetositiahrhzidz,dyklsmlyvgcmtswr,ykaxtdkjqevtttbx,kfmnceyxyhiczzjm,nnizopcndipffpko,yjmznhzyfinpmvkb,sljegcvvbnjhhwdd,zmkeadxlwhfahpwg,rwvcogvegcohcrmx,aguqwrfymwbpscau,vlusytjagzvsnbwe,smvzhburcgvqtklh,rfuprvjkhazrcxpv,megqlnoqmymcrclc,gvldhkewtmlwqvqv,awynhvtyziemnjoa,voprnvtnzspfvpeh,dhlguqwmunbbekih,goayirdhnjrfuiqi,eoghydfykxdslohz,chpippjykogxpbxq,hqbycjweqczwjwgf,pvefsrvwumrlvhmt,eghwdovaynmctktk,crwkxoucibumzawc,bzbtahvhkdigvvtj,bnbptgihhfubxhho,ddqmbwyfmfnjjaro,gvtswqyzazihctif,vmqctjpgadxztqqb,dgnndowtpeooaqqf,sxdvctfdtalufxty,ylgeexosibsmmckw,sxplpyskbpqnojvw,coarhxtsvrontyeg,fyoaurggjupvzvlv,jlyrkqsiwuggvjem,uwbsjoxonreuucyi,gihuqvwxovbgokes,dxzaaxupbcgnxcwf,gidrgmvyrlqqslve,csflmlvqmonoywpx,jkxkpixlythlacnk,ejkarcdkdslldugv,dbzmsusevohhjkmr,cbrqzualjpdtworc,kpgidqlmcbpfmmwu,zwghjuofexfowqam,ncdlxmcrsmsocetz,kfprzqacefifjkbd,swwzivrxulkhvldc,wgqejhigbjwunscp,rsstnwcyybfauqxu,qhngfxyhdqopyfgk,zrndpyyejsmqsiaj,xxknxwpvafxiwwjc,mmaahwgoiwbxloem,tabacndyodmpuovp,yriwomauudscvdce,duvyscvfidmtcugl,mgipxnqlfpjdilge,imeeqcdetjuhfjnw,dvkutrdofpulqkyh,jefvtlktxegpmbya,iyzudqgpvlzjfydh,giohapxnpaqayryd,qheqdprmnqlpztls,rdxhijmzegxkotoq,hdnmaspumdwnrcdz,wafpbgehbuzdgsnc,tbtrfztsferdmhsy,vusndcyjngtkrtmk,ilqblestzxebcifh,urfgjbjgzlrfsdlv,aptcdvpsqwleqttn,bigczjvzokvfofiw,zjnjeufonyqgkbpx,trcdebioegfqrrdi,jrdvdriujlmbqewt,jqrcmuxpwurdhaue,yjlermsgruublkly,zwarvgszuqeesuwq,xthhhqzwvqiyctvs,mzwwaxnbdxhajyyv,nclsozlqrjvqifyi,gcnyqmhezcqvksqw,deuakiskeuwdfxwp,tclkbhqqcydlgrrl,qbpndlfjayowkcrx,apjhkutpoiegnxfx,oaupiimsplsvcsie,sdmxrufyhztxzgmt,ukfoinnlbqrgzdeh,azosvwtcipqzckns,mydyeqsimocdikzn,itfmfjrclmglcrkc,swknpgysfscdrnop,shyyuvvldmqheuiv,tljrjohwhhekyhle,dayinwzuvzimvzjw,qgylixuuervyylur,klqqaiemurawmaaz,hdmzgtxxjabplxvf,xiivzelzdjjtkhnj,ktgplkzblgxwrnvo,gvbpyofzodnknytd,lqhlmnmhakqeffqw,ltzdbngrcxwuxecy,obxnfjeebvovjcjz,zexpwallpocrxpvp,tjpkkmcqbbkxaiak,qiedfixxgvciblih,qcxkhghosuslbyih,gnsfidwhzaxjufgm,xrghwgvyjakkzidw,tftftwedtecglavz,wquqczzkzqrlfngr,twibtkijpvzbsfro,bmplypdsvzuhrjxp,zanrfmestvqpwbuh,zonrhfqowyimcukm,kpvajjfmqpbhrjma,kujzluicngigjbtp,iusguantsrwxdjal,kwxeuylcnszswahw,visdhnkobxnemldu,rogeadmmaicwtabl,pxqycifbgevqudvs,osaiozyvlyddylqr,vffjxrolrpuxcatx,jbmsetccdrywssjd,qgxyhjfpbfifmvgc,npejgalglldxjdhs,mbbtqgmttastrlck,whapaqwdtpkropek,dulbdboxazfyjgkg,xaymnudlozbykgow,lebvqmxeaymkkfoy,bmicnfuubkregouj,dieatyxxxlvhneoj,yglaapcsnsbuvrva,bbpjaslqpzqcwkpk,xehuznbayagrbhnd,ikqmeovaurmqfuvr,ylyokwuzxltvxmgv,hqtfinrkllhqtoiz,pjmhtigznoaejifx,fqdbmowkjtmvvrmx,uvqtqfoulvzozfxv,rpajajukuxtchrjd,sznucejifktvxdre,ufvibsmoushmjbne,xirdqoshngthfvax,iafpkddchsgdqmzl,vmualmlduipvykzh,fnmuahmblwyceejb,ilsaapnswfoymiov,lenvylifraahaclv,cukqxlipuyxedqfh,zgwecslpniqvtvuz,cdcdfpsxuyrhsmag,dszjinhantnxgqra,ioimwotsgnjeacgt,dqcymnvjystbynhp,yibaudyfefbfgunx,cabslcvunjavqkbf,goymzvmgkvlsmugf,zxteiitpthzskjjx,agnxcnaqhjhlurzs,cvmgyxhhnykuxbmb,cgqmjexydmvgwxpp,sygjajofieojiuna,clpvxbrbjvqfbzvu,cbntswqynsdqnhyv,bztpbtwbefiotkfa,pnxccbgajvhyeybu,asyzrvgzumtuissa,facjyblvcqqginxa,rvwnucnbsvberxuv,ghrbeykzrxclasie,ekujtselepgjtaql,krtrzsmduhsifyiw,ticjswvsnyrwhpnt,clmjhsftkfjzwyke,lbxlcixxcztddlam,xhfeekmxgbloguri,azxqwlucwhahtvep,kitdjrwmockhksow,keznwwcusgbtvfrs,ljvzxoywcofgwajj,vebjnhnkcfzbhrcw,eqfcxkavstxcuels,ldattkyawjrvcido,bsqqeilshcwtqyil,foqqsxahfiozcqrw,liswfmuhzfbyzjhf,sulbdcyzmolapfbs,zuggzkelwxjpsgxb,betioxrgtnhpivcw,xmtbixstdipibhgs,ttvurgqmulryyaji,viobnljznzppfmxw,qlzabfopydtxrlet,tusvydegfxhaxolk,thoufvvfjferxhwp,cfyyzppfarjiilbs,jwmhxtgafkkgseqs,pqwuuaxbeklodwpt,vndyveahdiwgkjyx,ssrjgasfhdouwyoh,thbavfcisgvvyekf,yjdvxmubvqadgypa,tlbmcxaelkouhsvu,bonohfnlboxiezzr,rktlxcbkhewyvcjl,rsmoutcbcssodvsc,qszdratuxcrhsvoh,eypyfahpuzqwzwhi,yhkrleqmqlmwdnio,vpnvxusvmngsobmq,hkzyhopvxrsimzys,dblriiwnrvnhxykl,xkriqxkrprjwpncs,rcymltrbszhyhqti,mzbvneplsnpiztzn,vkqtnptgbqefvfoc,nwdtfiaozkcjtlax,crximadpvdaccrsm,lrbajafxwwnxvbei,rbexzesrytpwwmjf,stxwjarildpnzfpg,btamaihdivrhhrrv,acqbucebpaulpotl,dkjhzghxxtxgdpvm,rsbzwsnvlpqzyjir,mizypbwvpgqoiams,nvrslorjpqaasudn,wvexcpzmconqkbvk,rfwfumhjwzrvdzam,eaghdaqorkhdsmth,gtuntmpqaivosewh,nzlsmdgjrigghrmy,dhuvxwobpzbuwjgk,kkcuvbezftvkhebf,aeediumxyljbuyqu,rfkpqeekjezejtjc,wkzasuyckmgwddwy,eixpkpdhsjmynxhi,elrlnndorggmmhmx,ayxwhkxahljoxggy,mtzvvwmwexkberaw,evpktriyydxvdhpx,otznecuqsfagruls,vrdykpyebzyblnut,cnriedolerlhbqjy,uajaprnrrkvggqgx,xdlxuguloojvskjq,mfifrjamczjncuym,otmgvsykuuxrluky,oiuroieurpyejuvm';

const dayFiveFormatted = strDayFive.split(',');
// console.log('dayFiveFormatted:', dayFiveFormatted)
// naughtyOrNice(dayFiveFormatted);