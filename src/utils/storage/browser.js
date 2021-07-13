const win = typeof window !== `undefined` ? window : {}

export const localStorage = win.localStorage
export const sessionStorage = win.sessionStorage
export const innerWidth = win.innerWidth
export const getUrlParameter = () =>
  win.location.search
    .substr(1)
    .split('&')
    .map(query => query.split('='))
    .reduce((object, [key, value]) => (object[key] = value) && object, {}) || {}
