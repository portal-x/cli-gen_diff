# PROJECT 'Generate difference'

gendiff compares two configuration files and shows difference.
The package can be used as CLI utility or Node.js package that can be used in your project.

gendiff supports file extensions such as json, yaml, yml, ini. It can output the result in 'stylish' and 'plain' formats. You can select it by flag -f (--format) By default output format 'stylish'.

For example:

```bash
$ gendiff --format plain project/configurations/before.json project/configurations/after.json
```

or

```bash
$ gendiff project/configurations/before.ini project/configurations/after.ini
```

[![Build Status](https://travis-ci.org/portal-x/backend-project-lvl2.svg?branch=master)](https://travis-ci.org/portal-x/backend-project-lvl2)
[![Maintainability](https://api.codeclimate.com/v1/badges/413a2f24806cbc5270d3/maintainability)](https://codeclimate.com/github/portal-x/backend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/413a2f24806cbc5270d3/test_coverage)](https://codeclimate.com/github/portal-x/backend-project-lvl2/test_coverage)

[![asciicast](https://asciinema.org/a/wqiAl0MuWK2Ntixk9XQKkNS5D.svg)](https://asciinema.org/a/wqiAl0MuWK2Ntixk9XQKkNS5D)
[![asciicast](https://asciinema.org/a/ONHRxftuhPFNoiG4COiVs9Dyx.svg)](https://asciinema.org/a/ONHRxftuhPFNoiG4COiVs9Dyx)

[![asciicast](https://asciinema.org/a/MhrL7IBgGzgaN9fSH9QVtKntf.svg)](https://asciinema.org/a/MhrL7IBgGzgaN9fSH9QVtKntf)

## Setup

```sh
$ git clone https://github.com/portal-x/backend-project-lvl2.git
$ make install
$ npm link
```

## gendiff module for node.js

```sh
$ npm install gendiff
```

## API

gendiff supports file extensions such as json, yaml, yml, ini. It can output the result in 'stylish' and 'plain' formats. By default output format 'stylish'.

For example:

```sh
import gendiff from 'gendiff'

const diff = gendiff('./forExample/before.json', '/user/documents/after.json', 'plain');

console.log(diff);
```
