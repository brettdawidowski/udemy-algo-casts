// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
      // # 1 For loop and Standart Iteration
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
      /*
            // #2 Using while loop and Array.slice
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
      */
}

module.exports = chunk;
