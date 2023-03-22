describe("Test my findItemsOver20 function", function () {
    it("It should return a list with an array of objects from the first array listItems which will be the 2 objects pears and bananas", function () {
      assert.deepEqual(
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