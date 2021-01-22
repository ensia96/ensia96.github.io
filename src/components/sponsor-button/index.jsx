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

export default ({ sponsorId }) => (
  <div className="sponsor-button">
    <a
      className="bmc-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.buymeacoffee.com/${sponsorId}`}
    >
      <img
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>Buy me a coffee</span>
    </a>
  </div>
)
