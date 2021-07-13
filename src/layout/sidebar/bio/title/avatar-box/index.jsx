import React from 'react'
import { Link } from 'gatsby'

import Avatar from '../../../avatar'

import Container from './container'

export default ({ avatar, setBio }) => (
  <Container>
    <Link
      to="/"
      children={<Avatar fixed={avatar} size={100} />}
      onClick={() => setBio(false)}
    />
  </Container>
)
