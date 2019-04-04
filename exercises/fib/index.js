// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


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


// O(n)
function fib(n) {
      // n = 0 or n = 1
      if (n < 2) return n;

      return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
