import React from 'react'
import styled from 'styled-components'

import Item from './item.js'

const Toggle = styled.details`
  border: transparent;
  margin: 0;

  & > :nth-child(2) {
    margin-top: 0;
  }

  & > summary {
    font-weight: bold;
    padding: 0.1em 0 0.2em;
    background: transparent;
  }

  & > summary:before {
    content: '📁';
    margin-right: 1em;
  }

  &[open] > summary {
    border-bottom: 0;
    &:before {
      content: '📂';
      margin-right: 1em;
    }
  }
`

const Container = styled.div`
  padding-left: 30px;

  & > * {
    margin-top: 10px;
  }
`

export default ({ structure }) => {
  const Recursion = ({ object, object: { path }, title }) => {
    const titles = Object.keys(object)

    return path ? (
      <Item title={title} to={`/?path=${path}`}></Item>
    ) : title ? (
      <Toggle>
        <summary>
          <span>{title}</span>
        </summary>
        {titles.map(title => (
          <Recursion object={object[title]} title={title} />
        ))}
      </Toggle>
    ) : (
      <>
        {titles.map(title => (
          <Recursion object={object[title]} title={title} />
        ))}
      </>
    )
  }

  return (
    <Container>
      <Item icon="🏠" title="Home" to="/" />
      <Recursion object={structure} />
    </Container>
  )
}
