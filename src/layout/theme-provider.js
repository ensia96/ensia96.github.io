import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as style from '../styles/theme'

export default ({ theme, children }) => (
  <ThemeProvider theme={theme ? theme : style['light']}>
    {children}
  </ThemeProvider>
)
