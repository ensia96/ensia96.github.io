import React from 'react'

import Date from './date'

export default ({ title, date, html }) => (
  <>
    <base target="_blank" />
    <h1>{title}</h1>
    <Date>{date}</Date>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
)
