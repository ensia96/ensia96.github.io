import React from 'react'
import Switch from 'react-switch'

import Icon from './icon'

import styled from 'styled-components'

import './index.scss'

const Container = styled.label`
  position: relative;
  text-align: center;
  color: #888;
  width: 7em;
  height: 4em;
  overflow: hidden;
  border-bottom: 0.5em solid #eee;
`

export default ({ theme, toggleTheme }) => {
  console.log('theme : ', theme)

  return (
    <>
      <Container>
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
      </Container>
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
