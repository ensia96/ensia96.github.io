import React from 'react'
import styled from 'styled-components'

const List = styled.nav`
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  padding: 10px 0;
  ul {
    height: 100%;
    margin: 0;
    list-style: none;
  }
  ul li {
    margin: 0;
  }
  ul li div {
    padding: 5px;
    margin-left: 50px;
  }
`
;`
`

export default ({ children }) => <List children={children} />
