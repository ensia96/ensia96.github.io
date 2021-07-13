import React from 'react'

import Image from 'gatsby-image'

import Container from './container'
import GreenDot from './greendot'
import Avatar from '../avatar'

export default ({ author, avatar, onClick }) => (
  <Container onClick={onClick}>
    <Avatar size={27} fixed={avatar} />
    {author}
    <GreenDot />
  </Container>
)
