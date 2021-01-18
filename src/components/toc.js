import React, { useMemo } from 'react'

const TableOfContents = ({ items, currentHeaderUrl }) => {
  const replaceItems = useMemo(() => {
    if (currentHeaderUrl) {
      return items.replace(
        `"${currentHeaderUrl}"`,
        `"${currentHeaderUrl}" style="font-size: 15px; color:white; font-weight: 600;"`
      )
    } else {
      return items
    }
  }, [currentHeaderUrl])

  return items ? (
    <nav style={{ position: 'fixed', backgroundColor: 'white' }}>
      <div dangerouslySetInnerHTML={{ __html: replaceItems }} />
    </nav>
  ) : null
}

export default TableOfContents
