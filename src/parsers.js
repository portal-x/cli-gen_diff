import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (pathToFile) => {
  if (pathToFile === '') return {};
  const format = path.extname(pathToFile);
  const data = fs.readFileSync(pathToFile, 'utf-8');
  if (format === '.json') {
    return JSON.parse(data.toString());
  }
  if (format === '.yaml' || format === '.yml') {
    return yaml.safeLoad(data);
  }

  return 'unsupported format';
};
