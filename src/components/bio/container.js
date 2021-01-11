import styled from 'styled-components'

export default styled.div`
  visibility: ${props => (props.show ? 'visiable' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: visibility 0.12s linear, opacity 0.12s linear;
  display: block;
  position: fixed;
  left: 1rem;
  top: 6rem;
  width: 243px;
  z-index: 3;
  border-radius: 2%;
  background-color: #5c592c;
  margin: 3px;
  padding: 10px;
`
