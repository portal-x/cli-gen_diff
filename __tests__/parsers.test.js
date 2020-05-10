import getAndParseData from '../src/parsers.js';

test('read JSON', () => {
  expect(getAndParseData('')).toEqual({});
  expect(getAndParseData('./__fixtures__/after.json')).toEqual({ timeout: 20, verbose: true, host: 'hexlet.io' });
  expect(getAndParseData('./__fixtures__/after.yaml')).toEqual({ timeout: 30, verbose: false, host: 'google.com' });
  expect(getAndParseData('./__fixtures__/before.yml')).toEqual({
    host: 'google.com',
    timeout: 70,
    proxy: '8.8.4.4',
    follow: true,
  });
  expect(getAndParseData('./__fixtures__/after.ini')).toEqual({ timeout: 20, verbose: true, host: 'hexlet.io' });
});
