import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post, FeaturesImage } from "../components"

const singlePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <FeaturesImage fixed={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglepostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
