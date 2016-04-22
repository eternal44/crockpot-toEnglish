var placesMap = function() {
  return {
    onesMap : {
      '0' : '',
      '1' : 'one',
      '2' : 'two',
      '3' : 'three',
      '4' : 'four',
      '5' : 'five',
      '6' : 'six',
      '7' : 'seven',
      '8' : 'eight',
      '9' : 'nine',
    },
    teensMap : {
      '0' : '',
      '1' : 'eleven',
      '2' : 'twelve',
      '3' : 'thirteen',
      '4' : 'fourteen',
      '5' : 'fifteen',
      '6' : 'sixteen',
      '7' : 'seventeen',
      '8' : 'eighteen',
      '9' : 'nineteen',
    },
    tensMap : {
      '0' : '',
      '2' : 'twenty',
      '3' : 'thirty',
      '4' : 'forty',
      '5' : 'fifty',
      '8' : 'eighty'
    },
    subsetMap : {
      0 : '',
      1 : 'thousand',
      2 : 'million',
      3 : 'billion',
      4 : 'trillion',
      5 : 'quadrillion',
      6 : 'quintillion'
    }
  };
};

module.exports = placesMap;
