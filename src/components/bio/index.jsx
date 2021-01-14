import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import NameShake from './nameshake.js'
import Container from './container.js'
import OutSide from './outside.js'
import Social from './social.js'

import Avatar from '../avatar'

const Text = styled.div`
  width: 100%;
  font-size: 83%;
  padding: 5px;
  margin: 10px 0px;
  color: #ffffff;
`

const AboutMe = styled.span`
  margin-left: 3px;
  color: white;
  font-size: 65%;
`

const Title = styled.div`
  padding: 8px 0px;
  border-bottom: 2px solid #dddddd;
`

export const Bio = ({ open, setBio }) => (
  <StaticQuery
    query={bioQuery}
    render={({
      avatar: {
        childImageSharp: { fixed: avatar },
      },
      site: {
        siteMetadata: { author, social, introduction },
      },
    }) => {
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
            <Avatar fixed={avatar} size={100} />
            <Title>
              <NameShake to="/about">@{author}</NameShake>
              <AboutMe>← About Me!</AboutMe>
            </Title>
            <Text>{introduction}</Text>
            {Object.entries(social).map(
              ([key, value]) =>
                value && (
                  <Social
                    key={key}
                    href={socials[key].base + value}
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
