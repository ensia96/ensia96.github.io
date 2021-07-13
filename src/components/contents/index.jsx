import React, { useMemo } from 'react'

import ThumbnailContainer from '../thumbnail-container'
import ThumbnailItem from '../thumbnail-item'

export default ({ posts, countOfInitialPost, count, path }) => {
  const contents = useMemo(() =>
    (path
      ? posts.filter(({ node }) => node.fields.slug.includes(decodeURI(path)))
      : posts.filter(({ node }) => !node.fields.slug.includes('TIL'))
    ).slice(0, count * countOfInitialPost)
  )

  return (
    <ThumbnailContainer>
      {contents.map(({ node }, i) => (
        <ThumbnailItem node={node} key={`item_${i}`} />
      ))}
    </ThumbnailContainer>
  )
}
