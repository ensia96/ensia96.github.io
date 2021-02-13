import React from 'react'

import Container from './container'

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
    {tags ? (
      tags.map(item => <code style={{ margin: '5px' }}># {item}</code>)
    ) : (
      <div />
    )}
  </Container>
)
