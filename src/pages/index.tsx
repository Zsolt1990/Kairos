import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"
import ContentBlock from "../components/ContentBlock/ContentBlock"
import FeaturedImage from "../components/FeaturedImage/FeaturedImage"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <FeaturedImage imageURL="/images/main page(resized).jpg" accentImageUrl="/images/kairos2.png"/>

      <ContentBlock>
        <h1>About</h1>
          <div>Kairōs assembles the essence of creating and embodying the different currents  forces from cosmos in the
               research for fine beauty and harmony throughout the expression of clothing wear.
               <br />
               <br />
               Universal current flows, astronomy, astrology, nature, and old history are the main inspiration 
               for the research of balance in beauty. This is why the image of Kairos, is eclectic and moving along 
               time, as regards ideas, design and materials.
               <br />
               <br />
               The Greek god Kairos, has two wings and a scale in his hand, and is always open to move into new 
               adventures while looking for EQUILIBRIUM. 
               <br />
               <br />
               Kairos started in Buenos Aires ( Argentina) in 2020, and it's slowly  progressing with determination,
               looking to redefine beauty, and enjoying handmade work, creativity, evolution and innovation.
               Following the trips that the founder keeps on doing, the brand it is developing and finding the best
               language at each moment. 
               <br />
               <br />
               Maureen Tursi began designing and making clothes out of the simple desire to be able to feel the 
               nobility on her skin, and to be able to be as faithful to her emotional states. 
               
               Somehow clothes manifest what we like. But above all things, Maureen wanted to unite the currents of 
               physical beauty with the subtle beauty of maintaining a balance in the quality of the materials, both 
               for the skin and for the Earth. She became obsessed with the idea of ​​manifesting beauty at all levels,
               as an expression of the original cosmic forces. With a strong interest in searching, investigating, and
               discovering new ways, Maureen is not satisfied with just a manifestation of natural inspiration. That is
               why, although she works on cotton, canvas, gause, linen, silk, tuxedos, velvets, organic corduroys, 
               hand-dyed, whenever possible, naturally, she is still in search of new materials, drifting Kairos towards
               BIOMATERIALS. That is why she created Kairõs Timeless Eco Wear, and Kairõs Creative Artisanal Wear.
               Discover the stories behind the Firm's collections, exclusively in our Stories.
               </div>  
               <br />
               <br />

        <a className="Content-Block__sailing-lovers"href="#">Sailing Lovers <br />*The ones who always return to the sea*</a>
      </ContentBlock>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <><title>Kairos Atemporal</title></>

