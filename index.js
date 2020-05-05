import _ from 'lodash';
import fs from 'fs';

const genDiff = (pathToFile1, pathToFile2) => {
  const beforeJson = fs.readFileSync(pathToFile1, (data) => data).toString();
  const afterJson = fs.readFileSync(pathToFile2, (data) => data).toString();
  const before = JSON.parse(beforeJson);
  const after = JSON.parse(afterJson);
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
// console.log(genDiff('../../forRemove/1.json', '../../forRemove/2.json'));

export default genDiff;
