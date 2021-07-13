import { useEffect } from 'react'

export default onScroll => {
  useEffect(() => {
    window.addEventListener(`scroll`, onScroll, { passive: false })
    return () => {
      window.removeEventListener(`scroll`, onScroll, { passive: false })
    }
  }, [])
}
