import { useState, useEffect } from 'react'

let state

if (typeof window !== `undefined`) {
  state = localStorage.getItem('theme')
}

export default () => {
  const [isDark, setIsDark] = useState(state)

  const setTheme = bool => {
    localStorage.setItem('theme', bool)
    setIsDark(bool)
  }

  return [isDark, setTheme]
}
