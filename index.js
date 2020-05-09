import getAndParseData from './src/parsers.js';
import compareObjects from './src/compareObject.js';

const genDiff = (pathToFile1, pathToFile2) => {
  const before = getAndParseData(pathToFile1);
  const after = getAndParseData(pathToFile2);
  if (before === 'unsupported format' || after === 'unsupported format') {
    return 'unsupported format';
  }

  return compareObjects(before, after);
};

export default genDiff;
