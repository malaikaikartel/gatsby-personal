import React from "react"
import { graphql } from "gatsby"

import Link from "../components/link"

import Post from "../components/homepage_post"
import Header from "../components/header"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )

  return (
    <div className="blog-post-container m-auto max-w-6xl lg:px-20 px-8 mt-24">
      <Header name="Anıl Şenay" info="Personal Blog" />
      {sortedPosts.map(post => {
        return (
          <div key={post.frontmatter.title}>
            <Link to={post.frontmatter.slug} style={{ color: "inherit" }}>
              <Post data={post} />
            </Link>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
          keywords
        }
        excerpt(pruneLength: 300)
        html
        wordCount {
          words
        }
      }
    }
  }
`

export default IndexPage
