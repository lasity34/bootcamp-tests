describe("Test my yearsAgo function", function () {
  it("It should return the difference between currentYear minus previousYear", function () {
    assert.equal(34, yearsAgo(1989), "This should be true");
  });

  it("It should return the difference between currentYear minus previousYear", function () {
    assert.equal(19, yearsAgo(2004), "This should be true");
  });
});
