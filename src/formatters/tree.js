import _ from 'lodash';

const parseObjectToString = (data) => {
  const [key, value] = Object.entries(data).flat();

  return `${key}: ${value}`;
};

const makeFormat = (list, depth) => list.reduce((acc, item) => {
  const spaces = ' '.repeat(depth + 2);
  const baseSpaces = ' '.repeat(6);
  const ifNotChanged = ' '.repeat(2);
  const oldValue = _.isObject(item.valueBefore) ? `{\n${spaces}${baseSpaces}${parseObjectToString(item.valueBefore)}\n${spaces}  }` : item.valueBefore;
  const changedValue = _.isObject(item.valueAfter) ? `{\n${spaces}${baseSpaces}${parseObjectToString(item.valueAfter)}\n${spaces}  }` : item.valueAfter;
  if (item.type === 'changed') {
    return `${acc}\n${spaces}- ${item.key}: ${oldValue}\n${spaces}+ ${item.key}: ${changedValue}`;
  }
  if (item.type === 'unchanged') {
    return `${acc}\n${spaces}${ifNotChanged}${item.key}: ${oldValue}`;
  }
  if (item.type === 'added') {
    return `${acc}\n${spaces}+ ${item.key}: ${oldValue}`;
  }
  if (item.type === 'node') {
    return `${acc}\n${spaces}${ifNotChanged}${item.key}: {${makeFormat(item.children, depth + 4)}\n${spaces}  }`;
  }

  return `${acc}\n${spaces}- ${item.key}: ${oldValue}`;
}, '');

export default (ast) => `{${makeFormat(ast, 0)}\n}`;
