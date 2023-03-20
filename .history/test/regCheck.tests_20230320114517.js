describe("Test if Reg num endsWith L, GP, EC, MP", function () {
  it("It should return False", function () {
    assert.equal(
      false,
      regCheck("DC 55 YU GP", "EC"),
      "This should not be true"
    );
  });

  it("It should return True", function () {
    assert.equal(true, regCheck("DC 55 YU GP", "GP"), "This should be true");
  });

  it("It should return False", function () {
    assert.equal(
      false,
      regCheck("FET 321 EC", "GP"),
      "This should not be true"
    );
  });

  it("It should return True", function () {
    assert.equal(true, regCheck("FET 321 EC", "EC"), "This should be true");
  });
});
