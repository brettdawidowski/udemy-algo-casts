// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
      /**
       * Solution #1:
       * Array.prototype.reverse()
       * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
      */
      return str.split('').reverse().join('');

      //_________________________________________________________//
      // STOP //
      //_________________________________________________________//

      /**
       * Solution #2:
       * For Each Loop
      */
      let rev = '';
      for (let char of str) {
            rev = char + rev;
      }
      return rev;

      /**
       * Solution #3:
       * Array.prototype.reduce()
       * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      */
      return str.split('').reduce((rev, char) => char + rev, '');

      // reduce( callback(secondParam, arrItem): secondParam , secondParam)
      // The first param is a callback function that takes two params. The second its the intial value that will be
      // passed along to the callback as its inital first param.
      
      // Callback: Param #1 is the value inital passed or the returned value of the previous callback function
      // Callback Param #2  is the current iteration Array value
      // Callback Return will back send back as the Param #1 of the next Callback or returned by .reduce() function


}

module.exports = reverse;
