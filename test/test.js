const assert = require('assert')
const { validate } = require('../app/operation')
const { add, minus, multiply , divide } = require('../app/calc')

describe('test add', () =>{
  it('should test addition',() => {
    assert.equal(add(1,2), 3);
  });
});

describe('test substraction', () =>{
  it('should test substraction',() => {
    assert.equal(minus(2,1), 1);
  });
});

describe('test multiply', () =>{
  it('should test multiply',() => {
    assert.equal(multiply(2,1), 2);
  });
});
describe('test divide', () =>{
  it('should test divsion',() => {
    assert.equal(divide(1,2), 0.5);
  });
});
describe('validate inputs',() =>{
  it('should when string is entered as input', () =>{
    assert.equal(validate('jose',5), false)
  });
  it('should check when both inputs are string', ()=>{
    assert.equal(validate('jose', 'jose'), false)
  });
  it("should check when both input are correct", ()=>{
    assert.equal(validate(5,5), true)
  });
})
