# PROJECT 'Generate difference'

[![Build Status](https://travis-ci.org/portal-x/backend-project-lvl2.svg?branch=master)](https://travis-ci.org/portal-x/backend-project-lvl2)

[![Maintainability](https://api.codeclimate.com/v1/badges/413a2f24806cbc5270d3/maintainability)](https://codeclimate.com/github/portal-x/backend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/413a2f24806cbc5270d3/test_coverage)](https://codeclimate.com/github/portal-x/backend-project-lvl2/test_coverage)

<script id="asciicast-ONHRefutePFNoiG4COiVs9Dyx" src="https://asciinema.org/a/ONHRxftuhPFNoiG4COiVs9Dyx.js" async></script>

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
