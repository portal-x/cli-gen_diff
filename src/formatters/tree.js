import _ from 'lodash';

const parseObjectToString = (data) => {
  const [key, value] = Object.entries(data).flat();

  return `${key}: ${value}`;
};

const genSpaces = (depth) => ' '.repeat(depth + 2);

const getValue = (value, depth) => {
  const baseSpaces = ' '.repeat(6);
  return _.isObject(value)
    ? `{\n${genSpaces(depth)}${baseSpaces}${parseObjectToString(value)}\n${genSpaces(depth)}  }` : value;
};

const makeFormat = (list, depth) => list.reduce((acc, item) => {
  const fill = ' '.repeat(2);
  const oldValue = getValue(item.valueBefore, depth);
  const changedValue = getValue(item.valueAfter, depth);
  switch (item.type) {
    case 'changed':
      return `${acc}\n${genSpaces(depth)}- ${item.key}: ${oldValue}\n${genSpaces(depth)}+ ${item.key}: ${changedValue}`;
    case 'unchanged':
      return `${acc}\n${genSpaces(depth)}${fill}${item.key}: ${oldValue}`;
    case 'added':
      return `${acc}\n${genSpaces(depth)}+ ${item.key}: ${oldValue}`;
    case 'node':
      return `${acc}\n${genSpaces(depth)}${fill}${item.key}: {${makeFormat(item.children, depth + 4)}\n${genSpaces(depth)}  }`;
    case 'removed':
      return `${acc}\n${genSpaces(depth)}- ${item.key}: ${oldValue}`;
    default:
      throw new Error(`Error! '${item.type}' is invalid`);
  }
}, '');

export default (ast) => `{${makeFormat(ast, 0)}\n}`;
