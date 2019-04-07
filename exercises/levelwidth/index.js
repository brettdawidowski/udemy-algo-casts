// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
      // Init counter array with index 0 = 0
      const counters = [0];
      // Init with Root and level-break place holder
      const processing = [root, 'level-break'];
      // Continue until level-break is last in processing array
      while (processing.length > 1) {
            // Getting and Removing first item from processing array
            let current = processing.shift();
            // Checking to see if its level break
            if (current === 'level-break') {
                  // Add back to end of the processing array to seperate
                  // the following levels if exist
                  processing.push(current);
                  // Move over to next counter in array
                  counters.push(0);
            } else {
                  // Add children to end of processing array
                  processing.push(...current.children);
                  // Increase counter by 1
                  counters[counters.length - 1]++;
            }
      }
      return counters;
}

module.exports = levelWidth;
