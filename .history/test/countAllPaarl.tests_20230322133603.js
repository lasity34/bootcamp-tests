describe("Test my countAllPaarl function", function () {
    it("It should return 3 regisration numbers from the string that have CJ(Paarl) in it", function () {
      assert.equal(
        3,
        countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'),
        "This should be true"
      );
    });
  
    it("It should return 1 regstration number that has CJ(Paarl) in it", function () {
      assert.equal(1, countAllPaarl('CK 345, CJ 123'), "This should be true");
    });
  });