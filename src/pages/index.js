import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-fullheight-with-navbar box-content">
      <div className="hero-body">
        <div className="container is-fluid">
          <h1 className="title ">{`[{ A.I.Winter }]`}</h1>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
