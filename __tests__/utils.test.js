import getObjectFromJson from '../src/utils.js';

test('read JSON', () => {
  expect(getObjectFromJson('./__tests__/after.json')).toEqual({ timeout: 20, verbose: true, host: 'hexlet.io' });
  expect(getObjectFromJson('')).toEqual('');
});
