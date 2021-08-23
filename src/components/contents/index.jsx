import React, { useMemo } from 'react'

import ThumbnailContainer from '../thumbnail-container'
import ThumbnailItem from '../thumbnail-item'

export default ({ posts, countOfInitialPost, count, path, tag }) => {
  const contents = useMemo(() =>
    (path
      ? posts.filter(({ node }) => node.fields.slug.includes(decodeURI(path)))
      : tag
      ? posts.filter(({ node }) =>
          node.frontmatter.tags.includes(decodeURI(tag))
        )
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
