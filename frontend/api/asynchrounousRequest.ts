export enum REQUEST_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const DEFAULT_OPTIONS = {
  type: REQUEST_METHODS.GET,
};

interface IGetRequestHeaders {
  type?: typeof REQUEST_METHODS[keyof typeof REQUEST_METHODS];
  body?: { [key: string]: any } | null;
}

interface IAsynchrounousRequest extends IGetRequestHeaders {
  query?: { [key: string]: any };
}

function formatQueryString(query?: { [key: string]: any }) {
  if (!query) {
    return '';
  }

  return Object.entries(query).reduce((qs, [key, value]) => {
    if (!value) return qs;

    const encodedValue = encodeURI(value);

    return qs ? `${qs}&${key}=${encodedValue}` : `?${key}=${encodedValue}`;
  }, '');
}

const getRequestHeaders = ({ type, body }: IGetRequestHeaders) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  method: type,
  body: body ? JSON.stringify(body) : null,
});

export async function asynchrounousRequest(
  request: string,
  { type, body, query }: IAsynchrounousRequest = DEFAULT_OPTIONS,
) {
  const queryString = formatQueryString(query);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}api/${request}${queryString}`,
    getRequestHeaders({ type, body }),
  );

  const jsonResponse = await response.json();

  if (jsonResponse.status >= 400) {
    throw new Error(`Network Error: Status ${jsonResponse.status} ${jsonResponse.message}`);
  }

  return jsonResponse;
}
