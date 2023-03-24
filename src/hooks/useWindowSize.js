import { useState, useEffect } from 'react'
import { win, innerWidth } from '../utils/storage/browser'

export default () => {
  const [windowSize, setWindowSize] = useState({ width: innerWidth })

  const resize = () => setWindowSize({ width: win.innerWidth })

  useEffect(() => {
    win.addEventListener('resize', resize)
    return () => win.removeEventListener('resize', resize)
  }, [])

  return windowSize
}
