import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ReactHtmlParser from "react-html-parser"
import SEO from "../components/seo"

const ArticleTemplate = ({ data }) => {
  const article = data.allNodeArticle.edges[0].node

  let body_elements = new ReactHtmlParser(article.body.processed, {
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

  let article_component = (
    <Layout>
      <SEO title={article.title} />
      <section className="hero is-info is-fullheight-with-navbar">
        <div
          className="hero-body"
          style={{
            backgroundImage:
              "url(" +
              article.relationships.field_image.localFile.childImageSharp.fluid
                .src +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <h1 className="title">{article.title}</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-fluid">{body_elements}</div>
      </section>
    </Layout>
  )

  return article_component
}

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    allNodeArticle(filter: { fields: { slug: { eq: $slug } } }) {
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
          relationships {
            field_image {
              filename
              localFile {
                id
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
