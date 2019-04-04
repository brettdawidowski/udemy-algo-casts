// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

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

module.exports = matrix;
