import React from 'react'

import Container from './container'
import Button from './button'
import Logo from './logo'
import Content from './content'

export default ({ sponsorId }) => (
  <Container>
    <Button
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.buymeacoffee.com/${sponsorId}`}
    >
      <Logo
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <Content>Buy me a coffee</Content>
    </Button>
  </Container>
)
