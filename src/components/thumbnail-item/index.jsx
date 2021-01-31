import React from 'react'

import Container from './container'

export default ({
  node: {
    fields: { slug },
    frontmatter: { title },
    excerpt,
  },
}) => (
  <Container to={slug}>
    <h3>{title || slug}</h3>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Container>
)
