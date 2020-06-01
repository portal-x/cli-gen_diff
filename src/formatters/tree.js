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
  if (item.type === 'changed') {
    return `${acc}\n${genSpaces(depth)}- ${item.key}: ${oldValue}\n${genSpaces(depth)}+ ${item.key}: ${changedValue}`;
  }
  if (item.type === 'unchanged') {
    return `${acc}\n${genSpaces(depth)}${fill}${item.key}: ${oldValue}`;
  }
  if (item.type === 'added') {
    return `${acc}\n${genSpaces(depth)}+ ${item.key}: ${oldValue}`;
  }
  if (item.type === 'node') {
    return `${acc}\n${genSpaces(depth)}${fill}${item.key}: {${makeFormat(item.children, depth + 4)}\n${genSpaces(depth)}  }`;
  }

  return `${acc}\n${genSpaces(depth)}- ${item.key}: ${oldValue}`;
}, '');

export default (ast) => `{${makeFormat(ast, 0)}\n}`;
