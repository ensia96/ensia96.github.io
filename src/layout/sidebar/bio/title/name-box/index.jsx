import React from 'react'

import NameShake from './nameshake'
import Container from './container'

export default ({ author }) => (
  <Container>
    <NameShake to="/about"># check out my profile!</NameShake>
  </Container>
)
