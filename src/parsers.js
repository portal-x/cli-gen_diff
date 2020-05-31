import _ from 'lodash';
import yaml from 'js-yaml';
import ini from 'ini';

const numberifyValues = (dataToNormalize) => {
  if (!_.isPlainObject(dataToNormalize)) {
    return (+dataToNormalize) ? JSON.parse(dataToNormalize) : dataToNormalize;
  }

  return Object.entries(dataToNormalize).reduce((acc, [key, value]) => {
    const item = numberifyValues(value);
    acc[key] = item;
    return acc;
  }, {});
};

const parseIni = (dataToParse) => {
  const parsedIni = ini.parse(dataToParse);

  return numberifyValues(parsedIni);
};

const supportedFormat = {
  json: JSON.parse,
  yaml: yaml.safeLoad,
  yml: yaml.safeLoad,
  ini: parseIni,
};

export default (data, format) => supportedFormat[format](data);
