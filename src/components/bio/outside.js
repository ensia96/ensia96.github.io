import styled from 'styled-components'

export default styled.div`
  visibility: ${props => (props.show ? 'visiable' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 2;
`
