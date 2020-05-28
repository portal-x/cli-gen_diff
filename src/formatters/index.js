import makeTree from './tree.js';
import makePlain from './plain.js';
import makeJson from './json.js';

export default (format = 'tree') => {
  switch (format) {
    case 'tree':
      return makeTree;
    case 'plain':
      return makePlain;
    case 'json':
      return makeJson;
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};
