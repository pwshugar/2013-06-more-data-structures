describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should be able to insert a key value pair and retrieve it", function() {
    hashTable.insert('car', 'red');
    hashTable.insert('dog', 'pink');
    expect(hashTable.retrieve('car')).toEqual('red');
    expect(hashTable.retrieve('dog')).toEqual('pink');
  });

  it("should return undefined when deleting a key and then retrieving it", function() {
    hashTable.insert('car', 'red');
    console.log(hashTable.retrieve('car'));
    expect(hashTable.retrieve('car')).toEqual('red');
    hashTable.remove('car');
    console.log(hashTable.retrieve('car'));
    expect(hashTable.retrieve('car')).toEqual(undefined);
  });

  it("should be able to update the value of a given key", function() {
    hashTable.insert('car', 'red');
    hashTable.insert('car', 'green');
    expect(hashTable.retrieve('car')).toEqual('green');
  });

  // add more tests here to test the functionality of hashTable
});