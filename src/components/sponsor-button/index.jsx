import React from 'react'

import styled from 'styled-components'

import './index.scss'

const Logo = styled.img`
  width: 20px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`

const Content = styled.span`
  margin-left: 6px;
`

const Button = styled.a`
  display: inline-block;
  padding: 0px 7px;
  width: 133px;
  height: 33px;
  text-decoration: none;
  background-color: #bb5794;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 6px;
  letter-spacing: -0.08px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 30px;
  text-align: left;

  &:hover,
  &:active {
    background-color: #a0457d;
  }
`

export default ({ sponsorId }) => (
  <div className="sponsor-button">
    <a
      className="bmc-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.buymeacoffee.com/${sponsorId}`}
    >
      <Logo
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <Content>Buy me a coffee</Content>
    </a>
  </div>
)
