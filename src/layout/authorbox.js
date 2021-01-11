import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'

import GreenDot from './greendot.js'

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 50px;
  cursor: pointer;
  font-size: 18px;
`

const Avatar = styled(Image)`
  width: 27px !important;
  height: 27px !important;
  border-radius: 100% !important;
  margin-right: 5px !important;

  img {
    margin-bottom: 0px !important;
  }
`

export default ({ author, avatar, onClick }) => (
  <AuthorBox onClick={onClick}>
    <div
      style={{ display: 'flex', alignContent: 'center', marginRight: '10px' }}
    >
      <Avatar fixed={avatar} />
      {author}
    </div>
    <GreenDot />
  </AuthorBox>
)
