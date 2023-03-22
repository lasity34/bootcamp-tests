describe("Test my isWeekday function", function () {
  it("It should return false, because Saturday is not a weekday", function () {
    assert.equal(false, isWeekday("Saturday"), "This should not be true");
  });
  it("It should return false, because Sunday is not a weekday", function () {
    assert.equal(false, isWeekday("Sunday"), "This should not be true");
  });
  it("It should return True, because Monday is a weekday", function () {
    assert.equal(true, isWeekday("Monday"), "This should be true");
  });
  it("It should return True, because Tuesday is a weekday", function () {
    assert.equal(true, isWeekday("Tuesday"), "This should be true");
  });
  it("It should return True, because Wednesday is a weekday", function () {
    assert.equal(true, isWeekday("Wednesday"), "This should be true");
  });
  it("It should return True, because Thursday is a weekday", function () {
    assert.equal(true, isWeekday("Thursday"), "This should be true");
  });

  it("It should return True, because Friday is a weekday", function () {
    assert.equal(true, isWeekday("Friday"), "This should be true");
  });

});
