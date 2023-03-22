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

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

describe("Test my findItemsOver20 function", function () {
    it("It should return a list with an array of objects from the first array listItems which will be the 2 objects pears and bananas", function () {
      assert.Equal(
        results,
        findItemsOver20(itemList),
        "This should be true"
      );
    });
  
    it("It should return a list with an array of empty objects", function () {
      assert.deepEqual(results2,  findItemsOver20(itemList2));
    });

     
    it("It should return a string free because the string night is typed in as an argument", function () {
        assert.deepEqual(results3,  findItemsOver20(itemList3));
      });
  });