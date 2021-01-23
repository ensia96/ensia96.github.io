import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import styled from 'styled-components'

import './index.scss'

const Container = styled(Link)`
  display: block;
  margin-bottom: 12px;
  padding: 4px;
  padding-bottom: 12px;
  box-shadow: none;
  transition: text-shadow 0.3s, opacity 0.4s;
  opacity: 0;

  p {
    font-size: 90%;
    line-height: 1.4;
  }
`

export default ({
  node: {
    fields: { slug },
    frontmatter: { title },
    excerpt,
  },
}) => (
  <Container className={`thumbnail ${TARGET_CLASS}`} to={slug}>
    <div key={slug}>
      <h3>{title || slug}</h3>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  </Container>
)
