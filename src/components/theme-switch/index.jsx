import React from 'react'
import Switch from 'react-switch'

import Icon from './icon'

import './index.scss'

export default ({ theme, toggleTheme }) => {
  console.log('theme : ', theme)

  return (
    <>
      <label className="rocker">
        <input
          type="checkbox"
          checked={theme === 'light'}
          onChange={toggleTheme}
        />
        <span className="switch-left">
          <Icon type="sun" />
        </span>
        <span className="switch-right">
          <Icon type="moon" />
        </span>
      </label>
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
    </>
  )
}
