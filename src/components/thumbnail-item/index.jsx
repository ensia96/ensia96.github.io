import React from 'react'
import { TARGET_CLASS } from '../../utils/visible'

import Container from './container'

import './index.scss'

export default ({
  node: {
    fields: { slug },
    frontmatter: { title },
    excerpt,
  },
}) => (
  <Container className={`thumbnail ${TARGET_CLASS}`} to={slug}>
    <h3>{title || slug}</h3>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Container>
)
