# convert-number [![Build Status](https://travis-ci.org/eternal44/convert-number.svg?branch=master)](https://travis-ci.org/eternal44/convert-number)


> Convert numbers from one format to another.

## Install

```
$ npm install --save convert-number
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
var convertNumber = require('convert-number')

convertNumber(2450)
// two thousand four hundred fifty
```
## License
MIT
