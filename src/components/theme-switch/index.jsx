import React from 'react'

import Container from './container'
import Input from './input'
import Switch from './switch'
import Icon from './icon'

export default ({ theme, toggleTheme }) => {
  const checked = theme === 'light'

  return (
    <Container>
      <Input type="checkbox" checked={checked} onChange={toggleTheme} />
      <Switch left checked={checked} children={<Icon type="sun" />} />
      <Switch checked={checked} children={<Icon type="moon" />} />
    </Container>
  )
}
