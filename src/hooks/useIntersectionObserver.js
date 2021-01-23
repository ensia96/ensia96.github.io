import { useEffect } from 'react'
import * as IOManager from '../utils/visible'

// 작업 예정

export function useIntersectionObserver() {
  useEffect(() => {
    IOManager.init()
    return () => {
      IOManager.destroy()
    }
  }, [])

  useEffect(() => {
    IOManager.refreshObserver()
  })
}
