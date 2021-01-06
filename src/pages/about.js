import React from 'react'
import { graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import { ENGLISH } from '../constants'

export default ({
  data: {
    allMarkdownRemark: { edges: resumes },
  },
}) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
        3 / 4
      )}`,
    }}
  >
    <div
      dangerouslySetInnerHTML={{
        __html: resumes
          .filter(
            ({
              node: {
                frontmatter: { lang },
              },
            }) => lang === ENGLISH
          )
          .map(({ node }) => node)
          .shift()['html'],
      }}
    />
  </div>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
