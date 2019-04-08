# Array Algorithms
Udemy Course: [coding-interview-bootcamp-algorithms-and-data-structure](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure) 
Github: [udemy-algo-casts](https://github.com/brettdawidowski/udemy-algo-casts) 

## Matrix
Write a function that accepts an integer N and returns a NxN spiral matrix.
**Examples:**
`matrix(3)`
<pre>
[[1,  2, 3],
 [8,  9, 4],
 [7,  6, 5]]
</pre>
`matrix(4)`
<pre>
[[1,  2,  3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]
</pre>

Solutions:
```javascript
// Using counter variable to spiral through the array
function matrix(n) {
      const results = [];

      // Precreate all the empty subarray 
      for (let i = 0; i < n; i++){
            results.push([]);
      }

      // Global Counter Variable
      let counter = 1;

      // Start will always at 0
      let startCol = 0;
      let startRow = 0;

      // End will always start at n - 1
      let endCol = n - 1;
      let endRow = n - 1;

      while (startCol <= endCol && startRow <= endRow) {
            
            // Building top row 
            for (let i = startCol; i <= endCol; i++){
                  results[startCol][i] = counter;
                  counter++;
            }
            startRow++;

            // Building far right col
            for (let i = startRow; i <= endRow; i++){
                  results[i][endRow] = counter;
                  counter++;
            }
            endCol--;

            // Building bottom row 
            for (let i = endCol; i >= startCol; i--){
                  results[endRow][i] = counter;
                  counter++;
            }
            endRow--;

            // Building far left col
            for (let i = endRow; i >= startRow; i--){
                  results[i][startCol] = counter;
                  counter++;
            }
            startCol++;
      }

      return results;
}
```






## Fibonacci Series
*Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.*

1. Linear Solution
```javascript
// O(n)
function fib(n) {
      // Always know the first two will be 0, 1
      const results = [0, 1];

      // Increase next item by adding the two pervious items together [5, 8, 13]
      for (let i = 2; i <= n; i++){
            let a = results[i - 1];
            let b = results[i - 2];

            // Add together and append to array
            results.push(a + b);
      }
      return results[results.length - 1];
}
```
2. Recursive Solution (BAD)!! *Exponential Time*
```javascript
// O(2 ^ n) 
function fib(n) {
      // n = 0 or n = 1
      if (n < 2) return n;

      return fib(n - 1) + fib(n - 2);
}
```
Explained using a pyriamd to show call stack:
| | | | | | | | |
|-|-|-|-|-|-|-|-|
| | | | |fib(5)| | | |
| | | |fib(4)| |fib(3)| | |
| | |fib(3)|fib(2)| | |fib(2)|**fib(1)**| 
| |fib(2)|**fib(1)**|**fib(1)**|**fib(0)**| |**fib(1)**|**fib(0)**|
|**fib(1)**|**fib(0)**| | | | | | |

## Memoize 
For runtime of `O(2 ^ n)`, there anything we can do improve the runtime of this recursive algothrim to make it **not** *Exponential Time*? 

The solution is to use `memoization` to cache the results of a function call with same params. The fib example calls itself multiple with the same param and continues to the build the recusive tree.

**Explaination of Memoize:** Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.
```javascript
// General Implementation
function memoize(fn) {
      // init cache of results and args of functions already ran
      const cache = {};
      // args being the arguments passed into function memoizing
      return function (...args) {
            // if function with those params has already ran return cached result
            if (cache[args]) return cache[args];

            // call function with args and get response using apply
            const result = fn.apply(this, args);

            // store returned value with key as args
            cache[args] = result;

            // return that result
            return result;

      }
}

// How to use:
function exampleSlowFn(n) { return n * 2 };

const exampleFn = memoize(exampleSlowFn);

module.exports = exampleFn;
```
