import yaml from 'js-yaml';
import ini from 'ini';

export default (data, extension) => {
  if (data === '') return {};
  if (extension === '.json') {
    return JSON.parse(data.toString());
  }
  if (extension === '.yaml' || extension === '.yml') {
    return yaml.safeLoad(data);
  }
  if (extension === '.ini') {
    const list = Object.entries(ini.parse(data));
    return list.reduce((acc, [key, value]) => {
      const item = (+value && typeof value !== 'boolean') ? +value : value;
      acc[key] = item;
      return acc;
    }, {});
  }

  return 'unsupported format';
};
