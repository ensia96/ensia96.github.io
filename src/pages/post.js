import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Head from '../components/head'
import SponsorButton from '../components/sponsor-button'
import Navigator from '../components/navigator'
import Utterances from '../components/utterances'

import Post from '../components/post'

import Tags from '../components/tags'

import '../styles/code.scss'
import 'katex/dist/katex.min.css'

export default ({
  data: {
    markdownRemark: post,
    markdownRemark: {
      tableOfContents: items,
      html,
      frontmatter: { title: postTitle, tags, date },
    },
    site: {
      siteMetadata: {
        title,
        comment: { utterances },
        sponsor: { buyMeACoffeeId },
      },
    },
  },
  pageContext,
  location,
}) => (
  <Layout location={location} items={items} title={title}>
    <Head title={postTitle} description={post.excerpt} />
    <Post title={postTitle} date={date} html={html} />
    {!!buyMeACoffeeId && <SponsorButton sponsorId={buyMeACoffeeId} />}
    <Tags tags={tags} />
    <Navigator pageContext={pageContext} />
    {!!utterances && <Utterances repo={utterances} />}
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        comment {
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      tableOfContents
      excerpt(pruneLength: 280, truncate: true)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
