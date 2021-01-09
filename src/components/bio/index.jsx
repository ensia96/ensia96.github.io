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
  position: absolute;
  z-index: 1;
  border-radius: 2%;
  background-color: white;
  margin: 3px;
`

export const Bio = ({ open }) => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <Container show={open}>
          <div className="bio">
            <div className="author">
              <div className="author-description">
                <Image
                  className="author-image"
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    borderRadius: `100%`,
                  }}
                />
                <div className="author-name">
                  <NameShake to="/about">@{author}</NameShake>
                  <span className="author-name-prefix">← About Me!</span>
                  <div className="author-introduction">{introduction}</div>
                  <p className="author-socials">
                    {social.github && (
                      <a href={`https://github.com/${social.github}`}>GitHub</a>
                    )}
                    {social.medium && (
                      <a href={`https://medium.com/${social.medium}`}>Medium</a>
                    )}
                    {social.twitter && (
                      <a href={`https://twitter.com/${social.twitter}`}>
                        Twitter
                      </a>
                    )}
                    {social.facebook && (
                      <a href={`https://www.facebook.com/${social.facebook}`}>
                        Facebook
                      </a>
                    )}
                    {social.linkedin && (
                      <a
                        href={`https://www.linkedin.com/in/${social.linkedin}/`}
                      >
                        LinkedIn
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
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
