// ======================
// data
// ======================

// export type SomeData = {};

// ======================
// function
// ======================

export type Request = <Response>(input: RequestInfo | URL) => Promise<Response>;

export type JoinUrl = (...args: string[]) => string;

export type JoinPath = (...args: string[]) => string;

// ======================
// api
// ======================

// export type SomeRequestResponse = {};
