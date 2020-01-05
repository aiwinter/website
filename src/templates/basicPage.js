import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const PageTemplate = ({ data }) => (
  <Layout>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">{data.page.title}</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-fluid">
        <div class="content">
          <div dangerouslySetInnerHTML={{ __html: data.page.body.value }} />
        </div>
      </div>
    </section>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    page: nodePage(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
    }
  }
`
