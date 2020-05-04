#!/usr/bin/env node

import program from 'commander';
import { createRequire } from 'module';
import genDiff from '../index';

const require = createRequire(import.meta.url);

const pack = require('../../package.json');

program.description(pack.description)
  .version(pack.version)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action(genDiff());

program.parse(process.argv);
