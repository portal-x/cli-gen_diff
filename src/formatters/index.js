import makeTree from './tree.js';
import makePlain from './plain.js';
import makeJson from './json.js';

const formats = {
  tree: makeTree,
  plain: makePlain,
  json: makeJson,
};

export default (format = 'tree') => formats[format];
