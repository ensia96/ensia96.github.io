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

export default ({ author, avatar, onClick }) => (
  <AuthorBox onClick={onClick}>
    <div
      style={{ display: 'flex', alignContent: 'center', marginRight: '10px' }}
    >
      <Image
        style={{
          width: '27px',
          height: '27px',
          borderRadius: '100%',
          marginRight: '5px',
        }}
        fixed={avatar}
      />
      {author}
    </div>
    <GreenDot />
  </AuthorBox>
)
