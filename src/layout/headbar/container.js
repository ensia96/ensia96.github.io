import styled from 'styled-components'

export default styled.header`
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;

  background-color: ${({ theme: { main } }) => main};

  @media all and (min-width: 992px) {
    display: none;
  }
`
