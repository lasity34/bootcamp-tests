describe("Test my isWeekday function", function () {
  it("It should return False", function () {
    assert.equal(false, isWeekday("Saturday"), "This should not be true");
  });
  it("It should return False", function () {
    assert.equal(false, isWeekday("Sunday"), "This should not be true");
  });
  it("It should return True", function () {
    assert.equal(true, isWeekday("Monday"), "This should be true");
  });
  it("It should return True", function () {
    assert.equal(true, isWeekday("Tuesday"), "This should be true");
  });
  it("It should return True", function () {
    assert.equal(true, isWeekday("Wednesday"), "This should be true");
  });
  it("It should return True", function () {
    assert.equal(true, isWeekday("Thursday"), "This should be true");
  });

  it("It should return True", function () {
    assert.equal(true, isWeekday("Friday"), "This should be true");
  });

});
