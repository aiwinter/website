import { graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const ArticleTemplate = ({ data }) => <h1>{data.article.title}</h1>

export default ArticleTemplate

export const query = graphql`
  query($slug: String!) {
    article: nodeArticle(fields: { slug: { eq: $slug } }) {
      title
    }
  }
`
