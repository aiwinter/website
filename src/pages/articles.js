import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = props => (
  <Layout>
    {" "}
    <SEO title="Articles" />
    <section class="section">
      <div class="container is-fluid">
        {props.data.allNodeArticle.edges.map(page => (
          <div class="content  is-small">
            <h1>
              <Link to={page.node.path.alias}>{page.node.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default ArticlesPage

export const query = graphql`
  query articlesQuery {
    allNodeArticle {
      edges {
        node {
          title
          body {
            value
          }
          path {
            alias
          }
        }
      }
    }
  }
`
