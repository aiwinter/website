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
    createNodeField({
      node,
      name: `slug`,
      value: node.path.alias,
    })
  }
  if (node.internal.type === `node__page`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.path.alias,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)
  // Query for article nodes to use in creating pages.
  const articles = graphql(
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

  const pageTemplate = path.resolve(`src/templates/basicPage.js`)
  // Query for article nodes to use in creating pages.
  const pages = graphql(
    `
      {
        pages: allNodePage {
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
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {
          slug: node.path.alias,
        },
      })
    })
  })
  return Promise.all([articles, pages])
}
