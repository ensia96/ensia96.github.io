import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import Head from '../components/head'
import SponsorButton from '../components/sponsor-button'
import PostNavigator from '../components/post-navigator'
import Disqus from '../components/disqus'
import Utterances from '../components/utterances'

import Post from '../components/post'

import '../styles/code.scss'
import 'katex/dist/katex.min.css'

export default ({
  data: {
    markdownRemark: post,
    markdownRemark: {
      tableOfContents: items,
      html,
      frontmatter: { title: postTitle, date },
    },
    site: {
      siteMetadata: {
        title,
        comment: { disqusShortName, utterances },
        siteUrl,
        sponsor: { buyMeACoffeeId },
      },
    },
  },
  pageContext,
  pageContext: { slug },
  location,
}) => (
  <Layout location={location} items={items} title={title}>
    <Head title={postTitle} description={post.excerpt} />
    <Post title={postTitle} date={date} html={html} />
    {!!buyMeACoffeeId && <SponsorButton sponsorId={buyMeACoffeeId} />}
    <PostNavigator pageContext={pageContext} />
    {!!disqusShortName && (
      <Disqus
        post={post}
        shortName={disqusShortName}
        siteUrl={siteUrl}
        slug={slug}
      />
    )}
    {!!utterances && <Utterances repo={utterances} />}
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        comment {
          disqusShortName
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
