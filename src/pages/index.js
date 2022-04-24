import React from "react"
import { Container, Content, ContentCard, FeaturesImage } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeaturesImage />
      <Content>
        <ContentCard
          date="april 2022"
          title="Bonjour test"
          excerpt="Petit text des famille blab zecu re vre vev rce verv  vev e v ev ev veve v"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
