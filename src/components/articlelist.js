import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticlesList = data => (
  <div className="columns">
    {data.data.data.allNodeArticle.edges.map(page => (
      <div className="column is-one-quarter" key={page.node.id}>
        <div className="content is-small">
          <Link to={page.node.path.alias}>
            <Img
              fluid={
                page.node.relationships.field_image.localFile.childImageSharp
                  .fluid
              }
            />
            <h1>{page.node.title}</h1>
          </Link>
        </div>
      </div>
    ))}
  </div>
)

export default ArticlesList
