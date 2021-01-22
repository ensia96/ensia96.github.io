import React from 'react'

export default ({ type }) => (
  <svg width="24" height="24">
    <rect width="24" height="24" fill="none" rx="0" ry="0" />
    <path fillRule="evenodd" clipRule="evenodd" d={type} />
  </svg>
)
