import { getValueFrom, setValueTo } from './core'

const SESSION_STORAGE_KEY = '__felog_session_storage_key__/'
const LOCAL_STORAGE_KEY = '__felog_local_storage_key__/'

const keyMaker = (source, key) =>
  source === 'local' ? LOCAL_STORAGE_KEY + key : SESSION_STORAGE_KEY + key

export const getData = (source, key, defaultValue = undefined) =>
  getValueFrom(source, keyMaker(source, key)) || defaultValue

export const setData = (source, key, val) =>
  setValueTo(source, keyMaker(source, key), val)
