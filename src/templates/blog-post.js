import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import Head from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostDate } from '../components/post-date'
import { PostContainer } from '../components/post-container'
import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterances } from '../components/utterances'

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
        author,
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
    <PostTitle title={postTitle} />
    <PostDate date={date} />
    <PostContainer html={html} />
    <SocialShare title={postTitle} author={author} />
    {!!buyMeACoffeeId && <SponsorButton sponsorId={buyMeACoffeeId} />}
    <Bio />
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
        author
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
