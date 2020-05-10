import gendiff from '../index';

const beforeJson = './__fixtures__/before.json';
const afterJson = './__fixtures__/after.json';
const beforeYaml = './__fixtures__/before.yml';
const afterYaml = './__fixtures__/after.yaml';
const beforeIni = './__fixtures__/before.ini';
const afterIni = './__fixtures__/after.ini';
const txt = './__fixtures__/some.txt';

test('json comparison', () => {
  expect(gendiff('', '')).toEqual('');
  expect(gendiff(txt, afterJson)).toEqual('unsupported format');
  expect(gendiff(beforeJson, afterJson))
    .toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  + timeout: 20\n  - timeout: 50\n  + verbose: true\n}');

  expect(gendiff(beforeYaml, afterYaml))
    .toEqual('{\n  - follow: true\n    host: google.com\n  - proxy: 8.8.4.4\n  + timeout: 30\n  - timeout: 70\n  + verbose: false\n}');
  expect(gendiff(beforeIni, afterIni))
    .toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  + timeout: 20\n  - timeout: 50\n  + verbose: true\n}');
});
