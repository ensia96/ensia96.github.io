import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import NameShake from './nameshake.js'
import Container from './container.js'
import OutSide from './outside.js'
import Social from './social.js'

const Text = styled.div`
  width: 100%;

  font-size: 80%;

  padding: 5px;
  margin: 10px 0px;

  border-radius: 5%;

  background: #9796f0;
  background: -webkit-linear-gradient(to right, #fbc7d4, #9796f0);
  background: linear-gradient(to right, #fbc7d4, #9796f0);

  resize: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
            <div style={{ marginTop: '3px' }}>
              <NameShake to="/about">@{author}</NameShake>
              <span
                style={{ marginLeft: '3px', color: 'white', fontSize: '65%' }}
              >
                ← About Me!
              </span>
            </div>
            <Text>{introduction}</Text>
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
