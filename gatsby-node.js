const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const blogPostTemplate = path.resolve(`./src/pages/post.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { category: { ne: null }, draft: { eq: false } }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
                draft
              }
            }
          }
        }
      }
    `
  ).then(
    ({
      errors,
      data: {
        allMarkdownRemark: { edges: posts },
      },
    }) => {
      if (errors) {
        throw errors
      }

      const isLastPost = posts.length - 1

      posts.forEach((post, index) => {
        const previous = index === isLastPost ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: post.node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    }
  )
}

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  node.internal.type === `MarkdownRemark` &&
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    })
}
