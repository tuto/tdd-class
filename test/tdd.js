
const chai = require('chai');
const expect = chai.expect;
const tdd = require('../src/tdd')
describe('tdd', ()=>{
    context('palindromic', ()=>{
        it('should be true if word is palindromic', (done)=>{
            expect(tdd.isPalindromic("ana")).to.be.true;
            done()
        })
    })
})
