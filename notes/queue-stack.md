# Queue & Stack Algorithms
**Queue** - *This type of data structured follows the **First In First Out** principal. The best example is waiting in line for a ticket.*

**Stack** - *This type of data structured follows the **First In Last Out** principal. The best example is adding or removing cards from a deck.*

## Weave
*Weave receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the *alterating* content of the two queues.  The function should handle queues of different lengths without inserting 'undefined' into the new one. Only use the `add()`, `remove()`, and `peek()` functions.*

```javascript
function weave(sourceOne, sourceTwo) {
      // Init new queue to add items to
      const q = new Queue();
      // While sourceOne or sourceTwo still has remaining items left in their queue
      while (sourceOne.peek() || sourceTwo.peek()) {
            // Checking to make sure sourceOne still had items left
            if (sourceOne.peek()) {
                  // Adding item to merged queue and removing it from sourceOne queue
                  q.add(sourceOne.remove());
            }
            // Checking to make sure sourceTwo still had items left
            if (sourceTwo.peek()) {
                  // Adding item to merged queue and removing it from sourceTwo queue
                  q.add(sourceTwo.remove());
            }
      }
      return q;
}
```
## Queue with Two Stacks
*Implement a Queue datastructure using two stacks. **Do not** create an array inside of the `new Queue()` class. Queue should implement the methods `add()`, `remove()`, and `peek()`.*
```javascript
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