/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

// Create a slug for each article and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `node__article`) {
    const slug = node.path.alias
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)
  // Query for article nodes to use in creating pages.
  return graphql(
    `
      {
        articles: allNodeArticle {
          edges {
            node {
              internalId: drupal_internal__nid
              path {
                alias
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each recipe.
    result.data.articles.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: {
          slug: node.path.alias,
        },
      })
    })
  })
}
