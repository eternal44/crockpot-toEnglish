# crockpot-toEnglish [![Build Status](https://travis-ci.org/eternal44/crockpot-toEnglish.svg?branch=master)](https://travis-ci.org/eternal44/crockpot-toEnglish)

> Converts decimal integers to English.  See the main crockpot library for a full set of conversions.

## Install

```
$ npm install --save crockpot-toEnglish
```

## Development
To run tests follow the following instructions:

```
$ npm install -g gulp
$ npm install -g mocha
```

To run tests on file changes:
```
$ gulp test
```

Alternatively you can run individual tests:
```
$ mocha specs/**
```

## Usage

```js
var decimalToEnglish = require('crockpot-toEnglish')

decimalToEnglish(2450)
// two thousand four hundred fifty
```
## License
MIT
