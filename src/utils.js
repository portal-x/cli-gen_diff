import fs from 'fs';

const getObjectFromJson = (pathToFile) => {
  if (pathToFile === '') return '';
  const readJson = fs.readFileSync(pathToFile, (data) => data).toString();
  const parse = JSON.parse(readJson);

  return parse;
};

export default getObjectFromJson;
