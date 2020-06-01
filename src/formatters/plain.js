import _ from 'lodash';

const normalizeValue = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
};

const makePlain = (ast) => {
  const format = (list, path) => {
    const result = list.reduce((acc, item) => {
      const keyWithPath = `${path}${item.key}`;
      const oldValue = normalizeValue(item.valueBefore);
      const changedValue = normalizeValue(item.valueAfter);
      switch (item.type) {
        case 'changed':
          return `${acc}\nProperty '${keyWithPath}' was changed from ${oldValue} to ${changedValue}`;
        case 'unchanged':
          return `${acc}\nProperty '${keyWithPath}' was not changed`;
        case 'added':
          return `${acc}\nProperty '${keyWithPath}' was added with value: ${oldValue}`;
        case 'node':
          return `${acc}${format(item.children, `${keyWithPath}.`)}`;
        case 'removed':
          return `${acc}\nProperty '${keyWithPath}' was deleted`;
        default:
          throw new Error(`Error! '${item.type}' is invalid`);
      }
    }, '');

    return result;
  };

  return format(ast, '').trim();
};

export default makePlain;
