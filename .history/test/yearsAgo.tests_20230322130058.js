describe("Test my yearsAgo function", function () {
  it("It should return the difference between currentYear minus previousYear", function () {
    assert.equal((new Date().getFullYear() - 1989), yearsAgo(1989), "This should be true");
  });

  it("It should return the difference between currentYear minus previousYear", function () {
    assert.equal((new Date().getFullYear() - 2004), yearsAgo(2004), "This should be true");
  });
});
