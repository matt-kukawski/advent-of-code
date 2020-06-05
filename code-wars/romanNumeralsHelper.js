const RomanNumerals = {

    roman: {
        M:1000,
        CM:900, 
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1 
    },

    toRoman: function(input) {  
        if (typeof input == 'number') {
            let string = '';
            const roman = this.roman;
            while(input>0){
                for(let a in roman){ 
                    if(roman[a]<=input){ 
                        string += a; 
                        input-=roman[a]; 
                        break;
                    }                  
                }
            }
            return string;
        } else {
            return 'invalid input';
        }
    },
        
    fromRoman: function(input) {            
        if (typeof input == 'string') { 
            const roman = this.roman;
            let total = 0;           
            while(input.length>0){
                const last = input[input.length-1];
                const secondLast = input[input.length-2];
                const lastTwo = secondLast+last;
                if (roman[lastTwo] !== undefined) {
                    total += roman[lastTwo];
                    input = input.substring(0, input.length-2);
                } else if (roman[last] !== undefined){
                    total += roman[last];
                    input = input.substring(0, input.length-1);
                } else {                   
                    return 'invalid letter'
                }               
            }
            return total;
        } else {
            return 'invalid input';
        }      
    }
}

    // console.log(RomanNumerals.toRoman(2008))
    // console.log(RomanNumerals.fromRoman('MDCLXVI'));

    // ALT solution
        //   var numerals = [
        //     ['M', 1000],
        //     ['CM', 900],
        //     ['D', 500],
        //     ['CD', 400],
        //     ['C', 100],
        //     ['XC', 90],
        //     ['L', 50],
        //     ['XL', 40],
        //     ['X', 10],
        //     ['IX', 9],
        //     ['V', 5],
        //     ['IV', 4],
        //     ['I', 1]
        //   ];
        
        //   RomanNumerals = {
        //     toRoman: function(v) {
        //       var s = '';
        //       numerals.forEach(function(n) {
        //         while (v >= n[1]) {
        //           s += n[0];
        //           v -= n[1]; 
        //         }
        //       });
        //       return s;
        //     },
        //     fromRoman: function(s) {
        //       var v = 0;
        //       numerals.forEach(function(n) {
        //         while (s.substr(0, n[0].length) == n[0]) {
        //           s = s.substr(n[0].length);
        //           v += n[1];
        //         }
        //       });
        //       return v;
        //     }
        //   };