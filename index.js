import _ from 'lodash';
import getObjectFromJson from './src/utils.js';
import compareObjects from './src/compareObject.js';

const genDiff = (pathToFile1, pathToFile2) => {
  const before = getObjectFromJson(pathToFile1);
  const after = getObjectFromJson(pathToFile2);
  return compareObjects(before, after);
};

export default genDiff;
