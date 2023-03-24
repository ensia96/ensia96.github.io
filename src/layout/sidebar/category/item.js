import React from 'react'
import styled from 'styled-components'

const Item = styled(a)`
  margin: 0;
  height: 30.78px;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
  }
  div {
    margin: 0px 1em 0px 0px;
    vertical-align: middle;
    display: inline;
  }
  span {
    vertical-align: middle;
  }
`

export default ({ icon = '📒', title, to }) => (
  <Item href={to}>
    <div>{icon}</div>
    <span>{title}</span>
  </Item>
)
