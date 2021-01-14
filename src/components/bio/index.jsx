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
  display: flex;
  margin-top: 5px;
  color: white;
  font-size: 65%;
  justify-content: center;
`

const Title = styled.div`
  display: block;
  height: 100%;
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
    }) => (
      <>
        <OutSide show={open} onClick={() => setBio(false)} />
        <Container show={open}>
          <Title>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <Avatar style={{ marginLeft: '5px' }} fixed={avatar} size={100} />
            </div>
            <div style={{ marginLeft: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <NameShake to="/about">@{author}</NameShake>
              </div>
              <AboutMe>↑ About Me!</AboutMe>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '10px',
                  padding: '5px',
                  backgroundColor: '#dddddd',
                  borderRadius: '3%',
                }}
              >
                {Object.entries(social).map(([key, value]) => (
                  <Social key={key} size={15} type={key} value={value} />
                ))}
              </div>
            </div>
          </Title>
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

export default Bio
