import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

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

const Title = styled.div`
  display: block;
  height: 100%;
  padding: 8px 0px;
  border-bottom: 2px solid #dddddd;
`

const AvatarBox = styled.div`
  text-align: center;
`

const SocialBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
  background-color: #cccccc;
  border-radius: 3%;
`

const NameBox = styled.div`
  display: flex;
  justify-content: center;
`

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
          <Title>
            <AvatarBox>
              <Link
                to="/"
                children={<Avatar fixed={avatar} size={100} />}
                onClick={() => setBio(false)}
              />
            </AvatarBox>
            <NameBox children={<NameShake to="/about">@{author}</NameShake>} />
            <SocialBox>
              {Object.entries(social).map(
                ([key, value]) =>
                  value && (
                    <Social key={key} size={15} type={key} value={value} />
                  )
              )}
            </SocialBox>
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
