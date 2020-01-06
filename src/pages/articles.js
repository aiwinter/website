import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Articlelist from "../components/articlelist"

const ArticlesPage = props => (
  <Layout>
    {" "}
    <SEO title="Articles" />
    <section className="section">
      <div className="container is-fluid">
        <Articlelist data={props} />
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
          id
          title
          body {
            value
          }
          path {
            alias
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
