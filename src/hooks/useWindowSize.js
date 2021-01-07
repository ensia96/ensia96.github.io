import { useState, useLayoutEffect } from 'react'

export default defaultValue => {
  const [windowSize, setWindowSize] = useState({ innerWidth: defaultValue })

  useLayoutEffect(() => {
    setWindowSize({ innerWidth: window.innerWidth })
  }, [])

  return windowSize
}
