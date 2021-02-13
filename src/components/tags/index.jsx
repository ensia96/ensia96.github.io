import React from 'react'
import styled from 'styled-components'

const Tag = styled.code`
  margin: 5px;
`

export default ({ tags }) => (
  <>
    {tags?.map(item => (
      <Tag># {item}</Tag>
    ))}
  </>
)
