const {
  reporter,
} = require("gatsby/node_modules/gatsby-cli/lib/reporter/reporter")

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              image {
                file {
                  url
                }
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
              description {
                description
              }
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulPost

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: path.resolve("./src/components/post.js"),
      context: { post: edge.node },
    })
  })
}
