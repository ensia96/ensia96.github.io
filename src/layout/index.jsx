import React, { useState, useMemo, useEffect } from 'react'
import { StaticQuery } from 'gatsby'

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

  useEffect(() => {
    isMobile && setOpen(false)
  }, [location])

  return (
    <StaticQuery
      query={layoutQuery}
      render={({
        avatar: {
          childImageSharp: { fixed: avatar },
        },
        site: {
          siteMetadata: { author },
        },
        allMarkdownRemark: { edges },
      }) => {
        const categories = useMemo(
          () =>
            Array.from(
              new Set(edges.map(({ node }) => node.frontmatter.category))
            ),
          []
        )
        return (
          <>
            <Global open={open} />
            <SideBar open={open}>
              <ToggleBox children={<ThemeSwitch />} />
              <AuthorBox author={author} onClick={bioToggle} />
              <Bio open={bio} setBio={setBio} />
              <Category categories={categories} />
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
      }}
    />
  )
}

const layoutQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`
