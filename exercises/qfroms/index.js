// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
class Queue {
      // Init Two Stack Classes
      constructor() {
            this.l = new Stack();
            this.r = new Stack();
      }
      // Always add to the left stack
      add(item) {
            this.l.push(item);
      }
      // Pop from the right if peek returns a value
      // Move all from left over to right if peek is undefined
      remove() {
            if (this.r.peek()) return this.r.pop();
            while (this.l.peek()) {
                  this.r.push(this.l.pop());
            }
            return this.r.pop();
      }
      // Get from the right if peek returns a value
      // Move all from left over to right if peek is undefined
      peek() {
            if (this.r.peek()) return this.r.peek();
            while (this.l.peek()) {
                  this.r.push(this.l.pop());
            }
            return this.r.peek();
      }
}

module.exports = Queue;
