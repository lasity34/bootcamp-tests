describe('Test my countRegNumber function' , function(){
    it('It should return number of strings' , function(){
        assert.equal("Hello, Bjorn", greet("Bjorn"), "This should not be true");

       
    });

    it('It should return Hello John' , function(){
        assert.equal("Hello, John", greet("John"), "This should not be true");

       
    });
});