import React, { useMemo } from 'react'

import { ThumbnailContainer } from '../thumbnail-container'
import { ThumbnailItem } from '../thumbnail-item'
import { CATEGORY_TYPE } from '../../constants'

export const Contents = ({ posts, countOfInitialPost, count, category }) => {
  const contents = useMemo(() =>
    posts
      .filter(({ node }) =>
        category ? node.frontmatter.category === category : true
      )
      .slice(0, count * countOfInitialPost)
  )

  return (
    <ThumbnailContainer>
      {contents.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))}
    </ThumbnailContainer>
  )
}
