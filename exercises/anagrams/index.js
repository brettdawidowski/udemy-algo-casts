// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
      // Normalize string, downcase, remove non letters, and split chars
      const a = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
      const b = stringB.replace(/[^\w]/g, '').toLowerCase().split('');
      // Simple check to rule out obviously false inputs
      if (a.length !== b.length) return false;
      // Init charMaps
      const oA = {};
      const oB = {};
      // Iterate through one array of char bc length is required to be the same
      for (let i = 0; i < a.length; i++) {
            // current letter/char in string B
            let lA = a[i];
            // Set char key's value to 1 or adding 1
            oA[lA] = oA[lA] + 1 || 1;
            // current letter/char in string B
            let lB = b[i];
            // Set char key's value to 1 or adding 1
            oB[lB] = oB[lB] + 1 || 1;
      }
      // If either charMap has greater/less num of chars return false 
      if (Object.keys(oA).length !== Object.keys(oB).length) return false;
      // Iterate through each key and check its value in other charMap
      for (let k in oA) {
            // If values / counts arent the same return false 
            if (oA[k] !== oB[k]) return false;
      }
      // when all these checks pass we know it must be a valid anagram
      return true;
}

function anagram2(stringA, stringB) {
      // compare to see if two input strings are identical
      return cleanAndSortStr(stringA) === cleanAndSortStr(stringB);

      function cleanAndSortStr(str) {
            // 1. replace all whitesplace and non letters with nothing
            // 2. downcase all letters
            // 3. split each char into their own items in an array
            // 4. sort the array
            // 5. join the array back to a string and return
            return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
      }
}


module.exports = anagrams;


