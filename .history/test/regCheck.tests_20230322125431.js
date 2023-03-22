describe("Test my regCheck function", function () {
  it("It should return false, because registration should end with EC(Eastern Cape) but ends with GP(Gauteng)", function () {
    assert.equal(
      false,
      regCheck("DC 55 YU GP", "EC"),
      "This should not be true"
    );
  });

  it("It should return True because registration ends with GP(Gauteng)", function () {
    assert.equal(true, regCheck("DC 55 YU GP", "GP"), "This should be true");
  });

  it("It should return false, because registration ends with EC(Eastern Cape) but ends with GP(Gauteng)", function () {
    assert.equal(
      false,
      regCheck("FET 321 EC", "GP"),
      "This should not be true"
    );
  });

  it("It should return True because registration endswith EC(Eastern Cape)", function () {
    assert.equal(true, regCheck("FET 321 EC", "EC"), "This should be true");
  });
});
