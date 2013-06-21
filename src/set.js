var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  set[storage] = value;
  this.storage++;
};

setPrototype.contains = function(){
};

setPrototype.remove = function(){
};
