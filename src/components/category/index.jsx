import React, { useMemo } from 'react'
import { StaticQuery } from 'gatsby'

import List from './list.js'
import Item from './item.js'

export const Category = ({ category, selectCategory }) => (
  <StaticQuery
    query={categoryQuery}
    render={({ allMarkdownRemark: { edges } }) => {
      const categories = useMemo(
        () =>
          Array.from(
            new Set(edges.map(({ node }) => node.frontmatter.category))
          ),
        []
      )
      return (
        <List>
          <Item
            title="All"
            selectedCategory={category}
            onClick={selectCategory}
          />
          {categories.map((title, idx) => (
            <Item
              key={idx}
              title={title}
              selectedCategory={category}
              onClick={selectCategory}
            />
          ))}
        </List>
      )
    }}
  />
)

const categoryQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          fields {
            slug
          }
          frontmatter {
            category
          }
        }
      }
    }
  }
`
