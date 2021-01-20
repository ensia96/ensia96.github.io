import styled from 'styled-components'

export default styled.div`
  min-width: 280px;
  height: 100%;
  position: fixed;
  z-index: 3;

  top: 0;
  left: ${({ open }) => (open ? 0 : '-280px')};
  transition: left 0.5s;

  overflow-x: hidden;

  background-color: #ffc800;
  color: 'white' !important;

  @media all and (min-width: 992px) {
    min-width: 280px;
    left: 0 !important;
  }
`
