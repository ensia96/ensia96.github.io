import React from 'react'

import Icon from './icon'

import styled from 'styled-components'

import './index.scss'

const Container = styled.label`
  display: flex;
  align-items: center;
  font-size: 11px;
  text-align: center;
  background-color: #888;
  border: 3px solid #aaa;
  border-radius: 5%;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Switch = styled.div`
  cursor: pointer;
  position: relative;
  height: 2.5em;
  width: 3em;
  transition: 0.2s;

  ::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: ${({ left }) => (left ? 'skewY(-65deg)' : 'skewY(65deg)')};
  }

  background-color: #ddd;
  bottom: ${({ left, checked }) =>
    left ? (checked ? '0px' : '3.4px') : checked ? '3.4px' : '0'};
  ${({ left, checked }) =>
    left
      ? `left: ${checked ? '0em' : '0.3em'}`
      : `right: ${checked ? '0.3em' : '0em'}`};
  height: ${({ left, checked }) =>
    left ? (checked ? '2.5em' : '2.4em') : checked ? '2.4em' : '2.5em'};
  width: ${({ left, checked }) =>
    left ? (checked ? '34px' : '32px') : checked ? '32px' : '34px'};
  transform: ${({ left, checked }) =>
    left
      ? checked
        ? 'rotate(0deg) skewX(0deg)'
        : 'rotate(15deg) skewX(15deg)'
      : checked
      ? 'rotate(-15deg) skewX(-15deg)'
      : 'rotate(0deg) skewX(0deg)'};

  ::before {
    ${({ left, checked }) =>
      left
        ? checked
          ? 'background-color: transparent;'
          : 'left: -0.4em;'
        : checked
        ? 'right: -0.4em;'
        : 'background-color: transparent'}
`

export default ({ theme, toggleTheme }) => {
  const checked = theme === 'light'

  return (
    <Container>
      <Input type="checkbox" checked={checked} onChange={toggleTheme} />
      <Switch left checked={checked}>
        <Icon type="sun" />
      </Switch>
      <Switch checked={checked}>
        <Icon type="moon" />
      </Switch>
    </Container>
  )
}
