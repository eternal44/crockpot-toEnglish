var arrayifyNumber = function(number){
  // break number into subsets of 3 digits
  var splitNum = number.toString().split('');
  var placeArray = [];

  while(splitNum.length > 3){
    placeArray.unshift(splitNum.splice(splitNum.length-3));
  }

  placeArray.unshift(splitNum);
  return placeArray;
};

module.exports = arrayifyNumber;
