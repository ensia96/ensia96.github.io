import React from 'react'

export default ({ html }) => (
  <>
    <base target="_blank" />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
)
