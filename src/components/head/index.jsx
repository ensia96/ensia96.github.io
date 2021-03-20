import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = ({ description, lang, keywords = [], title }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaData = {
        htmlAttributes: {
          lang: 'ko',
        },
        title,
        titleTemplate: `%s | ${data.site.siteMetadata.title}`,
      }
      const metaDescription = description || data.site.siteMetadata.description
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
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
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            {
              name: `keywords`,
              content: keywords.join(`, `),
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
