import styled from 'styled-components'

export default styled.div`
  z-index: 3;
  position: fixed;

  top: 0;
  left: ${({ open }) => (open ? 0 : '-280px')};
  transition: left 0.5s;

  width: 280px;
  height: 100%;

  overflow-x: hidden;

  background-color: ${({ theme: { main } }) => main};
  color: 'white' !important;

  @media all and (min-width: 1260px) {
    left: 0 !important;
  }
`
