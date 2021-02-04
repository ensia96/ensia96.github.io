import React from 'react'
import Switch from 'react-switch'

import Icon from './icon'

import './index.scss'

export default ({ theme, toggleTheme }) => {
  console.log('theme : ', theme)

  return (
    <>
      <div className="mid">
        <label className="rocker">
          <input type="checkbox" />
          <span className="switch-left">On</span>
          <span className="switch-right">Off</span>
        </label>
      </div>
      <div className="mid">
        <label className="rocker rocker-small">
          <input type="checkbox" />
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
        <label className="rocker rocker-small">
          <input type="checkbox" />
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
      </div>
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
