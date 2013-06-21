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

treeMethods.contains = function(){
};
