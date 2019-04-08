# Tree Algorthms

**Traversal** - can be accomplished by storing the *children* nodes in a processing array and loop through using a while loop. Inside you will `shift()` removing first node from processing and save it. From there you add the current nodes children to the processing array. 

**BF** - use `push()` to add children to end of processing array
**DF** - use `unshift()` to add children to beging of processing array

Then fire the callback passing the current node.

## Breadth-First Traversal
*Starting at the top move down and then iterate accros all branches at that level. Repeat until reach bottom of Tree*
```javascript
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
```
## Depth-First Traversal
*Start at the top and continuously move down far left side until reach bottom then got up the parent that still have children to the right that have not been touched and repeat.*
```javascript
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
```
## Level Width
*Given the root node of a tree, return an array where each element is the width of the tree at each level.* When **"width"** think Breath-First Traversal
<pre>
Given:
      0
   /  |   \
 1   2   3
 |          |
 4        5
 
Answer: [1, 3, 2]
</pre>
```javascript
function levelWidth(root) {
      // Init counter array with index 0 = 0
      const counters = [0];
      // Init with Root and level-break place holder
      const processing = [root, 'level-break'];
      // Continue until level-break is last in processing array
      while (processing.length > 1) {
            // Getting and Removing first item from processing array
            let current = processing.shift();
            // Checking to see if its level break
            if (current === 'level-break') {
                  // Add back to end of the processing array to seperate
                  // the following levels if exist
                  processing.push(current);
                  // Move over to next counter in array
                  counters.push(0);
            } else {
                  // Add children to end of processing array
                  processing.push(...current.children);
                  // Increase counter by 1
                  counters[counters.length - 1]++;
            }
      }
      return counters;
}
```
## Binary Search Tree
* Only have two children
* Left Child: value > left.value 
* Right Child: value < right.value

NOTE: *Binary Tree* - Only need to have two children

### Inserting
*Implement the `insert()` method for the `Node` class.  Insert should accept an argument `data`, then create an insert a new node at the appropriate location in the tree.*
```javascript
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
```
### Contains
*Implement the `contains()` method for the `Node` class.  Contains should accept a `data` argument and return the Node in the tree with the same value.*
```javascript
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
```
## Validate Binary Search Tree
*Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent.*
```javascript
function validate(node, min = null, max = null) {
      // When max is set check if data is greater than max
      if (max && node.data > max) {
            return false;
      }
      // When min is set check if data is less than min
      if (min && node.data < min ) {
            return false;
      }
      // When has left check to see if left is valid by passing min and max = data
      if (node.left && !validate(node.left, min, node.data)) {
            // On left it has be less than parent = max and greater than
            // the current min being tracked
            return false
      }
      // When has right check to see if right is valid by passing min = data and max
      if (node.right && !validate(node.right, node.data, max)) {
            // On right it has be great than parent = min and less than
            // the current max being tracked
            return false;
      }
      return true;
}
```





