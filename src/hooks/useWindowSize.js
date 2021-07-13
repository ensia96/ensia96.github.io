import { useState, useEffect } from 'react'
import { innerWidth } from '../utils/storage/browser'

export default () => {
  const [windowSize, setWindowSize] = useState({ width: innerWidth })

  const resize = () => setWindowSize({ width: window.innerWidth })

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return windowSize
}
