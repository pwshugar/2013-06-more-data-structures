// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  var storage = [];
  var hashTable = {
    //fixme
    set: function(key, value){
    },
    get: function(key){
    }
  };
  return hashTable;
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % max;
};
