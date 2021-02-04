import React from 'react'

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
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Switch = ({ children }) => {
  const baseStyle = `
cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 3em;
  transition: 0.2s;

::before {
  content: "";
  position: absolute;
  width: 0.4em;
  height: 2.45em;
  bottom: -0.45em;
  background-color: #ccc;
  transform: skewY(-65deg);
}
    `

  const Component = styled.span``

  return <Component>{children}</Component>
}

export default ({ theme, toggleTheme }) => {
  console.log('theme : ', theme)

  return (
    <>
      <Container>
        <Input
          type="checkbox"
          checked={theme === 'light'}
          onChange={toggleTheme}
        />
        <Switch>
          <Icon type="sun" />
        </Switch>
        <Switch>
          <Icon type="moon" />
        </Switch>
      </Container>
      <Container>
        <Input
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
    </>
  )
}
