// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
      // Init Base Array as Queue
      constructor() { 
            this.q = [];
      }
      // Using unshift to add item to begin / index 0 of Array
      add(item) {
            this.q.unshift(item);
      }
      // Using pop to remove the last item / Array.length - 1
      remove() {
            return this.q.pop();
      }
      // Accessing/Getter the next item in the Queue
      peek() {
            return this.q[this.q.length - 1];
      }
}

module.exports = Queue;
