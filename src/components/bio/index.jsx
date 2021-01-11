import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

const NameShake = styled(Link)`
  display: inline-block;
  font-size: 95%;
  padding: 2px 6px;
  font-weight: bolder;
  border-radius: 8px;
  transform-origin: center;
  animation: flutter 2s infinite linear;
`

const Container = styled.div`
  visibility: ${props => (props.show ? 'visiable' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: visibility 0.15s linear, opacity 0.15s linear;
  display: block;
  position: fixed;
  left: 1rem;
  top: 6rem;
  width: 243px;
  z-index: 3;
  border-radius: 2%;
  border: 1px solid #dddddd;
  background-color: #eeeeee;
  margin: 3px;
  padding: 10px;
`

const OutSide = styled.div`
  visibility: ${props => (props.show ? 'visiable' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 2;
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
            {Object.keys(social).map(key => (
              <a href={`https://github.com/${social[key]}`}>{key}</a>
            ))}
            {social.github && (
              <a href={`https://github.com/${social.github}`}>GitHub</a>
            )}
            {social.medium && (
              <a href={`https://medium.com/${social.medium}`}>Medium</a>
            )}
            {social.twitter && (
              <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
            )}
            {social.facebook && (
              <a href={`https://www.facebook.com/${social.facebook}`}>
                Facebook
              </a>
            )}
            {social.linkedin && (
              <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
                LinkedIn
              </a>
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
