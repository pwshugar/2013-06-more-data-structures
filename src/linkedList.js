// Note: don't use an array to do this.
// var makeLinkedList = function(){
//   var newLinkedList = {};
//   newLinkedList.head = null;
//   newLinkedList.tail = null;

//   newLinkedList.addToTail = function(value){
//     var newTail = makeNode(value);
//     var oldTail = newLinkedList.tail;
//     if (!newLinkedList.head) {
//       newLinkedList.tail = newTail;
//       newLinkedList.head = newTail;
//     } else {
//       oldTail.next = newTail;
//       newLinkedList.tail = newTail;
//       newTail.previous = oldTail;
//     }
//   };

//   newLinkedList.addToHead = function(value){
//     var newHead = makeNode(value);
//     var oldHead = newLinkedList.head;
//     if (!newLinkedList.head) {
//       newLinkedList.tail = newHead;
//       newLinkedList.head = newHead;
//     } else {
//       oldHead.previous = newHead;
//       newLinkedList.head = newHead;
//       newHead.next = oldHead;
//     }
//   };

//   newLinkedList.removeHead = function(){
//     var temp = newLinkedList.head.value;
//     newLinkedList.head = newLinkedList.head.next;
//     newLinkedList.head.previous = null;
//     return temp;
//   };

//   newLinkedList.removeTail = function(){
//     var temp = newLinkedList.tail.value;
//     newLinkedList.tail = newLinkedList.tail.previous;
//     newLinkedList.tail.next = null;
//     return temp;
//   };

//   newLinkedList.contains = function(value){
//     if (newLinkedList.head === null) {
//       return false;
//     }
//     var node = newLinkedList.head;
//     while(node.value !== value) {
//       if (node.next === null) {
//         return false;
//       }
//       node = node.next;
//     }
//     return true;
//   };
//   return newLinkedList;
// };

// var makeNode = function(value){
//   var newNode = {};
//   newNode.value = value;
//   newNode.next = null;
//   newNode.previous = null;
//   return newNode;
// };

function Node(value){
  this.value = value;
  this.next = null;
  this.previous = null;
};

function LinkedList(){
  var head = null;
  var tail = null;
  this.addToHead = function(value){
    var node = new Node(value);
    if (head === null) head = tail = node;
    else {
      head.next = node;
      node.previous = head;
      head = node;
    }
  };
  this.addToTail = function(value){
    var node = new Node(value);
    if (tail === null) head = tail = node;
    else {
      tail.previous = node;
      node.next = tail;
      tail = node;
    }
  };
  this.removeFromHead = function(){
    if (head){
      var value = head.value;
      if (head === tail) head = tail = null;
      else {
        head = head.previous;
        head.next = null;
      }
      return value;
    }
  };
  this.removeFromTail = function(){
    if (tail){
      var value = tail.value;
      if (tail === head) tail = head = null;
      else {
        tail = tail.next;
        tail.previous = null;
      }
      return value;
    }
  };
  this.contains = function(value){
    function recurse(node){
      if (node.value === value) return true;
      else if (node.next) return recurse(node.next);
      else return false;
    };
    if (tail){
      return recurse(tail)
    } else return false;
  }
  this.getList = function(){
    var list = []
    function recurse(node){
      list.push(node.value);
      if (node.next) return recurse(node.next);
      else return list;
    };
    if (tail){
      return recurse(tail)
    } else return list;
  }
};

var linkedList = new LinkedList();
linkedList.addToHead(1)
linkedList.addToHead(2)
linkedList.addToTail(16)
linkedList.addToTail(150)
linkedList.addToHead(3)
linkedList.addToHead(10)
linkedList.addToHead(12)
linkedList.addToTail(15)
console.log(linkedList.removeFromTail(15))
console.log(linkedList.getList())



