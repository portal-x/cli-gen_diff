import _ from 'lodash';

const normalizeValue = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
};

export default (ast) => {
  const format = (list, path) => {
    const result = list.map((item) => {
      const keyWithPath = `${path}${item.key}`;
      const oldValue = normalizeValue(item.valueBefore);
      const changedValue = normalizeValue(item.valueAfter);
      switch (item.type) {
        case 'changed':
          return `Property '${keyWithPath}' was changed from ${oldValue} to ${changedValue}`;
        case 'unchanged':
          return `Property '${keyWithPath}' was not changed`;
        case 'added':
          return `Property '${keyWithPath}' was added with value: ${oldValue}`;
        case 'node':
          return `${format(item.children, `${keyWithPath}.`)}`;
        case 'removed':
          return `Property '${keyWithPath}' was deleted`;
        default:
          throw new Error(`Error! '${item.type}' is invalid`);
      }
    });

    return result.join('\n');
  };

  return format(ast, '');
};
