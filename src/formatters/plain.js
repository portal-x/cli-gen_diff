import _ from 'lodash';

const normalizeValue = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
};

const makePlain = (ast) => {
  if (ast.length === 0) return '';
  const format = (list, path) => {
    if (list.length === 0) return '';
    const result = list.reduce((acc, item) => {
      const oldValue = normalizeValue(item.value);
      const changedValue = normalizeValue(item.newValue);
      if (item.type === 'changed') {
        return `${acc}\nProperty '${path}${item.key}' was changed from ${oldValue} to ${changedValue}`;
      }
      if (item.type === 'unchanged') {
        return `${acc}\nProperty '${path}${item.key}' was not changed`;
      }
      if (item.type === 'added') {
        return `${acc}\nProperty '${path}${item.key}' was added with value: ${oldValue}`;
      }
      if (item.type === 'node') {
        return `${acc}${format(item.children, `${path}${item.key}.`)}`;
      }

      return `${acc}\nProperty '${path}${item.key}' was deleted`;
    }, '');

    return result;
  };

  return format(ast, '').trim();
};

export default makePlain;
