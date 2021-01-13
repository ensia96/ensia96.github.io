import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Burger from './burger.js'

const Header = styled.header`
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;

  background-color: #ffc800;

  @media all and (min-width: 992px) {
    display: none;
  }
`

const Title = styled.h3`
  margin: 0px;
  align-self: center;
  padding-left: 55px;
`

export default ({ open, isRoot, title, sideToggle }) => (
  <Header>
    <Burger open={open} sideToggle={sideToggle} />
    {!isRoot && (
      <Title>
        <Link>{title}</Link>
      </Title>
    )}
  </Header>
)
