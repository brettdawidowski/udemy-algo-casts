// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
      constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
      }

      insert(data) {
            // data less than parent go left
            if (data < this.data) {
                  // left is null add new node
                  if (!this.left) {
                        this.left = new Node(data);
                  // recursively call insert on left node
                  } else {
                        this.left.insert(data)
                  }
            // data greater than parent go right
            } else {
                  // right is null add new node
                  if (!this.right) {
                        this.right = new Node(data);
                  // recursively call insert on right node
                  } else {
                        this.right.insert(data)
                  }
            }
            // SHORT HAND
            // let dir = 'left';
            // if (data > this.data) dir = 'right' 
            // if (!this[dir]) {
            //       this[dir] = new Node(data);
            // } else {
            //       this[dir].insert(data)
            // }
      }


      contains(data) {
            // Check see if data is the same and return
            if (data === this.data) return this;
            // data less than parent go left
            if (data < this.data) {
                  // recursively call contains on left node
                  if(this.left) return this.left.contains(data);
            // data greater than parent go right
            } else {
                  // recursively call contains on right node
                  if(this.right) return this.right.contains(data);
            }
            return null;
      }


}

module.exports = Node;
