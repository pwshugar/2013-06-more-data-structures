var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children === undefined && (this.children = []);
  this.children.push(makeTree());
  this.children[this.children.length - 1].value = value;
};

treeMethods.contains = function(value){
  var dig = function(node) {
    if (node.value ===  value){
      return true;
    } else {
      if (node.children !== undefined) {
        for (var i = 0; i < node.children.length; i++) {
          if (dig(node.children[i])) {
            return true;
          }
        }
      }
    }
    return false;
  };
  return dig(this);
};