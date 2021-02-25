import React from 'react'

import { graphql } from 'gatsby'
import { renderToString } from 'react-dom/server'

import Layout from '../layout'
import Introduction from '../components/introduction'

import Date from '../components/post/date'

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
  const html = resumes.map(
    ({
      node: {
        html,
        frontmatter: { date },
      },
    }) => html + renderToString(<Date>{`최종 수정일 : ${date}`}</Date>)
  )

  return (
    <Layout location={location} title={title}>
      <base target="_blank" />
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
