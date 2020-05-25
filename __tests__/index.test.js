import fs from 'fs';
import gendiff from '../src/index';

const path = './__tests__/__fixtures__/';
const json = `${path}after.json`;
const txt = `${path}treejson.txt`;

test('boundary cases', () => {
  expect(gendiff(txt, json)).toEqual('unsupported format');
});

test.each([
  ['json', 'tree'],
  ['json', 'plain'],
  ['json', 'json'],
  ['yaml', 'tree'],
  ['ini', 'tree'],
])(
  'compare %s on %s format',
  (extension, outputFormat) => {
    const before = `${path}before.${extension}`;
    const after = `${path}after.${extension}`;
    const expected = fs.readFileSync(`${path}${outputFormat}${extension}.txt`, 'utf-8');
    expect(gendiff(before, after, outputFormat)).toEqual(expected);
  },
);
