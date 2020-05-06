import gendiff from '../index';

const beforePath = './__fixtures__/before.json';
const afterPath = './__fixtures__/after.json';

test('json comparison', () => {
  expect(gendiff(beforePath, afterPath))
    .toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  + timeout: 20\n  - timeout: 50\n  + verbose: true\n}');
});
