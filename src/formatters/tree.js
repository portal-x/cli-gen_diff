import _ from 'lodash';

const parseObjectToString = (data) => {
  const [key, value] = Object.entries(data).flat();

  return `${key}: ${value}`;
};

const makeStylish = (data) => {
  if (data.length === 0) return '';
  const makeFormat = (list, depth) => list.reduce((acc, item) => {
    const spaces = ' '.repeat(depth + 2);
    const v = _.isObject(item.value) ? `{\n${spaces}      ${parseObjectToString(item.value)}\n${spaces}  }` : item.value;
    const newV = _.isObject(item.newValue) ? `{\n${spaces}      ${parseObjectToString(item.newValue)}\n${spaces}  }` : item.newValue;
    if (item.type === 'changed') {
      return `${acc}\n${spaces}- ${item.key}: ${v}\n${spaces}+ ${item.key}: ${newV}`;
    }
    if (item.type === 'unchanged') {
      return `${acc}\n${spaces}  ${item.key}: ${v}`;
    }
    if (item.type === 'added') {
      return `${acc}\n${spaces}+ ${item.key}: ${v}`;
    }
    if (item.type === 'node') {
      return `${acc}\n${spaces}  ${item.key}: {${makeFormat(item.children, depth + 4)}\n${spaces}  }`;
    }

    return `${acc}\n${spaces}- ${item.key}: ${v}`;
  }, '');
  return `{${makeFormat(data, 0)}\n}`;
};


export default makeStylish;
