import React from 'react'

import Container from './container'
import Item from './item'

export default ({ tags }) => (
  <>
    {tags?.map((item, i) => (
      <Container key={i} to={`/?tag=${item}`}>
        <Item># {item}</Item>
      </Container>
    ))}
  </>
)
