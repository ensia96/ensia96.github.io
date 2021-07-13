import * as browser from './browser'

let storage

const isEmpty = storage => !storage || storage === {}

export const getValueFrom = (source, key, data = undefined) =>
  (storage = browser[source + 'Storage']) &&
  !isEmpty(storage) &&
  (data = storage.getItem(key)) &&
  data &&
  JSON.parse(data)

export const setValueTo = (source, key, data) =>
  (storage = browser[source + 'Storage']) &&
  !isEmpty(storage) &&
  storage.setItem(key, JSON.stringify(data))
