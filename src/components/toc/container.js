import styled from 'styled-components'

export default styled.nav`
  z-index: 1;
  position: fixed;
  display: inline-block;

  right: ${({ open }) => (open ? 0 : '-200px')};
  transition: right 0.5s;

  width: 200px;

  background-color: white;

  border-top-left-radius: 1%;
  border-bottom-left-radius: 1%;

  border: 1px solid #dddddd;

  overflow: scroll;
  white-space: nowrap;

  padding: 10px;

  font-size: 14px;
  font-family: Catamaran;

  ul {
    list-style: none;
  }

  ul:nth-child(1) {
    margin-left: 0px;
  }

  a:hover {
    color: gray;
  }
`
