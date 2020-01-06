import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.article.title} />
    <section className="hero is-info is-fullheight-with-navbar">
      <div
        className="hero-body"
        style={{
          backgroundImage:
            "url(" +
            data.article.relationships.field_image.localFile.childImageSharp
              .fluid.src +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1 className="title">{data.article.title}</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-fluid">
        <div dangerouslySetInnerHTML={{ __html: data.article.body.value }} />
      </div>
    </section>
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
`
