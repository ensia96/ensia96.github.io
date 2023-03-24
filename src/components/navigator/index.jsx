import React from 'react'

import Container from './container'

export default ({ pageContext: { previous, next } }) => (
  <Container>
    <li>
      {previous && (
        <a href={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </a>
      )}
    </li>
    <li>
      {next && (
        <a href={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </a>
      )}
    </li>
  </Container>
)
