var maps = require('./helpers/placesMap')();
var arrayifyNumber = require('./helpers/arrayifyNumber');
var transcribe = require('./helpers/transcribe')();

function numberToEnglish (number) {
  var placeArray = arrayifyNumber(number);

  // concat the transcribed number to results string
  var transcribedResult = '';
  var subsetCount = placeArray.length;
  var transcribedSegment;

  for(var x = 0; x < placeArray.length; x++){
    subsetCount--;
    transcribedSegment = transcribe(placeArray[x]);
    if(transcribedSegment.length !== 0){
      transcribedResult += transcribedSegment + ' ' + maps.subsetMap[subsetCount] + ' ';
    }
  }

  if(number == 0) return 'zero'; 
  if(number == 10) return 'ten'; 

  return transcribedResult.trim();
}

module.exports = numberToEnglish;
