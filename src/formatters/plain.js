import _ from 'lodash';

const makePlain = (data) => {
  if (data.length === 0) return '';
  const format = (list, path) => {
    if (list.length === 0) return '';
    const result = list.reduce((acc, item) => {
      let v;
      let newV;
      if (_.isObject(item.value)) {
        v = '[complex value]';
      } else {
        v = _.isString(item.value) ? `'${item.value}'` : item.value;
      }
      if (_.isObject(item.newValue)) {
        newV = '[complex value]';
      } else {
        newV = _.isString(item.newValue) ? `'${item.newValue}'` : item.newValue;
      }
      if (item.type === 'changed') {
        return `${acc}\nProperty '${path}${item.key}' was changed from ${v} to ${newV}`;
      }
      if (item.type === 'unchanged') {
        return `${acc}\nProperty '${path}${item.key}' was not changed`;
      }
      if (item.type === 'added') {
        return `${acc}\nProperty '${path}${item.key}' was added with value: ${v}`;
      }
      if (item.type === 'node') {
        return `${acc}${format(item.children, `${path}${item.key}.`)}`;
      }

      return `${acc}\nProperty '${path}${item.key}' was deleted`;
    }, '');

    return result;
  };

  return format(data, '').trim();
};

export default makePlain;
