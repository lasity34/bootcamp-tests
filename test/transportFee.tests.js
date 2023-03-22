describe("Test my transportFee function", function () {
    it("It should return string a R20", function () {
      assert.equal(
        'R20',
        transportFee('morning'),
        "This should be true"
      );
    });
  
    it("It should return a string R10", function () {
      assert.equal("R10",  transportFee('afternoon'));
    });

     
    it("It should return a string free", function () {
        assert.equal("free",  transportFee('night'));
      });
  });