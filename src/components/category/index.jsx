import React from 'react'

import List from './list.js'
import Item from './item.js'

export default ({ categories }) => (
  <List>
    <Item title="All" to="/" />
    {categories.map((title, idx) => (
      <Item key={idx} title={title} to={`/?category=${title}`} />
    ))}
  </List>
)
