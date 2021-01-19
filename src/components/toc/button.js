import styled from 'styled-components'

export default styled.button`
  z-index: 1;
  position: fixed;
  top: 30%;
  right: 200px;
  width: 15px;
  height: 50px;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  transition: margin 0.5s;
  margin-right: ${({ open }) => (open ? 0 : '-200px')};
  outline: 0;
  border: 1px solid gray;
`
