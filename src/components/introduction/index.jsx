import React from 'react'

import Container from './container'

import Avatar from '../../layout/sidebar/avatar'
import AvatarContainer from '../../layout/sidebar/bio/title/avatar-box/container'

export default ({ avatar, html: __html }) => (
  <Container>
    <AvatarContainer>
      <Avatar size={300} fixed={avatar} />
    </AvatarContainer>
    <div dangerouslySetInnerHTML={{ __html }} />
  </Container>
)
