// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * Given a string, return true if the string is a palindrome
 * or false if it is not.
 * @param {string} str 
 * @returns {boolean}
 */
function palindrome(str) {

      /**
       * Solution #1:
       *  `Array.prototype.reverse()` === str
       */
      const reversed = str
            .split('')
            .reverse()
            .join('');
      return str === reversed;

      /**
       * Solution #2: 
       * `Array.prototype.every()` not ideal because it does twice the work. 
       * [@link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
       */

      return str.split('').every((char, i) => char === str[str.length - i - 1])


}

module.exports = palindrome;