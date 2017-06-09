class Tree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    const recurse = (node) => {
      if (value < node.value){
        if (!node.left) node.left = new Tree(value);
        else recurse(node.left)
      }
      else if (value > node.value){
        if (!node.right) node.right = new Tree(value);
        else recurse(node.right)
      }
    };
    if (!this.contains(value)) recurse(this);
  }

  remove(value){

  }

  contains(value){
    if (value === this.value) return true;
    else if (value < this.value){
      if (this.left) return this.left.contains(value);
    }
    else if (value > this.value){
      if (this.right) return this.right.contains(value);
    }
    return false;
  }
}

const tree = new Tree(3);
tree.insert(4)
tree.insert(5)
tree.insert(6)
console.log(tree.contains(3))
console.log(tree.contains(4))

// console.log(tree)

