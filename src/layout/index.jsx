import React, { useState } from 'react'

import useWindowSize from '../hooks/useWindowSize'

import { Bio } from '../components/bio'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

import { Category } from '../components/category'

import Global from './global.js'
import Main from './main.js'
import Overlay from './overlay.js'
import HeadBar from './headbar.js'
import SideBar from './sidebar.js'
import ToggleBox from './togglebox.js'
import AuthorBox from './authorbox.js'

export const Layout = ({ location, title, children }) => {
  const { width } = useWindowSize()
  const [open, setOpen] = useState()
  const [bio, setBio] = useState()

  const sideToggle = () => setOpen(!open)
  const bioToggle = () => setBio(!bio)

  const isMobile = width < 992

  return (
    <>
      <Global open={open} />
      <SideBar open={open}>
        <ToggleBox children={<ThemeSwitch />} />
        <AuthorBox author="춤추는 망고" onClick={bioToggle} />
        {bio && <Bio />}
        <Category />
      </SideBar>
      {isMobile && (
        <>
          <HeadBar open={open} sideToggle={sideToggle} />
          {open && <Overlay onClick={sideToggle} />}
        </>
      )}
      <Main>
        <Header
          title={title}
          location={location}
          rootPath={`${__PATH_PREFIX__}/`}
        />
        {children}
        <Footer />
      </Main>
    </>
  )
}
