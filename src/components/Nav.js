import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWraper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "logo.svg"}) {
        publicURL
      }
    }
  `)

  return (
    <NavWraper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My logo" height="60px" />
      </Link>
    </NavWraper>
  )
}
