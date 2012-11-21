// Note: don't use an object to store the inserted elements.
var hashFunction;
var makeHashTable = function(){
  var hashTable = {
    hashFunction: hashFunction
    //fixme
  };
  return hashTable;
}


// DON'T WORRY ABOUT CODE BELOW HERE

hashFunction = function(str, maxResult){
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % maxResult;
}