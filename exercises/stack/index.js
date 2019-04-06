// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
      // Init with Base Array
      constructor() {
            this.s = [];
      }
      // Adding new item to top of Stack
      push(item) {
            this.s.push(item)
      }
      // Removing and returning top item in Stack
      pop() {
            return this.s.pop();
      }
      // Acessing/Getter of top item in Stack
      peek() {
            return this.s[this.s.length - 1];
      }
}

module.exports = Stack;
