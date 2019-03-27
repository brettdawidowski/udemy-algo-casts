// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, s) {
      // Start Recursive Function at first step
      // Takes current step and total num of steps
      // Defaults param s to 1
      s = s || 1;
      // Repeats # * current step num and repeats ' ' * total steps - current step
      console.log('#'.repeat(s) + ' '.repeat(n - s));
      // Calls itself if more steps to climb and increase current step by 1
      if (s < n) steps(n, s + 1)
}

// function steps(n) {
//       // Starting at 1 build each step
//       for (let stepNum = 1; stepNum <= n; stepNum++) {
//             // Init string for step
//             let stepOutput = '';
//             // Duplicate # based on current step num
//             for (let poundSign = 1; poundSign <= stepNum; poundSign++) {
//                   stepOutput += '#';
//             }
//             // Add ' ' to end based on total - current step num
//             for (let space = stepNum; space < n; space++) {
//                   stepOutput += ' ';
//             }
//             console.log(stepOutput);
//       }
// }

module.exports = steps;
