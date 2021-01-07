import { useState, useEffect } from 'react'

let defaultWidth

if (typeof window !== `undefined`) {
  defaultWidth = window.innerWidth
}

export default () => {
  const [windowSize, setWindowSize] = useState({ width: defaultWidth })

  const resize = () => setWindowSize({ width: window.innerWidth })

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return windowSize
}
