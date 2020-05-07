import getObjectFromJson from '../src/utils.js';

test('read JSON', () => {
  expect(getObjectFromJson('')).toEqual({});
  expect(getObjectFromJson('./__fixtures__/after.json')).toEqual({ timeout: 20, verbose: true, host: 'hexlet.io' });
});
