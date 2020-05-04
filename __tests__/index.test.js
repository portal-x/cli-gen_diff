import gendiff from '../src/index';

const beforeJson = '{"host": "hexlet.io", "timeout": 50, "proxy": "123.234.53.22", "follow": false}';
const afterJson = '{"timeout": 20, "verbose": true, "host": "hexlet.io"}';

test('json comparison', () => {
  expect(gendiff(beforeJson, afterJson))
    .toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  + timeout: 20\n  - timeout: 50\n  + verbose: true\n}');
});
