import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22, 2020"
          title="Lorem ipsum dolor sit amet"
          excerpt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, earum!"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
