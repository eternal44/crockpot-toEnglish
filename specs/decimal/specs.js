var expect = require('chai').expect;
var numberToEnglish = require('./../../src/decimal/conversion');
var testParams = require('./testList')

describe('Decimal# ', function(){
  testParams.forEach(function(param){
    it('translate ' + param.integer + ' to english', function(){
      expect(numberToEnglish(param.integer)).to.equal(param.description);
    })
  })
});
