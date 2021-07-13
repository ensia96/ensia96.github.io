import { useEffect, useState } from 'react'
import * as Storage from '../utils/storage'

export default () => {
  const _theme = Storage.getData('local', 'theme', 'light')
  const [theme, setTheme] = useState(_theme)

  const toggleTheme = () => {
    theme === 'light'
      ? !Storage.setTheme('local', 'theme', 'dark') && setTheme('dark')
      : !Storage.setTheme('local', 'theme', 'light') && setTheme('light')
  }

  useEffect(() => {
    _theme && setTheme(_theme)
  }, [])

  return [theme, toggleTheme]
}
