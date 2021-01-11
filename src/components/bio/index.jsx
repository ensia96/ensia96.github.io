import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import NameShake from './nameshake.js'
import Container from './container.js'
import OutSide from './outside.js'

const Social = styled.a`
  display: block;
  font-size: 80%;
  color: #000000;
`

export const Bio = ({ open, setBio }) => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      const socials = {
        github: { name: 'GitHub', base: 'https://github.com/' },
        medium: { name: 'Medium', base: 'https://medium.com/' },
        twitter: { name: 'Twitter', base: 'https://twitter.com/' },
        facebook: { name: 'Facebook', base: 'https://www.facebook.com/' },
        linkedin: { name: 'LinkedIn', base: 'https://www.linkedin.com/in/' },
      }

      return (
        <>
          <OutSide show={open} onClick={() => setBio(false)} />
          <Container show={open}>
            <div>
              <NameShake to="/about">@{author}</NameShake>
              <span style={{ fontSize: '65%' }}>← About Me!</span>
            </div>
            <div style={{ fontSize: '80%' }}>{introduction}</div>
            {Object.keys(social).map(
              key =>
                social[key] && (
                  <Social
                    href={socials[key].base + social[key]}
                    target="_blank"
                  >
                    {socials[key].name}
                  </Social>
                )
            )}
          </Container>
        </>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
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
  }
`

export default Bio
