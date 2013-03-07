// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  var limit = 8;
  var limitedStorage = makeLimitedStorage(limit);

  var hashTable = {};
  // fill out these methods

  hashTable.insert = function(){
  };

  hashTable.retrieve = function(){
  };

  hashTable.remove = function(){
  };

  return hashTable;
};


/*
 * Do not edit the code below this line, except for bug fixes
 */

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into an integer that is well-distributed across the range 0-max
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % max;
};


// This data structure provides you limited storage array
// It will ensure that you don't accidentally try to use up too much space
var makeLimitedStorage = function(limit){
  var storage = [];

  var getterSetter = function(index, value){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
    if(arguments.length === 1){
      return storage[index];
    }else{
      storage[index] = value;
    }
  };

  return getterSetter;
};
