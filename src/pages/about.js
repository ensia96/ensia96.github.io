import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Introduction from '../components/introduction'

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
      <Introduction html={html[0]} avatar={avatar} />
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
