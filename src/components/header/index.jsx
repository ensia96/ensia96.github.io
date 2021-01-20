import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export default ({ title, isRoot }) =>
  isRoot && (
    <h1 className="home-header">
      <Link to={`/`} className="link">
        {title}
      </Link>
    </h1>
  )
