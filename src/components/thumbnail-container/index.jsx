import React from 'react'

import Container from './container'

import './index.scss'

export default React.memo(({ children }) => <Container children={children} />)
