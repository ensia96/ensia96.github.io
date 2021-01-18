import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostDate } from '../components/post-date'
import { PostContainer } from '../components/post-container'
import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterances } from '../components/utterances'

import TableOfContents from '../components/toc'

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
}) => {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined)

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl
      const headerElements = document.querySelectorAll('.anchor-header')

      Object.values(headerElements).every((elem, i) =>
        0 < elem.getBoundingClientRect().top - 100
          ? setCurrentHeaderUrl(aboveHeaderUrl?.split(location.origin)[1])
          : (i === headerElements.length - 1
              ? setCurrentHeaderUrl(elem.href.split(location.origin)[1])
              : (aboveHeaderUrl = elem.href)) || true
      )
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout location={location} title={title}>
      <Head title={postTitle} description={post.excerpt} />
      <PostTitle title={postTitle} />
      <TableOfContents items={items} currentHeaderUrl={currentHeaderUrl} />
      <PostDate date={date} />
      <PostContainer html={html} />
      <SocialShare title={postTitle} author={author} />
      {!!buyMeACoffeeId && <SponsorButton sponsorId={buyMeACoffeeId} />}
      <Elements.Hr />
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
}

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
