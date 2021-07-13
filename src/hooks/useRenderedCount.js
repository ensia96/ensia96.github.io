import { useState, useEffect, useRef } from 'react'
import * as Storage from '../utils/storage'

export function useRenderedCount() {
  const initialCount = Storage.getData('session', 'count', 1)
  const [count, setCount] = useState(initialCount)
  const countRef = useRef(count)
  const increaseCount = () => setCount(prev => prev + 1)

  useEffect(() => {
    countRef.current = count
    Storage.setData('session', 'count', count)
  }, [count])

  return [count, countRef, increaseCount]
}
