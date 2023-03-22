describe("Test my totalPhoneBill function", function () {
    it("It should return a string that is R3.40 because there is 1 call(R2.75) and 1 sms(R0.65) in the argument ", function () {
      assert.equal(
        'R3.40',
        totalPhoneBill('sms, call'),
        "This should be true"
      );
    });
  
    it("It should return a string R6.15", function () {
      assert.equal("R6.15",  totalPhoneBill('call, call, sms'));
    });

     
    it("It should return a string R4.05", function () {
        assert.equal("R4.05",  totalPhoneBill('sms, sms, call'));
      });
  });