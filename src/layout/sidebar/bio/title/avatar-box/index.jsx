import React from 'react'

import Avatar from '../../../avatar'

import Container from './container'

export default ({ avatar, setBio }) => (
  <Container>
    <a
      href="/"
      children={<Avatar fixed={avatar} size={100} />}
      onClick={() => setBio(false)}
    />
  </Container>
)
