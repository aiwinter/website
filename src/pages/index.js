import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <section class="section">
      <div class="container">
        {props.data.allNodeArticle.edges.map(page => (
          <div class="content is-small">
            <h1>
              <Link to={page.node.path.alias}>{page.node.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query pageQuery {
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
