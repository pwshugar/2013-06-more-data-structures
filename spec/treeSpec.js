describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});