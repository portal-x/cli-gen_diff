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
      if (item.type === 'changed') {
        return `${acc}\nProperty '${keyWithPath}' was changed from ${oldValue} to ${changedValue}`;
      }
      if (item.type === 'unchanged') {
        return `${acc}\nProperty '${keyWithPath}' was not changed`;
      }
      if (item.type === 'added') {
        return `${acc}\nProperty '${keyWithPath}' was added with value: ${oldValue}`;
      }
      if (item.type === 'node') {
        return `${acc}${format(item.children, `${keyWithPath}.`)}`;
      }

      return `${acc}\nProperty '${keyWithPath}' was deleted`;
    }, '');

    return result;
  };

  return format(ast, '').trim();
};

export default makePlain;
