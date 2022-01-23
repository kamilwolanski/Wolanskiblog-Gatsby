const path = require("path")
const polishDate = require("./polishDate")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    {
      allDatoCmsPost(sort: { fields: [meta___createdAt], order: DESC }) {
        edges {
          node {
            slug
            meta {
              createdAt
            }
          }
        }
      }
    }
  `)
  const posts = res.data.allDatoCmsPost.edges
  const postsPerPage = 2

  posts.forEach((edge, i) => {
    const dates = polishDate.polishDate(posts[i].node.meta.createdAt)
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        isFull: true,
        date: dates,
      },
    })
  })

  const startPage = path.resolve("./src/templates/index.js")
  const numPages = Math.ceil(posts.length / postsPerPage)
  // const dates = posts.map(post => polishDate.polishDate(post.node.meta.createdAt))
  posts.forEach((post, i) => {
    const dates = posts
      .slice(i * postsPerPage, postsPerPage * (i + 1))
      .map(post => polishDate.polishDate(post.node.meta.createdAt))
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: startPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        date: dates,
      },
    })
  })
}
