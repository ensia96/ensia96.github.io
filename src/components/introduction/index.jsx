import React from 'react'

import Container from './container'
import Content from './content'

import Avatar from '../../layout/sidebar/avatar'

export default ({ avatar, html: __html }) => (
  <Container>
    <Avatar size={300} fixed={avatar} />
    <Content dangerouslySetInnerHTML={{ __html }} />
  </Container>
)
