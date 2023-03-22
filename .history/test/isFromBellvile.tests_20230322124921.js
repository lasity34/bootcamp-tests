describe('Test my isFromBellville function' , function(){
    it('It should return False because registration starts with CA(Cape Town) and not CY(Bellville) ' , function(){
        assert.equal(false, isFromBellville("CA 123"), "This should not be true");

       
    });

    it('It should return True because registration is CY(Bellvile)' , function(){
        assert.equal(true, isFromBellville("CY 123"), "This should be true");

       
    });
});