import React, { useState, useEffect, useMemo } from 'react'
import Container from './container'
import Button from './button'

const TableOfContents = ({ items }) => {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined)

  const [open, setOpen] = useState()

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

  const targetStyle = 'font-size: 16px; color:gray; font-weight: 600;'

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
    <Container open={open}>
      <Button open={open} onClick={() => setOpen(!open)} />
      <div dangerouslySetInnerHTML={{ __html: replaceItems }} />
    </Container>
  ) : null
}

export default TableOfContents
