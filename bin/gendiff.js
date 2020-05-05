#!/usr/bin/env node

import program from 'commander';
import fs from 'fs';
import genDiff from '../index.js';

const pac = fs.readFileSync('./package.json', (data) => data).toString();
const pack = JSON.parse(pac);


program.description(pack.description)
  .version(pack.version)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)));


program.parse(process.argv);
