// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

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

module.exports = fromLast;
