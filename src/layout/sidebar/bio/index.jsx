import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Container from './container'
import OutSide from './outside'

import Title from './title'
import Text from './text'

export default ({ open, setBio }) => (
  <StaticQuery
    query={bioQuery}
    render={({
      avatar: {
        childImageSharp: { fixed: avatar },
      },
      site: {
        siteMetadata: { author, social, introduction },
      },
    }) => (
      <>
        <OutSide show={open} onClick={() => setBio(false)} />
        <Container show={open}>
          <Title
            avatar={avatar}
            author={author}
            social={social}
            setBio={setBio}
          />
          <Text>{introduction}</Text>
        </Container>
      </>
    )}
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
