import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image' 

export const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              transformOptions: {grayscale: true}
            )
          }
        }
      }
    }
  }
`

function Gallery() {

    const data = useStaticQuery(query);
    console.log(data);
  return (
    <div>gallery</div>
  )
}

export default Gallery