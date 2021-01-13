import React from 'react'
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

export default ({ open, sideToggle }) => (
  <Header>
    <Burger open={open} sideToggle={sideToggle} />
    <h3 style={{ margin: '0px', alignSelf: 'center', paddingLeft: '55px' }}>
      한글 테스트
    </h3>
  </Header>
)
