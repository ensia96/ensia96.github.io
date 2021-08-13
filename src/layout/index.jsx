import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ThemeProvider from './theme-provider'
import * as style from '../styles/theme'

import useWindowSize from '../hooks/useWindowSize'
import useTheme from '../hooks/useTheme'

import getStructure from '../utils/getStructure'

import Global from './global'
import Overlay from './overlay'

import SideBar from './sidebar'
import HeadBar from './headbar'

import Main from './main'
import TableOfContents from './toc'
import Header from './header'
import Footer from './footer'

import 'katex/dist/katex.min.css'
import '../styles/code.scss'

export default ({ location, title, items, children }) => (
  <StaticQuery
    query={layoutQuery}
    render={({
      avatar: {
        childImageSharp: { fixed: avatar },
      },
      site: {
        siteMetadata: { author, social, introduction },
      },
      allMarkdownRemark: { edges: posts },
    }) => {
      const { width } = useWindowSize()
      const [open, setOpen] = useState()
      const [bio, setBio] = useState()

      const [theme, toggleTheme] = useTheme()

      const sideToggle = () => setOpen(!open)
      const bioToggle = () => setBio(!bio)

      const isMobile = width < 1260

      const isRoot = location.pathname === `${__PATH_PREFIX__}/`

      useEffect(() => {
        isMobile && setOpen(false)
      }, [location])

      const structure = getStructure(posts)

      const childrenWithExtraProp = React.Children.map(children, child =>
        React.cloneElement(child, { theme })
      )

      return (
        <ThemeProvider theme={style[theme]}>
          <Global />
          <SideBar
            open={open}
            theme={theme}
            toggleTheme={toggleTheme}
            author={author}
            avatar={avatar}
            social={social}
            introduction={introduction}
            bioToggle={bioToggle}
            bio={bio}
            setBio={setBio}
            structure={structure}
          />
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
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
        }
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
