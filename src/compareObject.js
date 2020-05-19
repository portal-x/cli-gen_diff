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
      acc.push({ key, type: 'removed', value: objectBefore[key] });
      return acc;
    }
    if (!_.has(objectBefore, key) && _.has(objectAfter, key)) {
      acc.push({ key, type: 'added', value: objectAfter[key] });
      return acc;
    }
    if (_.isObject(objectBefore[key]) && _.isObject(objectAfter[key])) {
      acc.push({
        key,
        type: 'processed',
        descendants: diff(objectBefore[key], objectAfter[key]),
      });
      return acc;
    }
    if (objectBefore[key] === objectAfter[key]) {
      acc.push({ key, type: 'unchanged', value: objectAfter[key] });
      return acc;
    }
    acc.push({
      key, type: 'changed', value: objectBefore[key], newValue: objectAfter[key],
    });
    return acc;
  }, []);
  return tree;
};

export default diff;
