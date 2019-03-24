// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
      const charMap = {};

      let max = 0;
      let maxChar = '';

      for (let char of str) {
            // 1.0 Single Iteration
            charMap[char] = charMap[char] + 1 || 1;
            
            if (charMap[char] > max) {
                  max = charMap[char];
                  maxChar = char;
            }

            // 2.1 Short Form Option
            /**
                  charMap[char] = charMap[char] + 1 || 1;
            **/
            
            // 2.2 Long Form Option
            /** 
                  if (charMap[char]) {
                        charMap[char]++
                  } else {
                        charMap[char] = 1;
                  }
            **/
      }

      // 2.1 or 2.2 Secondary Loop
      /**
            for (let char in charMap) {
                  if (charMap[char] > max) {
                        max = charMap[char];
                        maxChar = char;
                  }
            }
      **/


      return maxChar;

}

module.exports = maxChar;
