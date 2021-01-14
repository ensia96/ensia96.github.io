import styled from 'styled-components'

import Image from 'gatsby-image'

export default styled(Image)`
  width: ${({ size }) => size}px !important;
  height: ${({ size }) => size}px !important;
  border-radius: 100% !important;
  margin: 0px 5px !important;

  img {
    margin-bottom: 0px !important;
  }
`
