import React, { useState, useMemo, useEffect } from 'react'
import { StaticQuery } from 'gatsby'

import ThemeProvider from './theme-provider'
import * as style from '../styles/theme'

import useWindowSize from '../hooks/useWindowSize'
import useTheme from '../hooks/useTheme'

import Bio from '../components/bio'

import ThemeSwitch from '../components/theme-switch'
import Footer from '../components/footer'
import Header from '../components/header'

import Category from '../components/category'

import Global from './global.js'
import Main from './main.js'
import Overlay from './overlay.js'
import HeadBar from './headbar.js'
import SideBar from './sidebar.js'
import ToggleBox from './togglebox.js'
import AuthorBox from './authorbox.js'

import TableOfContents from '../components/toc'

export default ({ location, title, items, children }) => (
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
      const { width } = useWindowSize()
      const [open, setOpen] = useState()
      const [bio, setBio] = useState()

      const [theme, toggleTheme] = useTheme()

      const sideToggle = () => setOpen(!open)
      const bioToggle = () => setBio(!bio)

      const isMobile = width < 992

      const isRoot = location.pathname === `${__PATH_PREFIX__}/`

      useEffect(() => {
        isMobile && setOpen(false)
      }, [location])

      const categories = useMemo(
        () =>
          Array.from(
            new Set(edges.map(({ node }) => node.frontmatter.category))
          ),
        []
      )

      console.log(
        edges.map(({ node }) => {
          const pathArray = node.fields.slug.split('/').filter(data => data)

          pathArray.pop()

          return pathArray
        })
      )

      const childrenWithExtraProp = React.Children.map(children, child =>
        React.cloneElement(child, { theme })
      )

      return (
        <ThemeProvider theme={style[theme]}>
          <Global />
          <SideBar open={open}>
            <ToggleBox
              children={<ThemeSwitch theme={theme} toggleTheme={toggleTheme} />}
            />
            <AuthorBox author={author} avatar={avatar} onClick={bioToggle} />
            <Bio open={bio} setBio={setBio} />
            <Category categories={categories} />
          </SideBar>
          {isMobile && (
            <>
              <HeadBar
                open={open}
                isRoot={isRoot}
                title={title}
                sideToggle={sideToggle}
              />
              {open && <Overlay onClick={sideToggle} />}
            </>
          )}
          <Main>
            {items && <TableOfContents items={items} />}
            <Header title={title} isRoot={isRoot} />
            {childrenWithExtraProp}
            <Footer />
          </Main>
        </ThemeProvider>
      )
    }}
  />
)

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
          fields {
            slug
          }
        }
      }
    }
  }
`
