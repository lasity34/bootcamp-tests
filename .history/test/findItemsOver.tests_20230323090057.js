var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList4 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'oranges', qty : 37}
];

var results4 = [
    {name : 'apples', qty : 40},
    {name : 'oranges', qty : 37}
];


describe("Test my findItemsOver function", function () {
    it("It should return a list with an array of objects from the first array listItems which will be the 2 objects pears and bananas", function () {
      assert.deepEqual(
        results,
        findItemsOver(itemList, 25),
        "This should be true"
      );
    });
  
    it("It should return a list with an empty array as there are no items above 20", function () {
      assert.deepEqual(results2,  findItemsOver(itemList2, 25));
    });

     
    it("It should return an array of all items from itemsList3 (apples, oranges)", function () {
        assert.deepEqual(results4,  findItemsOver(itemList3, 25));
      });
  });