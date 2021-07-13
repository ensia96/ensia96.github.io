import { useEffect, useState } from 'react'
import * as Storage from '../utils/storage'

export default () => {
  const _theme = Storage.getTheme('light')
  const [theme, setTheme] = useState(_theme)

  const toggleTheme = () => {
    theme === 'light'
      ? !Storage.setTheme('dark') && setTheme('dark')
      : !Storage.setTheme('light') && setTheme('light')
  }

  useEffect(() => {
    _theme && setTheme(_theme)
  }, [])

  return [theme, toggleTheme]
}
