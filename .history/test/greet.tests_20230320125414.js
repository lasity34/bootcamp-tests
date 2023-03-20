// console.log(greet('Bjorn'))

describe('Test my greet function' , function(){
    it('It should return Hello Bjorn' , function(){
        assert.equal("Hello, Bjorn", greet("Bjorn"), "This should be true");

       
    });

    it('It should return Hello John' , function(){
        assert.equal("Hello, John", greet("John"), "This should be true");

       
    });
});