import React from 'react'

import Icon from './icon'

import styled from 'styled-components'

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
  transition: 0.2s;

  background-color: #ddd;

  ::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 27px;
    bottom: -5px;
    background-color: #ccc;
    transform: ${({ left }) => (left ? 'skewY(-65deg)' : 'skewY(65deg)')};
  }

  bottom: ${({ left, checked }) => (!!left === checked ? '0px' : '3.4px')};
  ${({ left, checked }) =>
    `${left ? 'left' : 'right'}: ${!!left === checked ? '0' : '3px'}`};

  height: ${({ left, checked }) => (!!left === checked ? '27.5px' : '26.5px')};
  width: ${({ left, checked }) => (!!left === checked ? '34px' : '32px')};

  transform: ${({ left, checked }) =>
    !!left === checked
      ? 'rotate(0deg) skewX(0deg)'
      : left
      ? 'rotate(15deg) skewX(15deg)'
      : 'rotate(-15deg) skewX(-15deg)'};

  ::before {
    ${({ left, checked }) =>
      !!left === checked
        ? 'background-color: transparent;'
        : `${left ? 'left' : 'right'}: -4px`}
`

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
