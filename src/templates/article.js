import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <section class="hero is-info is-large">
      <div
        class="hero-body"
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
        <div class="container">
          <h1 class="title">{data.article.title}</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-fluid">
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
