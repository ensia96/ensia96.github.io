import React from 'react'

import Item from './item'
import Container from './container'
import List from './list'

export default ({ structure }) => {
  const Recursion = ({ object, object: { path }, title }) => {
    const titles = Object.keys(object).sort()

    const recursion = titles.map((title, i) => (
      <Recursion key={i} object={object[title]} title={title} />
    ))

    return path ? (
      <Item title={title} to={`/?path=${path}`}></Item>
    ) : title ? (
      <List title={title}>{recursion}</List>
    ) : (
      <>{recursion}</>
    )
  }

  return (
    <Container>
      <Item icon="🏠" title="Home" to="/" />
      <Recursion object={structure} />
    </Container>
  )
}
