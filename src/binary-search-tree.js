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

    if (data === this.rootNode.data) {
      let node = minLeftNode(this.rootNode.right);
      this.rootNode.data = node.data;
      node.data = node.right.data
      return
    }
    // if (data === this.rootNode.data) {
    //   this.rootNode = this.rootNode.right
    //   return
    // }
    // let node = this.rootNode;
    // while (node) {

    //   if (data >= node.data) {
    //     if (node.data === data) {
    //       node.data = node.right.data
    //       node.right = node.right ? node.right.right : null
    //       node.left = node.right ? node.right.left : null
    //       return;
    //     } else {

    //       node = node.right

    //     }
    //   } else if (data <= node.data) {

    //     if (node.data === data) {

    //       if (node.left) {
    //         node.data = node.left.data
    //       } else {

    //       }

    //       if (node.left.left) {
    //         node.left = node.left.left
    //       } else {
    //         node.left = null
    //       }

    //       return;
    //     } else {
    //       node = node.left
    //     }
    //   }
    // }
    return
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