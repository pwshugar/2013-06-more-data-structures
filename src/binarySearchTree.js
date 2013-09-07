var BST = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
};

BST.prototype.insert = function(value){
  if (value === undefined || this.contains(value)){ return; }
  if (this.value > value){
  	!this.left ? this.left = new BST(value) : this.left.insert(value);
  } else {
  	!this.right ? this.right = new BST(value) : this.right.insert(value);
  }
};

BST.prototype.contains = function(value){
  if (this.value === value){ return true; }
  else {
  	if (this.left && this.left.contains(value)){ return true; }
  	if (this.right && this.right.contains(value)){ return true; }
  }
  return false;
};

BST.prototype.depthFirstLog = function(){
  
};

BST.prototype.balance = function(){
  var arr = [];

  var depthSearch = function(node){
  	arr.push(node.value);
    if (node.left){ depthSearch(node.left); }
    if (node.right){ depthSearch(node.right); }
  };

  depthSearch(this);
  arr.sort(function(a,b){ return a - b });
  this.value = arr[Math.ceil((arr.length / 2) - 1)];
  this.left = null;
  this.right = null;

  var rebuild = function(arr, node){
  	var mid = Math.ceil(arr.length / 2) - 1;
  	var leftArr = arr.slice(0, mid);
  	var rightArr = arr.slice(mid + 1, arr.length);
  	node.insert(leftArr[Math.ceil((leftArr.length / 2) - 1)]);
  	node.insert(rightArr[Math.ceil((rightArr.length / 2) - 1)]);
	if (leftArr.length === 2){
	  node.left.right = new BST(leftArr[1]);
	} else if (leftArr.length > 2){
	  rebuild(leftArr, node.left);
	}
	if (rightArr.length === 2){
	  node.right.right = new BST(rightArr[1]);
	} else if (rightArr.length > 2){
	  rebuild(rightArr, node.right);
	}

  };

  rebuild(arr, this);

};


