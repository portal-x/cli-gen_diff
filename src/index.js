import fs from 'fs';
import path from 'path';

import parseData from './parsers.js';
import buildTree from './buildTree.js';
import selectFormat from './formatters/index.js';

const getData = (pathToFile) => {
  const data = fs.readFileSync(pathToFile, 'utf-8');
  const extension = path.extname(pathToFile);
  const parsedData = parseData(data, extension);
  return parsedData;
};

const genDiff = (pathToFile1, pathToFile2, format) => {
  const before = getData(pathToFile1);
  const after = getData(pathToFile2);
  const diffList = buildTree(before, after);

  return selectFormat(format)(diffList);
};

export default genDiff;
