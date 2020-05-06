import _ from 'lodash';
import getObjectFromJson from './src/utils.js';

const genDiff = (pathToFile1, pathToFile2) => {
  const before = getObjectFromJson(pathToFile1);
  const after = getObjectFromJson(pathToFile2);
  const allValues = [...Object.entries(before), ...Object.entries(after)]
    .sort()
    .map(([key, value]) => {
      if (_.has(before, key) && _.has(after, key) && before[key] === after[key]) {
        return `  ${key}: ${value}`;
      }
      if (_.has(before, key) && before[key] === value) {
        return `- ${key}: ${value}`;
      }
      return `+ ${key}: ${value}`;
    })
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return `{\n  ${allValues.join('\n  ')}\n}`;
};

export default genDiff;
