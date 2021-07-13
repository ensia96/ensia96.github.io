import React from 'react'

import Container from './container.js'

import ToggleBox from './toggle-box'
import AuthorBox from './author-box'
import Bio from './bio'
import Category from './category'

export default ({
  open,
  theme,
  toggleTheme,
  author,
  avatar,
  bioToggle,
  bio,
  setBio,
  structure,
}) => (
  <Container open={open}>
    <ToggleBox theme={theme} toggleTheme={toggleTheme} />
    <AuthorBox author={author} avatar={avatar} onClick={bioToggle} />
    <Bio open={bio} setBio={setBio} />
    <Category structure={structure} />
  </Container>
)
