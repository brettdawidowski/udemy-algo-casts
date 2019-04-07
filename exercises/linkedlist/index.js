// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

/**
 * @class
 * Creates a class instance to represent a node. The node should have two 
 * properties, 'data' and 'next'. Accept both of these as arguments to the 
 * 'Node' constructor, then assign them to the instance as properties 'data'
 * and 'next'. If 'next' is not provided to the constructor, then default 
 * its value to be 'null'.	
 */
class Node {
      /**
       * Initialize Node with Data and Optional Next Node
       * @param {any} data stored in Node
       * @param {Node} next linked next Node in LinkedList
       */
      constructor(data, next) {
            this.data = data;
            this.next = next || null;
      }
}

/**
 * @class
 * Create a class to represent a linked list. When created, a linked list 
 * should have no head node associated with it. The LinkedList instance 
 * will have one property, 'head', which is a reference to the first node 
 * of the linked list. By default 'head' should be 'null'.
 */
class LinkedList {
      constructor() {
            this.head = null;
      }
      /**
       * Returns the number of nodes in the linked list.
       * @return {number} total count of items
       */
      size() {
            // Get First Node in List
            let n = this.head;
            // Start Counter at 1 if this.head is not null;
            let counter = (n ? 1 : 0);
            // Walk down the linked list and increase counter
            while (n && n.next) {
                  n = n.next
                  counter++
            }
            return counter;
      }
      /**
       * Inserts a new node with provided data at the end of the chain	
       * @param {any} data stored in Node
       * @return {void} 
       */
      insertFirst(data) {
            if (this.head) {
                  this.head = new Node(data, this.head);
            } else {
                  this.head = new Node(data);
            }
      }
      /**
       * Returns the first node of the linked list.	
       * @return {Node} first Node in LinkedList
       */
      getFirst() {
            return this.head;
      }
      /**
       * Removes only the first node of the linked list. The list's head should now be the second element.	
       * @return {void} 
       */
      removeFirst() {
            if (this.head) {
                  this.head = this.head.next;
            }
      }
      /**
       * Inserts a new node with provided data at the end of the chain	
       * @param {any} data stored in Node
       * @return {void} 
       */
      insertLast(data) {
            let n = this.head;
            while (n) {
                  // If next is nothing break while loop
                  if (!n.next) break;
                  // Set n to next node in linked list
                  n = n.next;
            }
            // If head node is null and list is empty
            if (!n) {
                  this.head = new Node(data);
            } else {
                  n.next = new Node(data);
            }
      }
      /**
       * Returns the last node of the linked list	
       * @return {Node} last Node in LinkedList
       */
      getLast() {
            let n = this.head;
            while (n) {
                  // If next is nothing break while loop
                  if (!n.next) break;
                  // Set n to next node in linked list
                  n = n.next;
            }
            return n;
      }
      /**
       * Removes the last node of the chain	
       * @return {void}
       */
      removeLast() {
            let n = this.head;

            // if this.head is only one in linkedList set to null
            if (n && !n.next) this.head = null;

            while (n) {
                  // if next is Node and that Node doesnt have a next
                  if (n.next && !n.next.next) {
                        // Set next to null effectively removing the next node from linkedList
                        n.next = null;
                        break;
                  }
                  n = n.next;
            }
      }
      /**
       * Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.	
       * @param {any} data stored in Node
       * @param {number} index to insert in LinkedList
       * @return {void}
       */
      insertAt(data, index) {
            let n = this.head;
            let counter = 0;

            // When removing head call insertFirst functions
            if (index === 0) {
                  this.insertFirst(data);
            } else {
                  while (n) {
                        // Break when n.next is null insert at end of list
                        if (!n.next) {
                              n.next = new Node(data);
                              break;
                        } 
                        // Replace n.next with new Node with next the current next
                        if (counter === (index - 1) ) {
                              n.next = new Node(data, n.next);
                              break;
                        }
                        // Set n to next node in linked list
                        n = n.next;
                        // Increase counter by 1
                        counter++
                  }
            }
      } 
      /**
       * Returns the node at the provided index	
       * @param {number} index to get in LinkedList
       * @return {Node}
       */
      getAt(index) {
            let n = this.head;
            let counter = 0;
            while (n) {
                  // Break when reach index input
                  if (counter === index) break;
                  // Set n to next node in linked list
                  n = n.next;
                  // Increase counter by 1
                  counter++
            }
            return n;
      }
      /**
       * 
       * @param {number} index to remove at in LinkedList
       * @return {void}
       */
      removeAt(index) {
            let n = this.head;
            let counter = 0;

            // When removing head call removeFirst functions
            if (index === 0) {
                  this.removeFirst();
            } else {
                  while (n) {
                        // Break when n.next has value and reaches one less of the index input
                        if (n.next && counter === (index - 1)) {
                              // Remove next node and link next next node
                              n.next = n.next.next;
                              break;
                        }
                        // Set n to next node in linked list
                        n = n.next;
                        // Increase counter by 1
                        counter++
                  }
            }
      }
      /**
       * Calls the provided function with every node of the chain	
       * @param {LinkedList~callback} callback 
       * @return {void}
       */
      forEach(callback) {
            let n = this.head;
            while (n) {
                  // Fire Callback function
                  callback(n);
                  // Set n to next node in linked list
                  n = n.next;     
            }
      }
      /**
       * Callback for forEach(item).
       * @callback LinkedList~callback
       * @param {Node} node
       * @return {void}
       */

      /**
       * Linked list should be compatible as the subject of a 'for...of' loop	
       * @yields {Node}
       */
      * [Symbol.iterator]() {
            let n = this.head;
            while (n) {
                  // Fire Callback function
                  yield n;
                  // Set n to next node in linked list
                  n = n.next;     
            }
      };
      /**
       * Empties the linked list of any nodes.	
       * @return {void}
       */
      clear() {
            this.head = null;
      }

}

module.exports = { Node, LinkedList };
