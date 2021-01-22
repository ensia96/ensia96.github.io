import React from 'react'

import styled from 'styled-components'

import './index.scss'

const Container = styled.div`
  min-height: calc(100vh - 3.5rem);
`

export default React.memo(({ children }) => (
  <div className="thumbnail-container" children={children} />
))
