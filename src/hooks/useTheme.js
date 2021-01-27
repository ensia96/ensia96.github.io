import { useState, useEffect } from 'react'

let initial

if (typeof window !== `undefined`) {
  initial = localStorage.getItem('theme')
}

export default () => {
  const [theme, setTheme] = useState(initial)

  const changeTheme = bool => {
    const theme = bool ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const isDark = theme === 'dark'

  console.log('initial : ', initial)
  console.log('theme : ', theme)
  console.log('local storage : ', localStorage.getItem('theme'))
  console.log('isDark : ', isDark)

  return [isDark, changeTheme]
}
