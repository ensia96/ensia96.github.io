import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = styled(Link)`
  display: block;
  height: 36px;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
  }
  i {
    margin: 10px 20px 10px 30px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
`

export default ({ title }) => (
  <Item to={`/?category=${title}`}>
    <i>#</i>
    <span>{title}</span>
  </Item>
)
