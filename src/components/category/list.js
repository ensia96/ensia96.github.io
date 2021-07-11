import styled from 'styled-components'

export default styled.details`
  border: transparent;
  margin: 0;

  & > :nth-child(2) {
    margin-top: 0;
  }

  & > summary {
    margin-top: 0;
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
