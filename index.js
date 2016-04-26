var numbersToWords = require('./lib/placesMap');
var numbersToPlace = require('./lib/numbersToPlace');

function numberToEnglish (number) {
  var output;
  var place;
  var numInPlace;
  var numLeft;
  var restOfString;

  // for cases when number in numbersToWords object
  if(numbersToWords[number]){
    output = numbersToWords[number];
  }

  // transcribe 2 digit numbers
  else if(number < 100){
    numInPlace = Math.floor(number / 10);
    numLeft = number % 10;
    output = numbersToWords[numInPlace * 10] + '-' + numberToEnglish(numLeft);
  }else{

    // transcribe 3 digit numbers
    if(number < 1000){
      place = 100;

    // find largest place holder
    }else{
      place = 1000;
      while(place * 1000 <= number){
        place *= 1000;
      }
    }

    numInPlace = Math.floor(number/place);
    numLeft = number % place;

    // transcribe largest place (ex: '12' in '12,538,639')
    output = numberToEnglish(numInPlace) + ' ' + numbersToPlace[place];

    // transcribe '538,639'
    restOfString = numberToEnglish(numLeft);

    // spacing
    if(restOfString !== 'zero'){
      output += ' ' + restOfString;
    }
  }
  return output;
};

module.exports = numberToEnglish;
