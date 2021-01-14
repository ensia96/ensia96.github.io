import styled from 'styled-components'

export default styled.div`
  visibility: ${props => (props.show ? 'visiable' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: visibility 0.15s linear, opacity 0.15s linear;
  display: block;
  position: fixed;
  left: 1rem;
  top: 6rem;
  width: 242px;
  z-index: 3;
  border-radius: 2%;
  background-color: #272933;
  margin: 3px;
  padding: 10px;
`
