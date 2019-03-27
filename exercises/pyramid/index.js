// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//       // Calculate number of columns for total rows
//       // Double total rows and minus 1 to get total columns
//       const numcol = n * 2 - 1;
//       // Determine middle index by dividing total columns by 2 and round
//       const midpoint = Math.floor((n * 2 - 1) / 2); 

//       for (let row = 0; row < n; row++) {
//             let stair = '';
//             for (let col = 0; col < numcol; col++) {
//                   if (midpoint - row <= col && midpoint + row >= col ) {
//                         stair += '#';
//                   } else {
//                         stair += ' ';
//                   }
//             }
//             console.log(stair);
//       }
// }

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

module.exports = pyramid;
