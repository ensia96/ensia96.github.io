import React from 'react'
import styled from 'styled-components'

import GreenDot from './greendot.js'

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 10px;
  height: 50px;
  cursor: pointer;
  font-size: 18px;
`

export default ({ author, onClick }) => (
  <AuthorBox onClick={onClick}>
    <GreenDot />
    <span>
      <b>{author}</b>
    </span>
  </AuthorBox>
)
