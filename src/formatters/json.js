import _ from 'lodash';

const makeJson = (data) => {
  if (data.length === 0) return [];
  if (!_.has(data.descendants)) {
    return JSON.stringify(data);
  }
  return data.map((item) => makeJson(item.descendants));
};

export default makeJson;
