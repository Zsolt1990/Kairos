import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import ContentBlock from "../components/ContentBlock/ContentBlock"
import FeaturedImage from "../components/FeaturedImage/FeaturedImage"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <FeaturedImage imageURL="/images/main page (resized).jpg" accentImageUrl="/images/kairos2.png"/>

      <ContentBlock>
        <a className="Content-Block__sailing-lovers"href="#">Sailing Lovers <br />*The ones who always return to the sea*</a>
      </ContentBlock>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <><title>Kairos Atemporal</title></>

