describe("binarySearchTree", function() {
  var bstree;

  beforeEach(function() {
    bstree = new BSTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(bstree.insert).toEqual(jasmine.any(Function));
    expect(bstree.contains).toEqual(jasmine.any(Function));
    expect(bstree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should create an array with one object in the parent element when insert is invoked the first time", function() {
    bstree.insert();
    expect(bstree.children).toEqual(jasmine.any(Array));
    expect(typeof tree.children[0]).toEqual('object');
  });
  // add more tests here to test the functionality of binarySearchTree
});