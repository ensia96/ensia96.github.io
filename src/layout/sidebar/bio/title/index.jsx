import React from 'react'

import Container from './container'
import AvatarBox from './avatar-box'
import NameBox from './name-box'
import SocialBox from './social-box'

export default ({ avatar, author, social, setBio }) => (
  <Container>
    <AvatarBox avatar={avatar} setBio={setBio} />
    <NameBox author={author} />
    <SocialBox social={social} />
  </Container>
)
