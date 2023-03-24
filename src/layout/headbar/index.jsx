import React from 'react'

import Burger from './burger'
import Container from './container'
import Title from './title'

export default ({ open, isRoot, title, sideToggle }) => (
  <Container>
    <Burger open={open} sideToggle={sideToggle} />
    {!isRoot && (
      <Title>
        <a href="/">{title}</a>
      </Title>
    )}
  </Container>
)
