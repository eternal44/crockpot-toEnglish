var expect = require('chai').expect;
var numberToEnglish = require('./../index');
var testParams = require('./testList')

describe('Decimal# ', function(){
  testParams.forEach(function(param){
    it('translate ' + param.integer + ' to english', function(){
      expect(numberToEnglish(param.integer)).to.equal(param.description);
    })
  })
});
