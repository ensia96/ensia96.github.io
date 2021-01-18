import React, { useMemo } from 'react'

const TableOfContents = ({ items, currentHeaderUrl }) => {
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
