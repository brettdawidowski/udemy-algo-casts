# Data Structures
Ways of organizing information with optimal *Runtime Complexity* for adding or removing records. JavaScript natively implements several data structures. **You will still be asked about *inferior* data structures.**


## Queue
This type of data structured follows the **First In First Out** principal. *The best example is waiting in line for a ticket.*

| Queue | Array Equivalent |
|-|-|
| Add to queue | `array.unshift()` |
| Remove from queue |`array.pop()` |

*Create a queue data structure.  The queue should be a class with methods 'add' and 'remove'. Adding to the queue should store an element until.*
```javascript
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
```
## Stack
This type of data structured follows the **First In Last Out** principal. *The best example is adding or removing cards from a deck.*

```javascript
class Stack {
      // Init with Base Array
      constructor() {
            this.s = [];
      }
      // Adding new item to top of Stack
      add(item) {
            // Only difference between Stack and Queue
            this.s.push(item)
      }
      // Removing and returning top item in Stack
      remove() {
            return this.s.pop();
      }
      // Acessing/Getter of top item in Stack
      peek() {
            return this.s[this.s.length - 1];
      }
}
```
## Linked List

`Node[data]`=> `Node[data]` => `Node[data]` => `null`

See [LinkedList & Node](https://github.com/brettdawidowski/udemy-algo-casts/blob/master/exercises/linkedlist/index.js) classes on github.

## Tree
*Node class should accept an argument that gets assigned to the data property and initialize an empty array for storing children. Tree class should initialize a 'root' property to null. Iterate function that gets called with each element in the tree.*

See [Tree & Node](https://github.com/brettdawidowski/udemy-algo-casts/blob/master/exercises/tree/index.js) classes on github.

## Events
*Create an **eventing library** out of the Events class.  The Events class should have methods `on()`, `trigger()`', and `off()`.*
```javascript
class Events {
      constructor() {
            // Init events storage/reference
            this.events = {}; 
      }
	  // Register an event handler
      on(eventName, callback) {
            // If exist push to list of callbacks
            if (this.events[eventName]) {
                  this.events[eventName].push(callback);
            // If not add eventName as key with array of callback
            } else {
                  this.events[eventName] = [callback];
            }
      }
	  // Trigger all callbacks associated
	  // with a given eventName
      trigger(eventName) {
            // if this event is registered
            if (this.events[eventName]) {
                  // Loop through each callback in array and call
                  for (let fn of this.events[eventName]) {
                        fn(); // Call callback function 
                  }
            }
      }
	  // Remove all event handlers associated
	  // with the given eventName
      off(eventName) {
            // Deleting key from object
            delete this.events[eventName];
      }
}
```
