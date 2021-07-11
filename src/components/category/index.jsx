import React from 'react'

import Item from './item.js'
import Container from './container.js'
import List from './list.js'

export default ({ structure }) => {
  const Recursion = ({ object, object: { path }, title }) => {
    const titles = Object.keys(object)

    return path ? (
      <Item title={title} to={`/?path=${path}`}></Item>
    ) : title ? (
      <List>
        <summary>
          <span>{title}</span>
        </summary>
        {titles.map(title => (
          <Recursion object={object[title]} title={title} />
        ))}
      </List>
    ) : (
      <>
        {titles.map(title => (
          <Recursion object={object[title]} title={title} />
        ))}
      </>
    )
  }

  return (
    <Container>
      <Item icon="🏠" title="Home" to="/" />
      <Recursion object={structure} />
    </Container>
  )
}
