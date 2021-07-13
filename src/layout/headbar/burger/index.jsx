import React from 'react'

import Container from './container'

export default ({ open, sideToggle }) => (
  <Container open={open} onClick={sideToggle}>
    <div />
    <div />
    <div />
  </Container>
)
