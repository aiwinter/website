import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.page.title} />
    <section className="hero is-medium is-dark">
      <div className="hero-body">
        <div className="container is-fluid">
          <h1 className="title">{data.page.title}</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-fluid">
        <div className="content">
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
