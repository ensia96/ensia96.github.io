import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'

import GreenDot from './greendot.js'
import Avatar from '../components/avatar'

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  height: 50px;
  cursor: pointer;
  font-size: 18px;
`

export default ({ author, avatar, onClick }) => (
  <AuthorBox onClick={onClick}>
    <Avatar size={27} fixed={avatar} />
    {author}
    <GreenDot />
  </AuthorBox>
)
