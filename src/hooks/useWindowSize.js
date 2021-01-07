import { useState, useEffect } from 'react'

export default () => {
  const [windowSize, setWindowSize] = useState({})

  const resize = () => setWindowSize({ width: window.innerWidth })

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return windowSize
}
