import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import './index.scss'

const HomeHeader = styled.h1`
  margin-top: 0;
  border-bottom: none;
  font-weight: 900;
  font-size: 48px;
  letter-spacing: -2px;
`

const Content = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

export default ({ title, isRoot }) =>
  isRoot && (
    <HomeHeader>
      <Content to={`/`}>{title}</Content>
    </HomeHeader>
  )
