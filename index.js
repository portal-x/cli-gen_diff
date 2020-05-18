import getAndParseData from './src/parsers.js';
import compareObjects from './src/compareObject.js';
import stylish from './src/formatters/stylish.js';
import plain from './src/formatters/plain.js';

const genDiff = (pathToFile1, pathToFile2, format = 'stylish') => {
  const before = getAndParseData(pathToFile1);
  const after = getAndParseData(pathToFile2);
  if (before === 'unsupported format' || after === 'unsupported format') {
    return 'unsupported format';
  }
  const diffList = compareObjects(before, after);
  if (format === 'stylish') {
    return stylish(diffList);
  }
  if (format === 'plain') {
    return plain(diffList);
  }
  return 'unexpected output format';
};

export default genDiff;
