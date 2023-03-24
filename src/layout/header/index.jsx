import React from 'react'

import Container from './container'
import Content from './content'

export default ({ title, isRoot }) =>
  isRoot && (
    <Container>
      <Content href="/">{title}</Content>
    </Container>
  )
