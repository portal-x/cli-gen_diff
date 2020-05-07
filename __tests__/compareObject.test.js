import compareObject from '../src/compareObject.js';

const object1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const object2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('json comparison', () => {
  expect(compareObject({}, {})).toEqual('');
  expect(compareObject(object1, object2))
    .toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  + timeout: 20\n  - timeout: 50\n  + verbose: true\n}');
});
