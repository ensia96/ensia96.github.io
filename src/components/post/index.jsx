import React from 'react'

import Container from './container'
import Title from './title'
import Date from './date'

export default ({ title, date, html }) => (
  <div>
    <Title title={title} />
    <Date date={date} />
    <Container html={html} />
  </div>
)
