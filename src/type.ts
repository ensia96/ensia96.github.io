export type Request = <Response>(input: RequestInfo | URL) => Promise<Response>;

export type JoinUrl = (...args: string[]) => string;
