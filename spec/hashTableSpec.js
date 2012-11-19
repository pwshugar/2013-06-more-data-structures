describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  it("should have a method named 'insert'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'retrieve'", function() {
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of hashTable
});