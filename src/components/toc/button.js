import styled from 'styled-components'

export default styled.button`
  z-index: 1;
  position: inherit;

  right: ${({ open }) => (open ? '200px' : 0)};
  transition: right 0.5s;

  width: 18px;
  height: 50px;

  background-color: ${({ theme: { tocButton } }) => tocButton};

  outline: 0;
  border: 1px solid #bbbbbb;

  cursor: pointer;
`
