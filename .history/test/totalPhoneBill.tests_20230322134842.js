describe("Test my totalPhoneBill function", function () {
    it("It should return a string that is R3.40 because there is 1 call(R2.75) and 1 sms(R0.65) in the argument ", function () {
      assert.equal(
        'R3.40',
        totalPhoneBill('sms, call'),
        "This should be true"
      );
    });
  
    it("It should return a string that is R6.15, because there is 2 calls(R5.50) and 1 sms(R0.65) in the argument", function () {
      assert.equal("R6.15",  totalPhoneBill('call, call, sms'));
    });

     
    it("It should return a string that is R4.05, because there is 2 sms(R1.30) and 1 call(R2.75) in the argument", function () {
        assert.equal("R4.05",  totalPhoneBill('sms, sms, call'));
      });
  });