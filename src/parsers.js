import yaml from 'js-yaml';
import ini from 'ini';


const parseIni = (dataToParse) => {
  const parsedIni = Object.entries(ini.parse(dataToParse));
  const normalizedOutputType = parsedIni.reduce((acc, [key, value]) => {
    const item = (+value && typeof value !== 'boolean') ? +value : value;
    acc[key] = item;
    return acc;
  }, {});
  return normalizedOutputType;
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
    default: return 'unsupported format';
  }
};
