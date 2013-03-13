// Note: only use the limited array object object to store the inserted elements.
var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(limit);
  // example usage of a limited array:
  // limitedArray.set(3, 'hi');
  // limitedArray.get(3); // alerts 'hi'
};

HashTable.prototype.insert = function(){
};

HashTable.prototype.retrieve = function(){
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
