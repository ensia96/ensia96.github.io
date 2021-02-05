import React from 'react'

import Icon from './icon'

import styled from 'styled-components'

import Container from './container'
import Input from './input'
import Switch from './switch'

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
