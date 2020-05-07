import _ from 'lodash';

export default (object1, object2) => {
  if (_.isEqual(object1, {}) && _.isEqual(object2, {})) {
    return '';
  }
  const allValues = [...Object.entries(object1), ...Object.entries(object2)]
    .sort()
    .map(([key, value]) => {
      if (_.has(object1, key) && _.has(object2, key) && object1[key] === object2[key]) {
        return `  ${key}: ${value}`;
      }
      if (_.has(object1, key) && object1[key] === value) {
        return `- ${key}: ${value}`;
      }
      return `+ ${key}: ${value}`;
    })
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return `{\n  ${allValues.join('\n  ')}\n}`;
};
