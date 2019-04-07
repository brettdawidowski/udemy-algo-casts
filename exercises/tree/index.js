// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
      /**
       * Creates Node with data property and initialize an empty 
       * array for storing children.
       * @param {any} data 
       */
      constructor(data) {
            this.data = data;
            this.children = [];
      }
      /**
       * Add child Node to this Node
       * @param {any} data child nodes data value
       * @returns {void}
       */
      add(data) {
            this.children.push(new Node(data));
      }
      /**
       * Remove child Node(s) to this Node where data === node.data
       * @param {any} data child nodes data value
       * @returns {void}
       */
      remove(data) {
            // Removes nodes where data === node.data
            this.children = this.children.filter((n) => n.data !== data);
      }

}

class Tree {
      constructor() {
            this.root = null;
      }
      /**
       * Iterate through Tree using Breadth-First Traversal
       * @param {Tree~traverseCallback} callback 
       * @returns {void}
       */
      traverseBF(callback) {
            // When root is null end function
            if (!this.root) return;
            // Init processing Array with root Node
            const processing = [this.root];

            // Continue loop while nodes are in processing Array
            while (processing.length > 0) {
                  // Remove first item in processing and save it
                  let current = processing.shift();
                  // Add children to processing Array 
                  if(current.children.length > 0) processing.push(...current.children)
                  // Call Function passing current Node
                  callback(current);
            }
            
      }
      /**
       * Iterate through Tree using Depth-First Traversal
       * @param {Tree~traverseCallback} callback 
       * @returns {void}
       */
      traverseDF(callback) {
             // When root is null end function
             if (!this.root) return;
             // Init processing Array with root Node
             const processing = [this.root];
 
             // Continue loop while nodes are in processing Array
             while (processing.length > 0) {
                   // Remove first item in processing and save it
                   let current = processing.shift();
                   // Add children to begining of the processing Array 
                   if(current.children.length > 0) processing.unshift(...current.children)
                   // Call Function passing current Node
                   callback(current);
             }
      }

}

module.exports = { Tree, Node };
