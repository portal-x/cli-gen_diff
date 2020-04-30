#!/usr/bin/env node

import program from 'commander';
// import ver from '../../package.json';

program.description('Compares two configuration files and shows a difference.')
  .version('1.1.0')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action();

program.parse(process.argv);
