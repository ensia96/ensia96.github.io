import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Tag = styled.code`
  border-radius: 1em;
  border-style: solid;
  border-width: 2px;

  white-space: pre;
  word-break: normal;
  word-wrap: normal;

  margin: 5px;
  padding: 0.1em 0.6em;
`

export default ({ tags }) => (
  <>
    {tags?.map((item, i) => (
      <Link key={i} to={`/?tag=${item}`}>
        <Tag># {item}</Tag>
      </Link>
    ))}
  </>
)
