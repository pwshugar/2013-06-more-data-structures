describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head", function() {
    expect(Object.keys(linkedList)).toContain("head");
  });

  it("should have a method named 'insert'", function() {
    expect(Object.keys(linkedList)).toContain("insert");
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
});