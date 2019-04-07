// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

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
            // we know its a circular LinkedList and break while loop by
            // returning true
            if (slow === fast) return true;
      }
      // Found end of LinkedList so return false becuase it is
      // not a circular LinkedList
      return false;
}

module.exports = circular;
