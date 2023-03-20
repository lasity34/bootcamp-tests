describe('Test my countRegNumber function' , function(){
    it('It should return number 3' , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'), "This should be true");

       
    });

    it('It should return number 1' , function(){
        assert.equal(1, countRegNumber('CA 182736'), "This should be true");

       
    });
});