import React from 'react'

import * as data from './data/index'

export default ({ type }) => (
  <svg width="24" height="24">
    <rect width="24" height="24" fill="none" rx="0" ry="0" />
    <path fillRule="evenodd" clipRule="evenodd" d={data[type]} />
  </svg>
)
