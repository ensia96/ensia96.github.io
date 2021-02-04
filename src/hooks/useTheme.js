import { useEffect, useState } from 'react'

let initial = 'light'

if (typeof window !== 'undefined') {
  initial = window.localStorage.getItem('theme')
}

export default () => {
  const [theme, setTheme] = useState(initial)

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
      initial = 'dark'
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
      initial = 'light'
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
