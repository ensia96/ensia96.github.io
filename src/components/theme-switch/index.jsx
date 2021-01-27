import React from 'react'
import Switch from 'react-switch'

import './index.scss'

import Icon from './icon'

export default ({ toggleTheme }) => (
  <div className="switch-container">
    <label htmlFor="normal-switch">
      <Switch
        onChange={toggleTheme}
        checked={localStorage.getItem('theme') === 'dark'}
        id="normal-switch"
        height={24}
        width={48}
        checkedIcon={
          <div className="icon checkedIcon">
            <Icon type="moon" />
          </div>
        }
        uncheckedIcon={
          <div className="icon uncheckedIcon">
            <Icon type="sun" />
          </div>
        }
        offColor={'#d9dfe2'}
        offHandleColor={'#fff'}
        onColor={'#999'}
        onHandleColor={'#282c35'}
      />
    </label>
  </div>
)
