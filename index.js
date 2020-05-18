import getAndParseData from './src/parsers.js';
import compareObjects from './src/compareObject.js';
import selectFormat from './src/formatters/index.js';

const genDiff = (pathToFile1, pathToFile2, format) => {
  const before = getAndParseData(pathToFile1);
  const after = getAndParseData(pathToFile2);
  if (before === 'unsupported format' || after === 'unsupported format') {
    return 'unsupported format';
  }
  const diffList = compareObjects(before, after);

  return selectFormat(format)(diffList);
};

export default genDiff;
