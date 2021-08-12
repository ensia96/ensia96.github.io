import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import Layout from '../layout'
import Avatar from '../layout/sidebar/avatar'

const A = styled.div`
  @media all and (min-width: 1260px) {
    display: inline-flex;
  }
`
const B = styled.div`
  @media all and (min-width: 1260px) {
    margin-left: 30px;
  }
`

export default ({
  location,
  data: {
    avatar: {
      childImageSharp: { fixed: avatar },
    },
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: { edges: resumes },
  },
}) => {
  const html = resumes.map(({ node }) => node['html'])
  return (
    <Layout location={location} title={title}>
      <A>
        <Avatar size={300} fixed={avatar} />
        <B
          dangerouslySetInnerHTML={{
            __html: html[0],
          }}
        />
      </A>
      <div
        dangerouslySetInnerHTML={{
          __html: html.slice(1).join('<br>'),
        }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/resume.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resume/" } }
      sort: { fields: fields___slug }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
