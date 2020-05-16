import getAndParseData from './src/parsers.js';
import compareObjects from './src/compareObject.js';
import stylish from './src/stylish.js';

const genDiff = (pathToFile1, pathToFile2, format = 'inString') => {
  const before = getAndParseData(pathToFile1);
  const after = getAndParseData(pathToFile2);
  if (before === 'unsupported format' || after === 'unsupported format') {
    return 'unsupported format';
  }
  const diffList = compareObjects(before, after);
  if (format === 'inString') {
    return stylish(diffList);
  }
  return 'unexpected format';
};

export default genDiff;
