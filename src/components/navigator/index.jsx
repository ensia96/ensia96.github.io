import React from 'react'
import { Link } from 'gatsby'

import Container from './container'

export default ({ pageContext: { previous, next } }) => (
  <Container>
    <li>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </Link>
      )}
    </li>
    <li>
      {next && (
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      )}
    </li>
  </Container>
)
