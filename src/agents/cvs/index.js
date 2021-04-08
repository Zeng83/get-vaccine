import post from '../../api/post';
import { BRAND, url, zipcodes } from './constants';
import { getHeaders, getBoday } from './payload';

export const onCallApi = zipcode => post({
  url,
  headers: getHeaders(),
  body: getBoday(zipcode)
});

export const getUpdates = () => {

  return Promise.all(zipcodes.map(zipcode => onCallApi(zipcode)))
    .then(data => 
      data.filter(location => location.responseMetaData.statusCode === '0000')
        .map(data => data.responsePayloadData)
        .reduce((arr, payload) => {
          return [...arr, ...payload.locations]
        }, [])
        .reduce((obj, location) => {
          if (!obj[location.mfrName]) {
            obj[location.mfrName] = [location.addressZipCode];
          }
          obj[location.mfrName].push(location.addressZipCode)
          return obj;
        }, {})
    );
}