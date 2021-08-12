import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Avatar from '../layout/sidebar/avatar'

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
}) => (
  <Layout location={location} title={title}>
    <Avatar size={300} fixed={avatar} />
    <div
      dangerouslySetInnerHTML={{
        __html: resumes.map(({ node }) => node['html']).join('<br>'),
      }}
    />
  </Layout>
)

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
