import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default (format = 'stylish') => {
  if (format === 'stylish') {
    return makeStylish;
  }
  if (format === 'plain') {
    return makePlain;
  }
  return 'unexpected output format';
};
