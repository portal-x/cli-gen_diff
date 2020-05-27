import fs from 'fs';
import gendiff from '../src/index';

const path = './__tests__/__fixtures__/';

test.each([
  ['json', 'tree'],
  ['json', 'plain'],
  ['json', 'json'],
  ['yaml', 'tree'],
  ['yaml', 'plain'],
  ['yaml', 'json'],
  ['ini', 'tree'],
  ['ini', 'plain'],
  ['ini', 'json'],
])(
  'compare %s on %s format',
  (extension, outputFormat) => {
    const before = `${path}before.${extension}`;
    const after = `${path}after.${extension}`;
    const expected = fs.readFileSync(`${path}${outputFormat}result.txt`, 'utf-8');
    expect(gendiff(before, after, outputFormat)).toEqual(expected);
  },
);
