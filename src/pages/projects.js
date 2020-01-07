import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ProjectsPage = props => (
  <Layout>
    {" "}
    <SEO title="Projects" />
    <section className="section">
      <div className="container is-fluid">
        <div className="columns">
          {props.data.allNodeProject.edges.map(page => (
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

export default ProjectsPage

export const query = graphql`
  query projectsQuery {
    allNodeProject {
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
