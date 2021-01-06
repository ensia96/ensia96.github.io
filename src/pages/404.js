import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'

export default ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
  location,
}) => (
  <Layout location={location} title={siteTitle}>
    <Head title="404: Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
