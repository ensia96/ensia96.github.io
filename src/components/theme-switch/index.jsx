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

  ::before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    border: 0.5em solid #eee;
    border-bottom: 0;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
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
