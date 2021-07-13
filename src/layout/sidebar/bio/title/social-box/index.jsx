import React from 'react'

import Container from './container'
import Social from './social'

export default ({ social }) => (
  <Container>
    {Object.entries(social).map(
      ([key, value]) =>
        value && <Social key={key} size={15} type={key} value={value} />
    )}
  </Container>
)
