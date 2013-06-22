var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  this._storage[value] = undefined;
};

setPrototype.contains = function(value){
  return (value in this._storage);
};

setPrototype.remove = function(value){
  delete this._storage[value];
};
