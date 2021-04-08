import fetch from 'node-fetch';

const post = ({url, headers, body}) => fetch(
  url,
  {
    method: "POST",
    headers,
    body
  }).then(response => response.json());

export default post;