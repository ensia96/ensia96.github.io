// See https://nextjs.org/docs/app/api-reference/functions/fetch

import { Request } from "@/type";

const request: Request = (input) =>
  fetch(input)
    .then((response) => response.json())
    .then((data) => data);

export default request;
