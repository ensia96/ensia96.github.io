import React from 'react'

import Container from './container'
import Content from './contnent'

export default ({ title, isRoot }) =>
  isRoot && (
    <Container>
      <Content to={`/`}>{title}</Content>
    </Container>
  )
