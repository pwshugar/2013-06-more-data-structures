// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var node = makeNode(value);
    if (!newLinkedList.head) {
      newLinkedList.tail = node;
      newLinkedList.head = node;
    } else {
      newLinkedList.tail.next = node;
      newLinkedList.tail = node;
    }
  };

  newLinkedList.removeHead = function(){
    var temp = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    return temp;
  };

  newLinkedList.contains = function(value){
    if (newLinkedList.head === null) {
      return false;
    }
    var node = newLinkedList.head;
    while(node.value !== value) {
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
    return true;
  };
  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;
  // newNode.removeNextNode = function(){
  // };
  return newNode;
};