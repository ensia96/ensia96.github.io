import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = styled(Link)`
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
  <Item to={to}>
    <div>{icon}</div>
    <span>{title}</span>
  </Item>
)
