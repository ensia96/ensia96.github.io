import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'

export default ({
  location,
  data: {
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: { edges: resumes },
  },
}) => (
  <Layout location={location} title={title}>
    <div
      dangerouslySetInnerHTML={{
        __html: resumes.map(({ node }) => node['html']).join('<br>'),
      }}
    />
  </Layout>
)

export const pageQuery = graphql`
  query {
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
