describe("Test my yearsAgo function", function () {
  it("It should return number of years", function () {
    assert.equal((new Date().getFullYear() - 1989), yearsAgo(1989), "This should be true");
  });

  it("It should return True", function () {
    assert.equal((new Date().getFullYear() - 1989), yearsAgo(2004), "This should be true");
  });
});
