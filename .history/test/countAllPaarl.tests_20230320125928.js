describe("Test my countAllPaarl function", function () {
    it("It should return number 3", function () {
      assert.equal(
        3,
        countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'),
        "This should be true"
      );
    });
  
    it("It should return number 1", function () {
      assert.equal(1, countAllPaarl('CK 345, CJ 123'), "This should be true");
    });
  });