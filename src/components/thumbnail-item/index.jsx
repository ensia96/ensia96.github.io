import React from 'react'

import Container from './container'

import Tags from '../tags'

export default ({
  node: {
    fields: { slug },
    frontmatter: { title, tags },
    excerpt,
  },
}) => (
  <Container to={slug}>
    <h3>{title || slug}</h3>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    <Tags tags={tags} />
  </Container>
)
