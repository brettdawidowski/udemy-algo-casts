# Sorting Algorithms
*Taking a Array of numbers and sort them least to greatest.*
**Usually** you will *never* have to implement a sorting algo in a interview setting. You will mostly be asked to `describe` a sorting algo or discuss its `pros` and `cons`. 


## Bubble Sort
`n ^ 2` - worst case runtime
*Acceptable for smaller data sets. Avoid with large sets.*

> Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. The algorithm does not know if it is completed when array is sorted. The algorithm needs one whole pass without any swap to know it is sorted.

```javascript
function bubbleSort(arr) {
      // iterate over the array
      // 1. first loops goal is to move the largest number to
      //    last item in the array
      for (let i = 0; i < arr.length; i++){
            // Optimize by checking if swapped elements
            let swapped = false;
            // iterate over the array ignoring the last element 
            // bc we are checking one element ahead (last element will be checking undefined)
            for (let j = 0; j < arr.length - 1; j++){
                  // if element at j is greater than j + 1 
                  // swap j with j + 1
                  if (arr[j] > arr[j + 1]) {
                        // replaces 2 elements at index j 
                        // effectively replacing (j with j + 1) and (j + 1 with j)
                        arr.splice(j, 2, arr[j + 1], arr[j]);
                        // or ES6 syntax
                        //     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                        // Letting it know it had to swap elements
                        swapped = true;
                  }
            }
            // If no elements were swapped we know its sorted
            // so break the first for loop
            if (!swapped) break;
      }
      return arr;
}
```

## Selection Sort
`n ^ 2` - worst case runtime
*Acceptable for smaller data sets. Avoid with large sets.*

> **"Prove me wrong algorithm."** The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
> 1) The subarray which is already sorted.
> 2) Remaining subarray which is unsorted.

> In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
```javascript
function selectionSort(arr) {
      // iterate over each element in the array
      for (let i = 0; i < arr.length; i++){
            // Assuming the element at i is the least in the array
            // assigning it to indexOfMin
            let indexOfMin = i;
            // starting right one index of i loop through arr
            for (let j = i + 1; j < arr.length; j++){
                  // see if there is an element with a lower value
                  if (arr[indexOfMin] > arr[j]) {
                        // record this lower values index
                        indexOfMin = j;
                  }
            }
            // if index of current element and the index of the lowest element
            // are not the same swap them
            if (indexOfMin !== i) {
                  // Saving value at respected indexes
                  let min = arr[indexOfMin];
                  let current = arr[i];
                  // swap current element at index i with element at indexOfMin
                  arr[indexOfMin] = current;
                  arr[i] = min;
                  // or use splice()
                  //     arr.splice(i, 1, min);
                  //     arr.splice(indexOfMin, 1, current);
                  // or ES6 syntax
                  //     [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
            }
      }
      return arr;
}
```
## Merge Sort
`n * log(n)` - worst case runtime
***Runtime:** For each element added it will take slightly larger than to process than the element did before it. This runtime does grow as rapidly as `n ^ 2`*

> Merge Sort is a sorting algorithm, which is commonly used in computer science. Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem. So Merge Sort first divides the array into equal halves and then combines them in a sorted manner.
> 1. If it is only one element in the list it is already sorted, return.
> 2. Divide the list recursively into two halves until it can no more be divided.
> 3. Merge the smaller lists into new list in sorted order.

See example: [Medium.com](https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2)



