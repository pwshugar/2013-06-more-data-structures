// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    var newTail = makeNode(value);
    var oldTail = newLinkedList.tail;
    if (!newLinkedList.head) {
      newLinkedList.tail = newTail;
      newLinkedList.head = newTail;
    } else {
      oldTail.next = newTail;
      newLinkedList.tail = newTail;
      newTail.previous = oldTail;
    }
  };

  newLinkedList.addToHead = function(value){
    var newHead = makeNode(value);
    var oldHead = newLinkedList.head;
    if (!newLinkedList.head) {
      newLinkedList.tail = newHead;
      newLinkedList.head = newHead;
    } else {
      oldHead.previous = newHead;
      newLinkedList.head = newHead;
      newHead.next = oldHead;
    }
  };

  newLinkedList.removeHead = function(){
    var temp = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    newLinkedList.head.previous = null;
    return temp;
  };

  newLinkedList.removeTail = function(){
    var temp = newLinkedList.tail.value;
    newLinkedList.tail = newLinkedList.tail.previous;
    newLinkedList.tail.next = null;
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
  newNode.previous = null;
  return newNode;
};