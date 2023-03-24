import { useEffect } from 'react'

import { win } from '../utils/storage/browser'

export default (onScroll) => {
  useEffect(() => {
    win.addEventListener(`scroll`, onScroll, { passive: false })
    return () => {
      win.removeEventListener(`scroll`, onScroll, { passive: false })
    }
  }, [])
}
