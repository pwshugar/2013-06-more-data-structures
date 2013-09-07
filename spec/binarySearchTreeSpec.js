describe("binarySearchTree", function() {
  var bst;

  beforeEach(function() {
    bst = new BST(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(bst.insert).toEqual(jasmine.any(Function));
    expect(bst.contains).toEqual(jasmine.any(Function));
    expect(bst.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should create an array with one object in the parent element when insert is invoked the first time", function() {
    bst.insert(4);
    expect(typeof bst.left).toEqual('object');
    bst.insert(6);
    expect(typeof bst.right).toEqual('object');
  });

  it("should insert less values to the left, greater values to the right", function() {
    bst.insert(4);
    expect(typeof bst.left).toEqual('object');
    bst.insert(7);
    expect(typeof bst.right).toEqual('object');
    bst.insert(3);
    expect(typeof bst.left.left).toEqual('object');
    bst.insert(9);
    expect(typeof bst.right.right).toEqual('object');
    bst.insert(6);
    expect(typeof bst.right.left).toEqual('object');
  });

  it("should return true if tree contains value, false if it doesn't", function() {
    bst.insert(4);
    bst.insert(7);
    bst.insert(3);
    expect(bst.contains(4)).toEqual(true);
    expect(bst.contains(10)).toEqual(false);
  });


});