var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;
  newTree.parent = undefined;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children === undefined && (this.children = []);
  this.children.push(makeTree());
  this.children[this.children.length - 1].value = value;
  this.children[this.children.length - 1].parent = this;
};

treeMethods.removeFromParent = function(){
  var arr = this.parent.children;
  if (arr.length === 1) {
    this.parent.children = undefined;
  } else {
    for (var i = 0; i < arr.length; i++) {
      arr[i] === this && arr.splice(i,1);
    }
  }
};

treeMethods.contains = function(target){
  return this.value === target || _.any(this.children, function(node){
    return node.value === target || node.contains(target);
  });
};

// treeMethods.contains = function(value){
//   var dig = function(node) {
//     if (node.value ===  value){
//       return true;
//     } else {
//       if (node.children !== undefined) {
//         for (var i = 0; i < node.children.length; i++) {
//           return dig(node.children[i]);
//         }
//       }
//     }
//     return false;
//   };
//   return dig(this);
// };


// treeMethods.contains = function(value){
//   var dig = function(node) {
//     if (node.value ===  value){
//       return true;
//     } else {
//       if (node.children !== undefined) {
//         for (var i = 0; i < node.children.length; i++) {
//           var x = node.children[i++];
//           if (dig(node.children[i])) {
//             return true;
//           } else if (node.children[i++]){
//               dig(node.children[i++]);
//             } else {
//             return dig(x);
//             }
//           }
//         }
//       }
//     return false;
//   };
//   return dig(this);
// };