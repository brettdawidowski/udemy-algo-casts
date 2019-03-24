// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

      // #1

      // 1.1 Number to String
      // 1.2 Splits String char into Array items
      // 1.3 Reverse items in the Array
      // 1.4 Join/Adds items on Array back into String
      const rev = n
            .toString()
            .split('')
            .reverse()
            .join('');

      // Parse String into Number them multiples by 1 or -1 depending on
      // if the orginal number was postive or negative
      return parseInt(rev) * Math.sign(n);
      
      
      // # 2
      // Uses Array prototypes to solve this problem
      // This approach is a lot easier to follow / read

      // Determine if the entry is negative or postive
      const isNeg = Math.sign(n) < 0 ? true : false;

      // Converts Number to String then splits char into Array items 
      const beginArr = n.toString().split('');

      // Removes '-' neg sign from begining of Array
      if (isNeg) beginArr.shift();

      // Reverses items in the Array
      const reverseArr = beginArr.reverse();

      // Inserts '-' neg sign to the begining Array 
      if (isNeg) reverseArr.unshift('-');

      // Converst String/Array back to Number
      // Note: Removes 0s in the begining
      return parseInt(reverseArr.join(''));
}

module.exports = reverseInt;
