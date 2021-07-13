import React from 'react'

import Container from './container'

export default ({ title, children }) => (
  <Container>
    <summary>
      <span>{title}</span>
    </summary>
    {children}
  </Container>
)
