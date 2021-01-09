import { graphql } from 'gatsby'
import React from 'react'
import { Bio } from '../components/bio'
import { Contents } from '../components/contents'
import { Head } from '../components/head'
import { HOME_TITLE } from '../constants'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useRenderedCount } from '../hooks/useRenderedCount'
import { useScrollEvent } from '../hooks/useScrollEvent'
import { Layout } from '../layout'
import * as Dom from '../utils/dom'
import * as EventManager from '../utils/event-manager'

const BASE_LINE = 80

export default ({
  data: {
    site: {
      siteMetadata: {
        configs: { countOfInitialPost },
        title,
        keywords,
      },
    },
    allMarkdownRemark: { edges: posts },
  },
  location,
}) => {
  const [count, countRef, increaseCount] = useRenderedCount()

  const category = window.location.search.split('=').pop()

  useIntersectionObserver()
  useScrollEvent(() => {
    const isTriggerPos = () =>
      Dom.getDocumentHeight() - (window.scrollY + window.innerHeight) <
      BASE_LINE
    const doesNeedMore = () =>
      posts.length > countRef.current * countOfInitialPost

    return EventManager.toFit(increaseCount, {
      dismissCondition: () => !isTriggerPos(),
      triggerCondition: () => isTriggerPos() && doesNeedMore(),
    })()
  })

  return (
    <Layout location={location} title={title}>
      <Head title={HOME_TITLE} keywords={keywords} />
      <Bio />
      <Contents
        posts={posts}
        countOfInitialPost={countOfInitialPost}
        count={count}
        category={category}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
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
            date(formatString: "MMMM DD, YYYY")
            title
            category
            draft
          }
        }
      }
    }
  }
`
