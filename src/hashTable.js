var HashTable = function(){
  this._limit = 1;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (!this._storage[index]){
    this._storage[index] = [[key, value]];
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
        if(this._storage[index][i][0] === key) {
          this._storage[index][i][1] = value;
        } else {
          this._storage[index].push([key, value]);
        }
      }
    }
  };

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  if(this._storage[index]){
    for (var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === key) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  if(this._storage[index]){
    for (var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === key) {
        this._storage[index].splice(i,1);
      }
    }
  }
};


// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
var makeLimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};