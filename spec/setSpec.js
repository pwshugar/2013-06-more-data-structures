describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should produce new sets with empty storage", function() {
    var x = 0;
    for (var key in set._storage) {
      x++;
    }
    expect(x).toEqual(0);
  });

  it("should contain an element after it's added or false if it hasn't", function() {
    set.add('element1');
    set.add('element2');
    expect(set.contains('element1')).toEqual(true);
    expect(set.contains('element2')).toEqual(true);
    expect(set.contains('element3')).toEqual(false);
  });

  it("should remove an object if it is in the set", function() {
    set.add('element1');
    set.remove('element1');
    expect(set.contains('element1')).toEqual(false);
  });

});