import {
  setValueToSessionStorage,
  getValueFromSessionStorage,
} from './sessionStorage'
import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from './localStorage'

const SESSION_STORAGE_KEY = '__felog_session_storage_key__'
const LOCAL_STORAGE_KEY = '__felog_local_storage_key__'

export const getCount = defaultValue =>
  getValueFromSessionStorage(`${SESSION_STORAGE_KEY}/count`) || defaultValue

export const setCount = val =>
  setValueToSessionStorage(`${SESSION_STORAGE_KEY}/count`, val)

export const getData = () => getValueFromLocalStorage(LOCAL_STORAGE_KEY)

export const setData = val => setValueToLocalStorage(LOCAL_STORAGE_KEY, val)

export const getTheme = defaultValue =>
  getValueFromLocalStorage(`${LOCAL_STORAGE_KEY}/theme`) || defaultValue

export const setTheme = val =>
  setValueToLocalStorage(`${LOCAL_STORAGE_KEY}/theme`, val)
