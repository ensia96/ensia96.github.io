import styled from 'styled-components'

export default styled.button`
  z-index: 1;
  position: absolute;

  top: 20px;
  left: -19px;

  width: 18px;
  height: 50px;

  background-color: ${({ theme: { tocButton } }) => tocButton};

  outline: 0;
  border: 1px solid #bbbbbb;

  cursor: pointer;
`
