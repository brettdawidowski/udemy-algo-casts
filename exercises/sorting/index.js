// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

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

function mergeSort(arr) { // 1. [97, 0] 2a. [97] 2b. [0]
      // stop split recursive
      if (arr.length === 1) return arr; // 2a. [97] 2b. [0]

      // spliting array in half and finding center point/index
      const center = Math.floor(arr.length / 2); // 1. 1

      // take every from 0 up to center but not including center
      const left = arr.slice(0, center); // 1. [97]
      const right = arr.slice(center); // 1. [0]

      return merge(mergeSort(left), mergeSort(right)); // 1. merge([97], [0]) => [0, 97]
}

function merge(left, right) {
      // create merged array
      const merged = [];
     // while there are still elements in both arrays
      while (left.length > 0 && right.length > 0) {
            // if the first element the left half is less than first
            // in right half
            if (left[0] < right[0]) {
                  // shift the element from left into a merged arr
                  merged.push(left.shift());
            } else {
                  // shift the element from right into a merged arr
                  merged.push(right.shift())
            }
      } 
      // take everything from the array that still has elements and
      // append elements to end of merged array
      if (left.length > 0) {
            merged.push(...left);
      } else {
            merged.push(...right);
      }
      return merged;
      // or ES6
      // return [...merged, ...left, ...right];

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
