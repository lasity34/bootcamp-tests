describe("Test my findItemsOver20 function", function () {
    it("It should return a string R20 because the string morning is typed in as an argument", function () {
      assert.equal(
        results,
        findItemsOver20(itemList),
        "This should be true"
      );
    });
  
    it("It should return a string R10 because the string afternoon is typed in as an argument", function () {
      assert.equal("R10",  transportFee('afternoon'));
    });

     
    it("It should return a string free because the string night is typed in as an argument", function () {
        assert.equal("free",  transportFee('night'));
      });
  });