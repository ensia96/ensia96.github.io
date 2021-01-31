import React from 'react'
import styled from 'styled-components'

const Content = styled.p`
  text-align: right;
  font-size: 12px;
  font-style: italic;
`

export default ({ date }) => <Content>{date}</Content>
