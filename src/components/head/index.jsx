import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = ({ description, title }) => (
  <StaticQuery
    query={detailsQuery}
    render={({
      site: {
        siteMetadata: { title: _title, description: _description, author },
      },
    }) => {
      const metaData = {
        htmlAttributes: {
          lang: 'ko',
        },
        title,
        titleTemplate: `%s | ${_title}`,
      }
      const metaDescription = description || _description
      return (
        <Helmet
          {...metaData}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `description`,
              content: metaDescription,
            },
            {
              property: `og:locale`,
              content: `ko_KR`,
            },
            {
              property: `og:site_name`,
              content: _title,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary_large_image`,
            },
            {
              name: `twitter:creator`,
              content: author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]}
        />
      )
    }}
  />
)

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default Head
