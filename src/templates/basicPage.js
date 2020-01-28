import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ReactHtmlParser from "react-html-parser"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => {
  const page = data.allNodePage.edges[0].node

  let body_elements = new ReactHtmlParser(page.body.processed, {
    transform: function transform(node) {
      if (node.type === "tag" && node.name === "img") {
        let uuid = node.attribs["data-entity-uuid"]
        let i = 0
        for (i = 0; i < data.allFileFile.edges.length; i++) {
          if (
            data.allFileFile.edges[i].node.drupal_id === uuid &&
            data.allFileFile.edges[i].node.localFile &&
            data.allFileFile.edges[i].node.localFile.childImageSharp !== null
          ) {
            return (
              <Img
                fluid={
                  data.allFileFile.edges[i].node.localFile.childImageSharp.fluid
                }
              />
            )
          }
        }
      }

      return undefined
    },
  })

  let page_component = (
    <Layout>
      <SEO title={page.title} />
      <section className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="container fit">
            <h1 className="title">{page.title}</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container fit">{body_elements}</div>
      </section>
    </Layout>
  )

  return page_component
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    allNodePage(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          drupal_id
          title
          body {
            processed
          }
          fields {
            slug
          }
        }
      }
    }
    allFileFile {
      edges {
        node {
          drupal_id
          localFile {
            childImageSharp {
              fluid(maxWidth: 1024) {
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
`
