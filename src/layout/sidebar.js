import React from 'react'
import styled from 'styled-components'

export default styled.div`
  min-width: 280px;
  height: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  overflow-x: hidden;

  background-color: #ffc800;
  color: 'white' !important;

  transition: margin 0.5s;
  margin-left: ${({ open }) => (open ? 0 : '-280px')};

  @media all and (min-width: 992px) {
    min-width: 280px;
    margin-left: 0 !important;
  }
`
