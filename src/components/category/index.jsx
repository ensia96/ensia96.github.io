import React from 'react'

import List from './list.js'
import Item from './item.js'

export const Category = ({ categories }) => (
  <List>
    <Item title="All" />
    {categories.map((title, idx) => (
      <Item key={idx} title={title} />
    ))}
  </List>
)
