import React from 'react'
import styled from 'styled-components'

const Tag = styled.code`
  border-radius: 0.2em;

  margin: 5px;
  padding: 0.1em 0.6em;
`

export default ({ tags }) => (
  <>
    {tags?.map((item, i) => (
      <Tag key={i}># {item}</Tag>
    ))}
  </>
)
