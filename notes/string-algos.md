# String Algorithms
Udemy Course: [coding-interview-bootcamp-algorithms-and-data-structure](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure) 
Github: [udemy-algo-casts](https://github.com/brettdawidowski/udemy-algo-casts) 

## Reverse String []()
*Given a string, return a new string with the reversed order of characters*
1. `Array.prototype.reverse()` [Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
```javascript
return str.split('').reverse().join('');
```
2. `Array.prototype.reduce()` [Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
**reduce( callback(secondParam, arrItem): secondParam , secondParam)**
The first param is a callback function that takes two params. The second its the intial value that will be passed along to the callback as its inital first param. Callback's **first param** is the value inital passed or the returned value of the previous callback function. Callback's **second param** is the current iteration/item in the Array. Callback **return value** will the **first param** of the next Callback or returned by .reduce() function
```javascript
return str.split('').reduce((rev, char) => char + rev, '');
```
3. `for ( let char of str ) {}`
```javascript
let rev = '';
for (let char of str) {
      rev = char + rev;
}
return rev;
```
## Palindrome []()
*Palindromes are strings that form the same word if it is reversed.*
1. Use a method from the Reverse String section to reverse input then using a comparison operator return the evaluation of `str === rev`
```javascript
const rev = str
      .split('')
      .reverse()
      .join('');
return str === rev;
```
2. `Array.prototype.every()` not ideal because it does twice the work. [Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
The `every()` method tests whether all elements in the array pass the test implemented by the provided function. Callback's **first param** is the item of the Array it is iterating over and the **second param** is the index.

| a | b | c | b | a |
|---|---|---|---|---|
| x |   |   |   | x |
|   | x |   | x |   |
|   |   |xx |   |   |

```javascript
return str.split('').every((char, i) => char === str[str.length - i - 1])
```

## Reverse Int []()
*Given a Nuber, return a new Number with that is reversed and maintain neg/pos*
1. Convert to String then reverse the String *see above for examples.* Convert back to Number using `parseInt()` and maintain neg/pos with `Math.sign()`

```javascript
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

```
## Max Character []()
*Given a string, return the character that is most commonly used in the string.*
1. Saving the each char in the input `String` into `Object` *(aka key value pair)* with the key being the char and the value being its total count.

1.1. Using a single iteration of the input `String` map the char and count to the object and update the current max / max char.
```javascript
const charMap = {};
// Placeholding variables
let max = 0;
let maxChar = '';

for (let char of str) {
      // Add 1 or Set to 1 in charMap Object
      charMap[char] = charMap[char] + 1 || 1;
      // Determine if current char is greater than current
      // evaluated max.
      if (charMap[char] > max) {
            // Set the current max(s) to the current count and char
            max = charMap[char];
            maxChar = char;
      }
}
return maxChar;

```

1.2. Build the `Object` first and then iterate through it to determine the max / max char in the `String` input.
```javascript
const charMap = {};
for (let char of str) {
      // If already in charMap Add 1
      if(charMap[char]) {
            charMap[char]++
      // If not in charMap Set to 1
      } else {
            charMap[char] + 1;
      }
}
// Placeholding variables
let max = 0;
let maxChar = '';
for (let charKey in charMap) {
      // Determine if current char is greater than current
      // evaluated max.
      if (charMap[charKey] > max) {
            // Set the current max(s) to the current count and char
            max = charMap[charKey];
            maxChar = charKey;
      }

}
return maxChar;

```
**Other Questons:**
*1. Whats the most common charater in this string?*
*2. Does string `A` have the same charaters as string `B`? **(anagram)***
*3. Does the given string input have any repeated charaters? `true || false`*

## Fuzzbuzz []()
Write a program that console logs the numbers from `1` to `n`. But for multiples of three print **“fizz”** instead of the number and for the multiples of five print **“buzz”**. For numbers which are multiples of both three and five print **“fizzbuzz”**.

```javascript
// Determine if multiple of 3
const divThree = i % 3 === 0 ? true : false;
// Determine if multiple of 5
const divFive = i % 5 === 0 ? true : false;

// Starting at 1 loop ++ until i === n
for (let i = 1; i <= n; i++){
      // If multiple of 3 and 5
      if (divThree && divFive) {
            console.log('fizzbuzz');
      // If multiple of 3
      } else if (divThree) {
            console.log('fizz');
      // If mulitple of 5
      } else if (divFive) {
            console.log('buzz');
      // Otherwise output n
      } else {
            console.log(n);
      }
}

```

## Chunk Array (2-D) []()
*Given an array and chunk size, divide the array into many subarrays where each subarray is of length size*
```javascript
// Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
function chunk(array, size) {
      // Create empty array to hold chunked arrays
      const chunked = [];
      // Iterate through each item in unchuncked array
      for (let item of array) {
            // Retreive last item in chunked array
            let last = chunked[chunked.length - 1];
            // If last element doesnt exist or length equals size
            if (!last || last.length === size) {
                  // Add new array chunk to chunked array
                  chunked.push([item]);
            } else {
                  // Add item to last item in chunked array
                  last.push(item);
            }
      }
      return chunked;
}
```
```javascript
function(array, size){
      // Create empty array to hold chunked arrays
      const chunked = [];
      // Start at index 0
      let index = 0;
      // Iterate through while skip over based on size 
      while (index <= array.length) {
            // Add the chunck to Array of chunck
            chunked.push(
                  // Extract current index to end of size 
                  array.slice(index, index + size)
            );          
            // Add size to current index value for next chunck
            index += size;
      }
      return chunked;
}

```
## Anagrams []()
*Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case*
```javascript
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
```
Using the charMap method above is the preferred way of completing this problem. However, this a quick and dirty approach but it does have some performance conserns.
**Do not use unless instructed**
```javascript
function anagram2(stringA, stringB) {
      // compare to see if two input strings are identical
      return cleanAndSortStr(stringA) === cleanAndSortStr(stringB);
      
      // Sub Function to reduce code duplication
      function cleanAndSortStr(str) {
            // 1. replace all whitesplace and non letters with nothing
            // 2. downcase all letters
            // 3. split each char into their own items in an array
            // 4. sort the array
            // 5. join the array back to a string and return
            return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
      }
}
```
## Capitalize []()
*Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.*
```javascript
function capitalize(str) {
      // Split input string into indivual words
      const words = str.split(' ');
      // Iterate through updating the current value of each item .map()
      return words.map((word) => {
            // Uppercase first letter and .slice() first char (returns remaining letters)
            return word[0].toUpperCase() + word.slice(1)
      }).join(' '); // Finally join all words back together as one string 
}
```
## Steps []()
*Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side!*
```javascript
// --- Examples
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, s = 1) {
      // Start Recursive Function at first step
      // Takes current step and total num of steps
      // Defaults param s to 1
      // s = s || 1;
      // Repeats # * current step num and repeats ' ' * total steps - current step
      console.log('#'.repeat(s) + ' '.repeat(n - s));
      // Calls itself if more steps to climb and increase current step by 1
      if (s < n) steps(n, s + 1)
}
```
1. If row ===  n then we have hit the end of stair/problem
2. If the stepLog.length ===  n then we are at end of row `console.log()`
3. If stepLog.length <= row we append # otherwise append ' ' then recall
```javascript
function steps(n, row = 0, stepLog = '') {
      if(n === row) return;
      
      if(n === stepLog.length) {
            conole.log(stepLog)
            return steps(n, row + 1);
      }
      
      if(stepLog.length <= row) {
            stepLog += '#'
            
      } else {
            stepLog += ' ';
      }
      steps(n, row, stepLog)
}

```
1. From 0 to n (iterate through rows)
2. Create empty string for step
3. From 0 to n (iterate through columns) for each row
4. If column <= row append a '#'
5. Else append a ' '
|    | c0  | c1  | c2  | 
| -  | :-: | :-: | :-: |
| r0 | #   | _   | _   |
| r1 | #   | #   | _   |
| r2 | #   | #   | #   |
*c0 equals r0 output #, c1 greater than r0 output _, c1 less than r2 ouput #*
```javascript
function steps(n) {
      // Starting at 1 build each step
      for (let row = 0; row < n; row++) {
            // Init string for step
            let stepLog = '';
            for (let column = 0; column < n; column++) {
                  // Duplicate # based on current step num
                  if(column <= row) {
                        stepLog += '#';
                  } else {
                  // Add ' ' to end based on total - current step num
                        steplog += ' ';
                  }
            }
            console.log(stepOutput);
      }
}
```
## Recursion Tip []()
* Figure out the bare minimum pieces of information to represent your problem
* Give reasonable defaults to the bare minimum piece info
* Check the base case. Is there any work left to do? If not, return
* Do some work. Call your function again, make sure the arguments have changed in some fashion. 

## Pyramids []()
|    | c0  | c1  | c2  | c3  | c4  |
| -  | :-: | :-: | :-: | :-: | :-: |
| r0 | _   | _   | #   | _   | _   |
| r1 | _   | #   | #   | #   | _   |
| r2 | #   | #   | #   | #   | #   |

1. For 0 to n iterate through rows
2. Create an empty level string
3. Calulate midpoint by Math.floor((n * 2 + 1) / 2)
4. From 0 to n * 2 - 1 = num of column 
5. If column is greater than of eq to midpoint + row and less than or eq to midpoint - row append # otherwise append _
```javascript
function pyramid(n) {
      // Calculate number of columns for total rows
      // Double total rows and minus 1 to get total columns
      const numcol = n * 2 - 1;
      // Determine middle index by dividing total columns by 2 and round
      const midpoint = Math.floor((n * 2 - 1) / 2); 
      // Iterate through rows
      for (let row = 0; row < n; row++) {
            // Create empty start
            let stair = '';
            // Iterate throught number of cols
            for (let col = 0; col < numcol; col++) {
                  // When meets both conditions append #
                  if (midpoint - row <= col && midpoint + row >= col ) {
                        stair += '#';
                  } else {
                        stair += ' ';
                  }
            }
            console.log(stair);
      }
}
/**
* Recursive
**/
function pyramid(n, row = 0, level = '') {
      // Defeault end when n === row 
      if (n === row) return;
      // Calculate number of columns for total rows
      // Double total rows and minus 1 to get total columns
      const numcol = n * 2 - 1;
      // Row is complete console.log and move to next row
      if (level.length === numcol) {
            console.log(level)
            // Recall and move down to next row and reset level string
            return pyramid(n, row + 1);
      }
      // Determine middle index by dividing total columns by 2 and round
      const midpoint = Math.floor((n * 2 - 1) / 2); 

      let add;
      if (midpoint - row <= level.length && midpoint + row >= level.length ) {
            add = '#';
      } else {
            add = ' ';
      }
      // Recall and move over to next col and add # or _ to level      
      pyramid(n, row, level + add)
}
```
## Count Vowels []()
*Write a function that returns the number of vowels used in a string. Vowels are the characters 'a', 'e' 'i', 'o', and 'u'.*
```javascript
function vowels(str) {
      let counter = 0;
      const vowelsList = ['a', 'e', 'i', 'o', 'u'];
      for (let char of str.toLowerCase()) {
            if (vowelsList.includes(char)) {
                  counter++;
            }
      }
      return counter;
}
```


