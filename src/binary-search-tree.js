const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // 
    // remove line with error and write your code here
    // console.log("root")
    return this.rootNode;


  }

  add(data) {
    //
    // remove line with error and write your code here
    class Node {
      constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    }
    function addNode(enter, currentData) {
      if (currentData.data < enter.data) {
        if (enter.left == null) {
          enter.left = currentData
        } else {
          addNode(enter.left, currentData)
        }
      } else {
        if (enter.right == null) {
          enter.right = currentData
        } else {
          addNode(enter.right, currentData)
        }
      }
    }
    let node = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = node;
    } else {
      addNode(this.rootNode, node);
    }

  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function hasNode(enter, currentData) {
      if (enter == null) {
        return false
      } else if (currentData < enter.data) {
        return hasNode(enter.left, currentData)

      } else if (currentData > enter.data) {
        return hasNode(enter.right, currentData)

      } else {
        return true
      }

    }
    return hasNode(this.rootNode, data)
  }

  find(data) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function findNode(enter, currentData) {
      if (enter == null) {
        return null
      } else if (currentData < enter.data) {
        return findNode(enter.left, currentData)

      } else if (currentData > enter.data) {
        return findNode(enter.right, currentData)

      } else {
        return enter
      }

    }
    return findNode(this.rootNode, data)
  }

  remove(data) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function removeNode(enter, currentData) {
      if (enter == null) {
        return null

      } else if (currentData < enter.data) {
        
        return removeNode(enter.left, currentData)

      } else if (currentData > enter.data) {
        return removeNode(enter.right, currentData)

      } else {
        return enter
      }

    }
    return removeNode(this.rootNode, data)
  }



min() {
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  function min(enter) {
    if (enter == null) {
      return null
    } else if (enter.left == null) {
      return enter.data
    } else {
      return min(enter.left)
    }

  }
  return min(this.rootNode)
}

max() {
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  function max(enter) {
    if (enter == null) {
      return null
    } else if (enter.right == null) {
      return enter.data
    } else {
      return max(enter.right)
    }

  }
  return max(this.rootNode)
}


}

module.exports = {
  BinarySearchTree
};