import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container is-fluid box-content">
          <h1 className="title ">{`[{A.I.Winter}]`}</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-fluid">
        <div className="columns">
          {props.data.allNodeArticle.edges.map(page => (
            <div className="column is-one-quarter" key={page.node.id}>
              <div className="content is-small">
                <Link to={page.node.path.alias}>
                  <Img
                    fluid={
                      page.node.relationships.field_image.localFile
                        .childImageSharp.fluid
                    }
                  />
                  <h1>{page.node.title}</h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
