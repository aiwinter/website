import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{data.article.title}</h1>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <div dangerouslySetInnerHTML={{ __html: data.article.body.value }} />
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    article: nodeArticle(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
    }
  }
`
