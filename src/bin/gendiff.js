#!/usr/bin/env node

import program from 'commander';
// import ver from '../../package.json';

program.description('Compares two configuration files and shows a difference.');

program.version('1.0.0');

program.parse(process.argv);
