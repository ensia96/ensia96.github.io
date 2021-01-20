import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  padding-top: 52px;
  text-align: center;
  font-size: 12px;

  a {
    text-decoration: none !important;
  }
`

export default () => (
  <Footer>
    ©<a href="https://github.com/ensia96">ensia96</a>, Refernced{' '}
    <a href="https://github.com/JaeYeopHan/gatsby-starter-bee">
      Gatsby-starter-bee
    </a>
  </Footer>
)
