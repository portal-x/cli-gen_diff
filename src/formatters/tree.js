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

const makeFormat = (list, depth) => list.map((item) => {
  const fill = ' '.repeat(2);
  const oldValue = getValue(item.valueBefore, depth);
  const changedValue = getValue(item.valueAfter, depth);
  switch (item.type) {
    case 'changed':
      return `${genSpaces(depth)}- ${item.key}: ${oldValue}\n${genSpaces(depth)}+ ${item.key}: ${changedValue}`;
    case 'unchanged':
      return `${genSpaces(depth)}${fill}${item.key}: ${oldValue}`;
    case 'added':
      return `${genSpaces(depth)}+ ${item.key}: ${oldValue}`;
    case 'node':
      return `${genSpaces(depth)}${fill}${item.key}: {\n${makeFormat(item.children, depth + 4)}\n${genSpaces(depth)}  }`;
    case 'removed':
      return `${genSpaces(depth)}- ${item.key}: ${oldValue}`;
    default:
      throw new Error(`Error! '${item.type}' is invalid`);
  }
}).join('\n');

export default (ast) => `{\n${makeFormat(ast, 0)}\n}`;
