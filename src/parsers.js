import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

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
  if (format === '.ini') {
    const list = Object.entries(ini.parse(data));
    return list.reduce((acc, [key, value]) => {
      const item = (+value && typeof value !== 'boolean') ? +value : value;
      acc[key] = item;
      return acc;
    }, {});
  }

  return 'unsupported format';
};
