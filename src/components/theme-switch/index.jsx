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

const Switch = ({ children, position, checked }) => {
  const left = position === 'left'

  const style = `
background-color: ${
    left ? (checked ? '#0084d0' : '#ddd') : checked ? '#ddd' : '#bd5757'
  };
  bottom: ${left ? (checked ? '0px' : '0.4em') : checked ? '0.4em' : '0'};
  ${
    left
      ? `left: ${checked ? '0.5em' : '0.85em'}`
      : `right: ${checked ? '0.8em' : '0.5em'}`
  };
  height: ${left ? (checked ? '2.5em' : '2.4em') : checked ? '2.4em' : '2.5em'};
  width: ${left ? (checked ? '3em' : '2.75em') : checked ? '2.75em' : '3em'};
  transform: ${
    left
      ? checked
        ? 'rotate(0deg) skewX(0deg)'
        : 'rotate(15deg) skewX(15deg)'
      : checked
      ? 'rotate(-15deg) skewX(-15deg)'
      : 'rotate(0deg) skewX(0deg)'
  };

::before {
${
  left
    ? `
${checked ? 'background-color: transparent; width: 3.0833em;' : 'left: -0.4em;'}
`
    : `right: ${checked ? '-0.4em' : '-0.375em'};
  background-color: ${checked ? '#ccc' : 'transparent'};
  transform: skewY(65deg);`
}

}
    `

  const Component = styled.span`
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
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
      transform: skewY(-65deg);
    }
    ${style}
  `

  return (
    <Component left={left} checked={checked}>
      {children}
    </Component>
  )
}

export default ({ theme, toggleTheme }) => {
  const checked = theme === 'light'

  return (
    <>
      <Container>
        <Input type="checkbox" checked={checked} onChange={toggleTheme} />
        <Switch position="left" checked={checked}>
          <Icon type="sun" />
        </Switch>
        <Switch position="right" checked={checked}>
          <Icon type="moon" />
        </Switch>
      </Container>
      <Container>
        <Input type="checkbox" checked={checked} onChange={toggleTheme} />
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
