import styled from 'styled-components'

export default styled.nav`
  z-index: 1;
  position: fixed;
  background-color: transparent;

  :hover {
    background-color: white;
  }

  display: inline-block;

  width: 200px;
  right: 0;

  overflow: scroll;
  white-space: nowrap;

  padding: 5px;

  transition: margin 0.5s;
  margin-right: ${({ open }) => (open ? 0 : '-200px')};

  font-size: 14px;
  font-family: Catamaran;

  ul {
    list-style: none;
  }

  ul:nth-child(1) {
    margin-left: 10px;
  }

  a:hover {
    background-color: red;
  }
`
