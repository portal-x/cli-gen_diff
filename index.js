import fs from 'fs';
import path from 'path';

import parseData from './src/parsers.js';
import compareObjects from './src/compareObject.js';
import selectFormat from './src/formatters/index.js';

const genDiff = (pathToFile1, pathToFile2, format) => {
  if (pathToFile1 === '' || pathToFile2 === '') {
    return 'nothing to compare';
  }
  const dataBefore = fs.readFileSync(pathToFile1, 'utf-8');
  const extensionBefore = path.extname(pathToFile1);
  const dataAfter = fs.readFileSync(pathToFile2, 'utf-8');
  const extensionAfter = path.extname(pathToFile2);
  const before = parseData(dataBefore, extensionBefore);
  const after = parseData(dataAfter, extensionAfter);
  if (before === 'unsupported format' || after === 'unsupported format') {
    return 'unsupported format';
  }
  const diffList = compareObjects(before, after);

  return selectFormat(format)(diffList);
};

export default genDiff;
