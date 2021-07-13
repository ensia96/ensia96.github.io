import React from 'react'

import Container from './container'
import OutSide from './outside'

import Title from './title'
import Text from './text'

export default ({ open, setBio, avatar, author, social, introduction }) => (
  <>
    <OutSide show={open} onClick={() => setBio(false)} />
    <Container show={open}>
      <Title avatar={avatar} author={author} social={social} setBio={setBio} />
      <Text>{introduction}</Text>
    </Container>
  </>
)
