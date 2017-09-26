import nodefetch from 'node-fetch';

export async function fetch(method, route = '', body) {
  const response = await nodefetch(`http://localhost:8080${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body:
      body &&
      JSON.stringify({
        ...body,
      }),
    mode: 'cors',
  });
  return await response.json();
}
