var maps = require('./placesMap.js')();

var transcribe = function(){
  return function(subset){
    var numLength = subset.length;

    var transcribeOneDigit = function(subset){
      return maps.onesMap[subset[0]];
    };

    var transcribeTwoDigits = function(subset){
      var tensPlace = subset[0];
      var onesPlace = subset[1];
      var tensDash = '';

      if(onesPlace !== '0') tensDash = '-';

      if(tensPlace === '1'){
        return maps.teensMap[onesPlace];
      } else if(tensPlace > 5 && tensPlace != 8) {
        return maps.onesMap[tensPlace] + 'ty' + tensDash + maps.onesMap[onesPlace];
      } else {
        if(tensPlace === '0'){
          return maps.onesMap[onesPlace];
        } else if(onesPlace === '0'){
          return maps.tensMap[tensPlace];
        } else {
          return maps.tensMap[tensPlace] + '-' + maps.onesMap[onesPlace];
        }
      }
    };

    var transcribeTreeDigits = function(subset){
      var hundredsPlace = subset[0];
      var tensPlace = subset[1];

      var tensHundredsPlace;
      hundredsPlace === '0' ? tensHundredsPlace = '' : tensHundredsPlace = ' ';

      var onesTensPlace;
      tensPlace === '0' ? onesTensPlace = '' : onesTensPlace = ' ';

      // if the hundreds place is 0 we don't want to include it's suffix
      return hundredsPlace === '0' ? '' : maps.onesMap[hundredsPlace] + ' hundred' + tensHundredsPlace;
    };

    // transcribing
    if(numLength === 1) return transcribeOneDigit(subset);
    if(numLength === 2) return transcribeTwoDigits(subset);
    if(numLength === 3){
      var arrayMachine = [];
      var slicedArr = subset.slice(1);

      return (transcribeTreeDigits(subset) + transcribeTwoDigits(slicedArr));
    }
  };
};

module.exports = transcribe;
