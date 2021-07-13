import { useEffect, useState } from 'react'
import * as Storage from '../utils/storage'

export default () => {
  const initialTheme = Storage.getData('local', 'theme', 'light')
  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = () => {
    theme === 'light'
      ? !Storage.setData('local', 'theme', 'dark') && setTheme('dark')
      : !Storage.setData('local', 'theme', 'light') && setTheme('light')
  }

  useEffect(() => {
    initialTheme && setTheme(initialTheme)
  }, [])

  return [theme, toggleTheme]
}
