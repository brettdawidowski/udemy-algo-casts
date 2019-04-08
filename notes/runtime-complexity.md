# Runtime Complexity 
*Big "O" Notation*

*Note: **Space Complexity** is refering to the amount of memory being used for solution. This is most of the time very similar to Runtim Complexity*

## Identifying Runtime Complexity
| Example | Big "0" |
|---|---|
| Iterating with the a simple for loop through a single collection | `O(n)` |
| Iterating through half a collection | `O(n)` <br/> *No constants in runtime* |
| Iterating through two *different* collections with separate for loops| `O(n + m)` |
| Two nested for loops iterating over the same collection | `O(n ^ 2)` |
| Two nested for loops iterating over different collections | `O(n * m)` |
| Sorting array | `O(n * log(n))` |
| Searching a sorted array | `O(log(n))` |

## Constant Time
`O(1)`

No matter how many elements we're working with, the algorithm/operation will always take the same amount of time

## Logarithmic Time
`O(log(n))`

You have this if doubling the number of elements you are iterating over does not double the amount of work. Always assume that searching operations are `log(n)`

## Linear Time
`O(n)`

Iterating through all elements in a collection of data. If you see a for loop spanning from `0` to `array.length`, you probably have `n` or linear runtime.

## Qualsilinear Time
`O(n * log(n))`

You have this if doubling the number of elements you are iterating over does not double the amount of work. Always assume that any sorting operation is `n * log(n)`

## Quadratic Time
`O(n ^ 2)`

Every element in a collection has to be compared to every other element. 
*'The handshake problem'*

## Exponential Time
`O(2 ^ n)`

If you add a **single** element to a collection, the processing power required doubles.


