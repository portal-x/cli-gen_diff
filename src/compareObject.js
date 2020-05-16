import _ from 'lodash';

const diff = (objectBefore, objectAfter) => {
  if (_.isEqual(objectBefore, {}) && _.isEqual(objectAfter, {})) {
    return [];
  }
  const keys = _.union(
    Object.keys(objectBefore), Object.keys(objectAfter),
  ).sort();
  const tree = keys.reduce((acc, key) => {
    if (_.has(objectBefore, key) && !_.has(objectAfter, key)) {
      acc.push({ key, value: objectBefore[key], type: 'removed' });
      return acc;
    }
    if (!_.has(objectBefore, key) && _.has(objectAfter, key)) {
      acc.push({ key, value: objectAfter[key], type: 'added' });
      return acc;
    }
    if (_.isObject(objectBefore[key]) && _.isObject(objectAfter[key])) {
      acc.push({
        key,
        descendants: diff(objectBefore[key], objectAfter[key]),
        type: 'processed',
      });
      return acc;
    }
    if (objectBefore[key] === objectAfter[key]) {
      acc.push({ key, value: objectAfter[key], type: 'unchanged' });
      return acc;
    }
    acc.push({
      key, value: objectBefore[key], newValue: objectAfter[key], type: 'changed',
    });
    return acc;
  }, []);
  return tree;
};

export default diff;
