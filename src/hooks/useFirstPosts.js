import { graphql, useStaticQuery } from "gatsby"

export const useFirstPosts = () => {
  const query = graphql`
    {
      allDatoCmsPost(
        sort: { fields: [meta___createdAt], order: [DESC] }
        limit: 4
      ) {
        edges {
          node {
            title
            meta {createdAt}
            slug
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  return { posts: data.allDatoCmsPost.edges }
}
