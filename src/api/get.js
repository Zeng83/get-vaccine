import fetch from 'node-fetch';

const get = ({url, headers}) => fetch(
  url,
  {
    method: "GET",
    headers
  }).then(response => response.json());

export default get;