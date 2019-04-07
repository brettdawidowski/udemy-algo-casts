// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

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
module.exports = midpoint;
