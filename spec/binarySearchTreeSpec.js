describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have a root", function() {
    expect(Object.keys(binarySearchTree)).toContain("root");
  });

  it("should have a method named 'insert'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'search'", function() {
    expect(binarySearchTree.search).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of binarySearchTree
});