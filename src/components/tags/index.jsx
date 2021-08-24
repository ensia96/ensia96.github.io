import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Container = styled(Link)`
  padding: 0 !important;
`

const Tag = styled.code`
  border-radius: 1em;
  border-style: solid;
  border-width: 2px;

  display: inline-block;

  line-height: normal;

  margin: 0.1em 0.3em;
  padding: 0.1em 0.6em;
`

export default ({ tags }) => (
  <>
    {tags?.map((item, i) => (
      <Container key={i} to={`/?tag=${item}`}>
        <Tag># {item}</Tag>
      </Container>
    ))}
  </>
)
