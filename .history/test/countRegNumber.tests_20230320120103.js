describe('Test my countRegNumber function' , function(){
    it('It should return number of strings' , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'), "This should not be true");

       
    });

    it('It should return number of strings' , function(){
        assert.equal(1, countRegNumber('CA 182736'), "This should not be true");

       
    });
});