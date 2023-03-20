describe("Test my isFromBellville function", function () {
  it("It should return False", function () {
    assert.equal(false, isFromBellville("CA 123"), "This should not be true");
  });

  it("It should return True", function () {
    assert.equal(true, isFromBellville("CY 123"), "This should be true");
  });
});
