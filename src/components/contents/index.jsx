import React, { useMemo } from 'react'

import ThumbnailContainer from '../thumbnail-container'
import ThumbnailItem from '../thumbnail-item'

import Tags from '../tags'

export default ({ posts, countOfInitialPost, count, path, tag }) => {
  const contents = useMemo(() =>
    posts.filter(({ node }) =>
      path
        ? node.fields.slug.includes(decodeURI(path))
        : tag
        ? node.frontmatter.tags.includes(decodeURI(tag))
        : !node.fields.slug.includes('TIL')
    )
  )

  const tags = Array.from(
    new Set(contents.map(({ node }) => node.frontmatter.tags).flat())
  ).sort()

  return (
    <ThumbnailContainer>
      <details open>
        <summary>태그 목록</summary>
        <Tags tags={tags} />
      </details>
      {contents.map(({ node }, i) => (
        <ThumbnailItem node={node} key={`item_${i}`} />
      ))}
    </ThumbnailContainer>
  )
}
