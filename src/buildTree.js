import _ from 'lodash';

const buildTree = (objectBefore, objectAfter) => {
  const keys = _.union(
    Object.keys(objectBefore), Object.keys(objectAfter),
  ).sort();

  const tree = keys.map((key) => {
    if (_.has(objectBefore, key) && !_.has(objectAfter, key)) {
      return { key, type: 'removed', value: objectBefore[key] };
    }
    if (!_.has(objectBefore, key) && _.has(objectAfter, key)) {
      return { key, type: 'added', value: objectAfter[key] };
    }
    if (_.isObject(objectBefore[key]) && _.isObject(objectAfter[key])) {
      return {
        key,
        type: 'node',
        children: buildTree(objectBefore[key], objectAfter[key]),
      };
    }
    if (objectBefore[key] === objectAfter[key]) {
      return { key, type: 'unchanged', value: objectAfter[key] };
    }
    return {
      key, type: 'changed', value: objectBefore[key], newValue: objectAfter[key],
    };
  });

  return tree;
};

export default buildTree;
