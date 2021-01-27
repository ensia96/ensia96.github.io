import { useState, useEffect } from 'react'

let initial

if (typeof window !== `undefined`) {
  initial = localStorage.getItem('theme')
}

export default () => {
  const [theme, setTheme] = useState(initial)

  const changeTheme = bool => {
    console.log('bool : ', bool)
    const theme = bool ? 'dark' : 'light'
    setTheme(theme)
  }

  useEffect(() => {
    console.log('테마 바뀜 : ', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  console.log('initial : ', initial)
  console.log('theme : ', theme)
  console.log('local storage : ', localStorage.getItem('theme'))
  console.log('isDark : ', isDark)

  return [isDark, changeTheme]
}
