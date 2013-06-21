describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should update tail when calling 'addToTail'", function() {
    linkedList.addToTail('element');
    expect(linkedList.tail.value).toEqual('element');
  });

  it("should update head when calling 'addToTail' the first time", function() {
    linkedList.addToTail('element');
    expect(linkedList.head.value).toEqual('element');
  });

  it("should update tail when adding a second node but not change head", function() {
    linkedList.addToTail('element1');
    linkedList.addToTail('element2');
    expect(linkedList.head.value).toEqual('element1');
    expect(linkedList.tail.value).toEqual('element2');
  });

  it("the first node should have a reference to the next one", function() {
    linkedList.addToTail('element1');
    linkedList.addToTail('element2');
    expect(linkedList.head.next).toEqual(linkedList.tail);
  });

  it("should be able to remove a node from the list, return its value, and update head", function() {
    linkedList.addToTail('element1');
    linkedList.addToTail('element2');
    linkedList.addToTail('element3');
    expect(linkedList.removeHead()).toEqual('element1');
    expect(linkedList.head.value).toEqual('element2');
  });

  it("contains should return 'false' for an empty list", function() {
    expect(linkedList.contains()).toEqual(false);
  });

  it("contains should return 'false' if the passed value is not in the list", function() {
    linkedList.addToTail('element1');
    expect(linkedList.contains('element2')).toEqual(false);
    expect(linkedList.contains('element3')).toEqual(false);
  });

  it("contains should return 'true' if the passed value is in the list", function() {
    linkedList.addToTail('element1');
    linkedList.addToTail('element2');
    linkedList.addToTail('element3');
    expect(linkedList.contains('element1')).toEqual(true);
    expect(linkedList.contains('element2')).toEqual(true);
  });

  // add more tests here to test the functionality of linkedList
});