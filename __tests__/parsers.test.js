import getAndParseData from '../src/parsers.js';

const resultJson = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: { key: 'value' },
  },
  group1: { baz: 'bas', foo: 'bar', nest: { key: 'value' } },
  group2: { abc: 12345 },
};

test('read JSON', () => {
  expect(getAndParseData('')).toEqual({});
  expect(getAndParseData('./__fixtures__/deepBefore.json')).toEqual(resultJson);
  expect(getAndParseData('./__fixtures__/after.yaml')).toEqual({ timeout: 30, verbose: false, host: 'google.com' });
  expect(getAndParseData('./__fixtures__/before.yml')).toEqual({
    host: 'google.com',
    timeout: 70,
    proxy: '8.8.4.4',
    follow: true,
  });
  expect(getAndParseData('./__fixtures__/after.ini')).toEqual({ timeout: 20, verbose: true, host: 'hexlet.io' });
});
