describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should create an array with one object in the parent element when addChild is invoked the first time", function() {
    tree.addChild();
    expect(tree.children).toEqual(jasmine.any(Array));
    expect(typeof tree.children[0]).toEqual('object');
  });

  it("should increase length of children array by one for each added child", function() {
    tree.addChild();
    expect(tree.children.length).toEqual(1);
    tree.addChild();
    expect(tree.children.length).toEqual(2);
  });

  it("should assign a value to the child when invoking addChild with the value as its argument", function() {
    tree.addChild('element1');
    expect(tree.children[0].value).toEqual('element1');
    tree.addChild('element2');
    expect(tree.children[1].value).toEqual('element2');
  });

});