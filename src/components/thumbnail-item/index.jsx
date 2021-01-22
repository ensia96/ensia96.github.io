import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export default ({
  node: {
    fields: { slug },
    frontmatter: { title },
    excerpt,
  },
}) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={slug}>
    <div key={slug}>
      <h3>{title || slug}</h3>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  </Link>
)
