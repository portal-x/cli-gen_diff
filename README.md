# PROJECT 'Generate difference'

gendiff compares two files and shows difference.
The package can be used as CLI utility or Node.js package that can be used in your project.

gendiff supports file extensions such as json, yaml, yml.

[![Build Status](https://travis-ci.org/portal-x/backend-project-lvl2.svg?branch=master)](https://travis-ci.org/portal-x/backend-project-lvl2)

[![Maintainability](https://api.codeclimate.com/v1/badges/413a2f24806cbc5270d3/maintainability)](https://codeclimate.com/github/portal-x/backend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/413a2f24806cbc5270d3/test_coverage)](https://codeclimate.com/github/portal-x/backend-project-lvl2/test_coverage)

[![asciicast](https://asciinema.org/a/ONHRxftuhPFNoiG4COiVs9Dyx.svg)](https://asciinema.org/a/ONHRxftuhPFNoiG4COiVs9Dyx)

## Setup

```sh
$ make install
```

## gendiff module for node.js

```sh
$ npm install gendiff
```

## API

gendiff supports file extensions such as json, yaml, yml.
For example:

```sh
import gendiff from 'gendiff'

const diff = gendiff('./forExample/before.json', '/user/documents/after.json');

console.log(diff);
```
