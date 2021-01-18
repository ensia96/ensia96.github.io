import React, { useState, useEffect, useMemo } from 'react'

const TableOfContents = ({ items }) => {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined)

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl
      const headerElements = document.querySelectorAll('.anchor-header')

      Object.values(headerElements).every((elem, i) =>
        0 < elem.getBoundingClientRect().top - 100
          ? setCurrentHeaderUrl(aboveHeaderUrl?.split(location.origin)[1])
          : (i === headerElements.length - 1
              ? setCurrentHeaderUrl(elem.href.split(location.origin)[1])
              : (aboveHeaderUrl = elem.href)) || true
      )
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const targetStyle = 'font-size: 15px; color:white; font-weight: 600;'

  const replaceItems = useMemo(
    () =>
      currentHeaderUrl
        ? items.replace(
            `"${currentHeaderUrl}"`,
            `"${currentHeaderUrl}" style="${targetStyle}"`
          )
        : items,
    [currentHeaderUrl]
  )

  return items ? (
    <nav style={{ position: 'fixed', backgroundColor: 'white' }}>
      <div dangerouslySetInnerHTML={{ __html: replaceItems }} />
    </nav>
  ) : null
}

export default TableOfContents
