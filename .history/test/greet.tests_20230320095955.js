// console.log(greet('Bjorn'))

describe('test my greet function' , function(){
    it('It should return Hello Bjorn' , function(){
        assert.equal("Hello Bjorn", greet("Bjorn"));

       
    });

});