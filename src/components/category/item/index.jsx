import React, { useRef, useCallback } from 'react'

export const Item = ({ title, selectedCategory, onClick }) => {
  const tabRef = useRef(null)

  const handleClick = useCallback(() => {
    onClick(title)
  }, [tabRef])

  return (
    <li
      ref={tabRef}
      className="item"
      role="tab"
      aria-selected={selectedCategory === title ? 'true' : 'false'}
    >
      <div onClick={handleClick}>{title}</div>
    </li>
  )
}
