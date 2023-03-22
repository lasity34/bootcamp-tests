describe("Test my countAllFromTown function", function () {
    it("It should return number 3", function () {
      assert.equal(
        3,
        countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CL'),
        "This should be true"
      );
    });
  
    it("It should return number 1", function () {
      assert.equal(1,  countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CY'), "This should be true");
    });
  });