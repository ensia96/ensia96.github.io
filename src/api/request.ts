// See https://nextjs.org/docs/app/api-reference/functions/fetch

type RequestInput = RequestInfo | URL;

type RequestOutput<T> = Promise<T>;

type Request = <Response>(input: RequestInput) => RequestOutput<Response>;

const request: Request = (input) =>
  fetch(input)
    .then((response) => response.json())
    .then((data) => data);

export default request;
