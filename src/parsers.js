import yaml from 'js-yaml';
import ini from 'ini';

const parseIni = (dataToParse) => {
  const parsedIni = ini.parse(dataToParse);
  const normalizeIni = (dataToNormalize) => {
    if (dataToNormalize.constructor !== Object) {
      return (+dataToNormalize && typeof dataToNormalize !== 'boolean') ? +dataToNormalize : dataToNormalize;
    }
    return Object.entries(dataToNormalize).reduce((acc, [key, value]) => {
      const item = normalizeIni(value);
      acc[key] = item;
      return acc;
    }, {});
  };
  return normalizeIni(parsedIni);
};

export default (data, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(data);
    case ('.yaml'):
      return yaml.safeLoad(data);
    case ('.yml'):
      return yaml.safeLoad(data);
    case ('.ini'):
      return parseIni(data);
    default: throw new Error(`Unknown format: '${extension}'!`);
  }
};
