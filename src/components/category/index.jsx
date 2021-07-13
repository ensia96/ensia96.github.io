import React from 'react'

import Item from './item.js'
import Container from './container.js'
import List from './list.js'

export default ({ structure }) => {
  const Recursion = ({ object, object: { path }, title }) => {
    const titles = Object.keys(object)

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
