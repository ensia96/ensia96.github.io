import React from 'react'

import Container from './container.js'
import ThemeSwitch from './theme-switch'

export default ({ theme, toggleTheme }) => (
  <Container>
    <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
  </Container>
)
