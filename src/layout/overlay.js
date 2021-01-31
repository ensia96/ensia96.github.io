import styled from 'styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;

  background-color: #333333;

  z-index: 2;

  @media all and (min-width: 992px) {
    display: none;
  }
`
