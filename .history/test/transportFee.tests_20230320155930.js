describe("Test my transportFee function", function () {
    it("It should return string R20", function () {
      assert.equal(
        'R20',
        transportFee('morning'),
        "This should be true"
      );
    });
  
    it("It should return number 1", function () {
      assert.equal(1,  countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CY'), "This should be true");
    });
  });