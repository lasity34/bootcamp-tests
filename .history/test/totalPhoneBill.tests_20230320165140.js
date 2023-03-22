describe("Test my totalPhoneBill function", function () {
    it("It should return a string that is R3.40", function () {
      assert.equal(
        'R3.40',
        totalPhoneBill('sms','call'),
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