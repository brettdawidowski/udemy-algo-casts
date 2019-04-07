// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

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

module.exports = validate;
