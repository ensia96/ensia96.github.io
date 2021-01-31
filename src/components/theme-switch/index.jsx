import React from 'react'
import Switch from 'react-switch'

import Icon from './icon'

export default ({ theme, toggleTheme }) => (
  <Switch
    onChange={toggleTheme}
    checked={theme === 'dark'}
    height={24}
    width={48}
    checkedIcon={<Icon type="moon" />}
    uncheckedIcon={<Icon type="sun" />}
    offColor={'#d9dfe2'}
    offHandleColor={'#fff'}
    onColor={'#999'}
    onHandleColor={'#282c35'}
  />
)
