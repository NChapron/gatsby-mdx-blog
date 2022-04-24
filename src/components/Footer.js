import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from "../elements"

export const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: {eq: "facebook.svg"}) {
        publicURL
      }
      linkedIn: file(relativePath: {eq: "linkedIn.svg"}) {
        publicURL
      }
      instagram: file(relativePath: {eq: "instagram.svg"}) {
        publicURL
      }
      twitter: file(relativePath: {eq: "twitter.svg"}) {
        publicURL
      }
    }
  `)

    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.linkedIn.publicURL} alt="LinkedIn logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="Instagram logo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="Twitter logo" />
                </a>
            </FooterSocialIcons>
            <P size="xSmall" color="dark3">© 2022 Polygon-Marketing, All right reserved</P>
        </FooterSocialWrapper>
    </FooterWrapper>
}