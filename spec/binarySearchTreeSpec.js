describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have a method named 'children'", function() {
    expect(binarySearchTree.children).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'addChild'", function() {
    expect(binarySearchTree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree
});