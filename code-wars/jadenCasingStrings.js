String.prototype.toJadenCase = function () {
    const str = this;
    const arr = str.split(' ');

    const capitalized = arr.map((word) => {
        const splitter = word.split('');
        splitter[0] = splitter[0].toUpperCase();
        const joiner = splitter.join('');
        return joiner;
    })
    return capitalized.join(' ');
  };

//   best practice solution
//   String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

// 'bananas are great'.toJadenCase();