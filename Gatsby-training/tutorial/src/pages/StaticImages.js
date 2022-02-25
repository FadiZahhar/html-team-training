import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StaticImages = () => {
  return (
    <Wrapper>
        <StaticImage
           src="../images/image1.jpg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
     
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;

  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 100px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  } 
`

export default StaticImages