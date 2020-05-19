import makeTree from './tree.js';
import makePlain from './plain.js';
import makeJson from './json.js';

export default (format = 'tree') => {
  if (format === 'tree') {
    return makeTree;
  }
  if (format === 'plain') {
    return makePlain;
  }
  if (format === 'json') {
    return makeJson;
  }

  return 'unexpected output format';
};
