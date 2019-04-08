# LinkedList Algorithms
`Node[data]`=> `Node[data]` => `Node[data]` => `null`

See [LinkedList & Node](https://github.com/brettdawidowski/udemy-algo-casts/blob/master/exercises/linkedlist/index.js) classes on github.

```
## Midpoint LinkedList
*Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. **Do not** use a counter variable, **do not** retrieve the size of the list, and only iterate through the list one time.*
```javascript
function midpoint(list) {
      // Init slow and fast to first node
      let slow = list.getFirst();
      let fast = list.getFirst();

      // Check to make sure fast.next and fast.next.next exist before
      // moving the slow and fast down the linkedList
      while (fast.next && fast.next.next) {
            // Increase by one Node
            slow = slow.next;
            // Increase by twoNode
            fast = fast.next.next;
      }
      // When fast node doesnt have a next or next next we know its reached 
      // the end of the list and slow node is on the midpoint
      return slow;
}
```
## Circular LinkedList
*Given a linked list, return true if the list is circular, false if it is not. No tail and creates infinite loops*
```javascript
function circular(list) {
      // Init slow and fast to first node
      let slow = list.getFirst();
      let fast = list.getFirst();

      // Check to make sure fast.next and fast.next.next exist before
      // moving the slow and fast down the linkedList
      while (fast.next && fast.next.next) {
            // Increase by one Node
            slow = slow.next;
            // Increase by two Nodes
            fast = fast.next.next;

            // When fast node and slow node are referencing the same node
            // its a circular LinkedList and break while loop by
            // returning true
            if (slow === fast) return true;
      }
      // Found end of LinkedList so return false becuase it is
      // not a circular LinkedList
      return false;
}
```
## From Last/End LinkedList
* Given a linked list, return the element n spaces from the last node in the list.  **Do not** call the `size()` method of the linked list.  Assume that n will always be less than the length of the list.*
```javascript
function fromLast(list, n) {
      let slow = list.getFirst();
      // let fast = list.getAt(n);
      // OR if getAt isnt avaible iterate before
      let fast = list.getFirst();

      // Move Fast first n times next
      for (let i = 0; i < n; i++) {
            fast = fast.next;
      }
      
      // Until fast finds the end of the LinkedList
      while (fast.next) {
            // Increase by one Node
            slow = slow.next;
            // Increase by one Nodes
            fast = fast.next;
      }
      // When fast finds the end of the LinkedList
      // slow will be on the n from the end of the LinkedList
      return slow;

}
```