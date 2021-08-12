import React from 'react'

import Container from './container'

import Avatar from '../../layout/sidebar/avatar'

export default ({ avatar, html: __html }) => (
  <Container>
    <Avatar size={300} fixed={avatar} />
    <div dangerouslySetInnerHTML={{ __html }} />
  </Container>
)
