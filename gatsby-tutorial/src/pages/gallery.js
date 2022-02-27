import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image' 
import styled from 'styled-components'

export const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 200, layout: FIXED, height: 200)
        }
        name
      }
    }
  }
`

function Gallery() {

    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes;
    
  return (
    <Wrapper>
    {nodes.map((image,index) => {
      const { name } = image
  return(
    <article key={index} className='item'>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name}
      className='gallery-img'/>
      <p>{name}</p>
    </article>
    )
  })}
  </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-wrap:wrap;
.item{
  margin: 1rem;
}
.gallery-img{
  border-radius: 1em;
}
`
export default Gallery