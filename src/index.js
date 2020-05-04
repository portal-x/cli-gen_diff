import _ from 'lodash';

const genDiff = (beforeJson, afterJson) => {
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

export default genDiff;
