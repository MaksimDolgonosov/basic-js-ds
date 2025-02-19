const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = {
      data: null,
      left: null,
      right: null
    }
  }
  root() {
    if (this.rootNode.data) {
      return this.rootNode;
    }
    return null
  }

  add(data) {
    if (!this.rootNode.data) {
      this.rootNode = {
        data: data,
        right: null,
        left: null
      };

    } else {
      let node = this.rootNode
      while (node) {
        if (data > node.data) {
          if (!node.right) {
            node.right = {
              data: data,
              right: null,
              left: null
            }
            break;
          } else {
            node = node.right
          }

        } else {
          if (!node.left) {
            node.left = {
              data: data,
              right: null,
              left: null
            }
            break;
          } else {
            node = node.left
          }

        }
      }

    }
  }
  has(data) {
    console.log(this.rootNode)
    if (data === this.rootNode.data) {
      return true
    }
    let node = this.rootNode;
    while (node) {
      if (data > node.data) {
        if (node.data === data) {
          return true;
        } else {
          node = node.right
        }
      } else {
        console.log(node)
        if (node.data === data) {
          return true;
        } else {
          node = node.left
        }
      }
    }
    return false
  }

  find(data) {
    if (data === this.rootNode.data) {
      return this.rootNode
    }
    let node = this.rootNode;
    while (node) {
      if (data > node.data) {
        if (node.data === data) {
          return node;
        } else {
          node = node.right
        }
      } else {
        if (node.data === data) {
          return node;
        } else {
          node = node.left
        }
      }
    }
    return null
  }

  remove(data) {


    function minLeftNode(node) {
      if (node.left == null) {
        return node
      } else {
        return minLeftNode(node.left)
      }

    }


    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(enter, data) {
      if (enter.data == null) {
        return null;
      } else if (data < enter.data) {
        enter.left = removeNode(enter.left, data);
        return enter;
      } else if (data > enter.data) {
        enter.right = removeNode(enter.right, data);
        return enter;
      } else {
        if (enter.left == null && enter.right == null) {
          enter = null;
          return enter;
        }
        if (enter.left == null) {
          enter = enter.right;
          return enter;
        } else if (enter.right == null) {
          enter = enter.left;
          return enter;
        }


        let node = minLeftNode(enter.right);
        console.log(node)

        enter.data = node.data;

        enter.right = removeNode(enter.right, node.data);
        return enter;



      }
    }
  }

  min() {
    let node = this.rootNode
    while (node) {
      if (node.left) {
        node = node.left
      } else {
        return node.data
      }
    }
  }

  max() {
    let node = this.rootNode
    while (node) {
      if (node.right) {
        node = node.right
      } else {
        return node.data
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};