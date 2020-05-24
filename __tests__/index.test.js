import fs from 'fs';
import gendiff from '../index';

const path = './__tests__/__fixtures__/';
const json = `${path}after.json`;
const txt = `${path}result.txt`;

test('boundary cases', () => {
  expect(gendiff('', '')).toEqual('nothing to compare');
  expect(gendiff(txt, json)).toEqual('unsupported format');
});

test.each([
  ['before.json', 'after.json', 'tree', 'result.txt'],
  ['before.json', 'after.json', 'plain', 'plainResult.txt'],
  ['before.json', 'after.json', 'json', 'jsonResult.txt'],
  ['before.yml', 'after.yaml', 'tree', 'ymlResult.txt'],
  ['before.ini', 'after.ini', 'tree', 'iniResult.txt'],
])(
  'compare %s and %s on %s format',
  (pathToBefore, pathToAfter, format, pathExpect) => {
    const before = `${path}${pathToBefore}`;
    const after = `${path}${pathToAfter}`;
    const expected = fs.readFileSync(`${path}${pathExpect}`, 'utf-8');
    expect(gendiff(before, after, format)).toEqual(expected);
  },
);
