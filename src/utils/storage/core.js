const isEmpty = storage => !storage || storage === {}

export const getValueFrom = (storage, key, rawData = undefined) =>
  !isEmpty(storage) &&
  (rawData = storage.getItem(key)) &&
  rawData &&
  JSON.parse(rawData)

export const setValueTo = (storage, key, data) =>
  !isEmpty(storage) && storage.setItem(key, JSON.stringify(data))
