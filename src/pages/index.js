import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    {props.data.allNodeArticle.edges.map(page => (
      <li>
        <ul>
          {page.node.title}
          <br />
          <div dangerouslySetInnerHTML={{ __html: page.node.body.value }} />
        </ul>
      </li>
    ))}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
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
        }
      }
    }
  }
`
