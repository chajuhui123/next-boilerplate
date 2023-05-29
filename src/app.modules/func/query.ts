// import { EnumAppId } from 'app.constants/appId';

export const queryToObject = (searchString) => {
  if (!searchString) return false;
  return searchString
    .substring(1)
    .split('&')
    .reduce((result, next) => {
      let pair = next.split('=');
      result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);

      return result;
    }, {});
}

export const objectToQueryString = (data: object|any) => {
  if (!Object.keys(data).length) return '';
  const pairs = [];
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      let k = prop;
      let v = data[prop];
      pairs.push(`${k}=${v}`);
    }
  }
  return pairs.join('&');
};

export const objectToURL = (data) => '?' + objectToQueryString(data);

// export const enumAppIdToURL = (obj) => {
//   const _obj = { ...obj};
//   _obj.appId
//     ? _obj.appId = EnumAppId[obj.appId]
//     : delete _obj.appId;

//   return '?' + objectToQueryString(_obj);
// };

export const getAppIdObject = (obj) => {
  const _obj = { ...obj};
  !_obj.appId && delete _obj.appId;

  return _obj;
}